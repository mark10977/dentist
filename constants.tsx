
import { Service, Doctor, PricingPlan, Testimonial, TimetableEntry, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Performance Implants',
    description: 'Advanced structural restoration using high-precision titanium implants for a permanent, high-performance smile.',
    icon: 'fa-tooth',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Cosmetic Architecture',
    description: 'Bespoke smile redesigns using porcelain veneers and digital smile design technology to create aesthetic perfection.',
    icon: 'fa-wand-magic-sparkles',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Precision Orthodontics',
    description: 'High-speed alignment solutions including Invisalign and clear braces for perfect alignment in record time.',
    icon: 'fa-grip-lines-vertical',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Bio-Mechanics of 3D Implants',
    excerpt: 'Exploring how digital structural mapping is changing the lifespan of modern dental implants.',
    content: 'Full clinical report on the integration of 3D mapping and titanium alloys...',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Architecture of a Smile',
    excerpt: 'How we use facial symmetry and golden ratios to design veneers that look natural and perform better.',
    content: 'A deep dive into the aesthetic principles of modern cosmetic dentistry...',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    category: 'Cosmetic'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Thomas A. Sigafoos',
    role: 'Lead Clinical Architect',
    bio: 'Pioneer in restorative dentistry with over 20 years of experience in creating high-performance smiles.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b1f8?auto=format&fit=crop&q=80&w=800',
    specialties: ['Restorative', 'Implants', 'Digital Design']
  },
  {
    id: '2',
    name: 'Dr. Sarah Mitchell',
    role: 'Cosmetic Specialist',
    bio: 'Dedicated to the art of smile design and advanced aesthetic treatments.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    specialties: ['Veneers', 'Whitening', 'Aesthetics']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Performance Base',
    price: '$99',
    period: 'per month',
    features: ['2 Annual Screenings', 'Professional Cleaning', 'Emergency Exams', '10% Off Restorative'],
    cta: 'Start Maintenance'
  },
  {
    name: 'The Elite Smile',
    price: '$249',
    period: 'per month',
    features: ['Unlimited Exams', '2 Elite Cleanings', 'In-Office Whitening', '25% Off Orthodontics', 'Priority Booking'],
    cta: 'Join Elite',
    highlight: true
  },
  {
    name: 'Restoration Pro',
    price: '$499',
    period: 'per month',
    features: ['Annual CT Scan', 'Periodontal Care', 'Zero Wait Time', '50% Off Specialist Consults'],
    cta: 'Get Restored'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    text: "The precision and energy here is unmatched. It feels like a high-end performance lab for your health.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    text: "I finally have the smile I deserve. The dark, modern atmosphere actually made me feel more relaxed and confident.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=2'
  }
];

export const TIMETABLE: TimetableEntry[] = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' }
];
