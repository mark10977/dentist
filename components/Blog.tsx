
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { INITIAL_BLOGS } from '../constants';

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isManagerMode, setIsManagerMode] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cde_blogs');
    if (saved) {
      setBlogs(JSON.parse(saved));
    } else {
      setBlogs(INITIAL_BLOGS);
    }
  }, []);

  const saveToStorage = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    localStorage.setItem('cde_blogs', JSON.stringify(newBlogs));
  };

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: 'New Clinical Report',
      excerpt: 'Brief summary of the update...',
      content: 'Detailed report content...',
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      category: 'General'
    };
    saveToStorage([newPost, ...blogs]);
  };

  const handleDelete = (id: string) => {
    if (confirm('Permanently delete this report?')) {
      saveToStorage(blogs.filter(b => b.id !== id));
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;
    const updated = blogs.map(b => b.id === editingPost.id ? { ...b, ...editingPost } as BlogPost : b);
    saveToStorage(updated);
    setEditingPost(null);
  };

  return (
    <section id="reports" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Clinical <span className="text-cyan-400">Reports</span>
            </h2>
            <p className="text-white/40 max-w-xl">
              Latest insights into dental performance engineering and technological breakthroughs.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsManagerMode(!isManagerMode)}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${isManagerMode ? 'bg-cyan-500 text-black border-cyan-500' : 'border-white/20 text-white/40 hover:border-white'}`}
            >
              <i className="fas fa-lock-open mr-2"></i>
              {isManagerMode ? 'Exit Manager Mode' : 'Manager Access'}
            </button>
            {isManagerMode && (
              <button 
                onClick={handleAddPost}
                className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors"
              >
                New Report
              </button>
            )}
          </div>
        </div>

        {/* Edit Modal */}
        {editingPost && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <div className="bg-glass border border-white/10 p-8 rounded-3xl w-full max-w-2xl animate-in fade-in zoom-in-95">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Edit Clinical Report</h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <input 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none"
                  value={editingPost.title}
                  onChange={e => setEditingPost({...editingPost, title: e.target.value})}
                  placeholder="Title"
                />
                <input 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none"
                  value={editingPost.category}
                  onChange={e => setEditingPost({...editingPost, category: e.target.value})}
                  placeholder="Category"
                />
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none h-32"
                  value={editingPost.excerpt}
                  onChange={e => setEditingPost({...editingPost, excerpt: e.target.value})}
                  placeholder="Excerpt"
                />
                <div className="flex gap-4">
                  <button type="submit" className="flex-1 bg-cyan-500 text-black font-black uppercase py-4 rounded-xl text-xs tracking-widest">Save Changes</button>
                  <button type="button" onClick={() => setEditingPost(null)} className="flex-1 bg-white/5 text-white font-black uppercase py-4 rounded-xl text-xs tracking-widest">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
              <div className="h-56 relative overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-3">{post.date}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    Read Analysis <i className="fas fa-arrow-right"></i>
                  </button>
                  
                  {isManagerMode && (
                    <div className="flex gap-2">
                      <button onClick={() => setEditingPost(post)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => handleDelete(post.id)} className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-500 flex items-center justify-center text-xs">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
