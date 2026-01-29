
import { Service, Doctor, PricingPlan, Review, TimetableEntry, BlogPost, LocationInfo, GalleryItem } from './types';

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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Full Arch Restoration',
    description: 'Complete upper and lower implant restoration for maximum performance.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
    category: 'Implants'
  },
  {
    id: 'g2',
    title: 'Elite Porcelain Veneers',
    description: 'Digital smile design using custom porcelain architecture.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    category: 'Veneers'
  },
  {
    id: 'g3',
    title: 'Surgical Precision',
    description: 'Complex bone grafting and site preparation for implant success.',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800',
    category: 'Surgery'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'James Peterson',
    text: "The technology here is from another planet. Dr. Sigafoos explained the architecture of my new smile in 3D before starting. Unbelievable precision.",
    rating: 5,
    date: 'March 2024',
    source: 'Google'
  },
  {
    id: 'r2',
    name: 'Melissa Thorne',
    text: "Fast, efficient, and high energy. I came in for an implant and felt like I was in a high-tech performance center. The results are life-changing.",
    rating: 5,
    date: 'April 2024',
    source: 'Yelp'
  },
  {
    id: 'r3',
    name: 'David Wilson',
    text: "Professionalism at its peak. The membership plan makes elite dental care accessible. My implants look and feel 100% natural.",
    rating: 5,
    date: 'May 2024',
    source: 'Zocdoc'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    county: 'ORANGE COUNTY',
    city: 'Cornwall, NY',
    name: 'Creating Dental Excellence',
    services: ['Implant Center', 'Veneer and Aligner Center', 'Adult and Pediatric Dentistry'],
    address: '222 Main St',
    cityStateZip: 'Cornwall, NY 12518-1514',
    phone: '(845) 534-3828',
    websiteLabel: 'Cornwall Office Website',
    websiteUrl: 'https://www.creatingdentalexcellence.com/locations.html'
  },
  {
    county: 'WESTCHESTER COUNTY',
    city: 'Yorktown Heights, NY',
    name: 'Creating Dental Excellence',
    services: ['Same Day CEREC Center', 'Implant Center', 'Adult and Pediatric Dentistry'],
    address: '1940 Commerce St #202',
    cityStateZip: 'Yorktown Heights, NY 10598-4447',
    phone: '(914) 243-7373',
    websiteLabel: 'Yorktown Office Website',
    websiteUrl: 'https://www.creatingdentalexcellence.com/locations.html'
  },
  {
    county: 'BRONX COUNTY',
    city: 'The Bronx, NY',
    name: 'Creating Dental Excellence',
    services: ['Implant Center', 'Aligner Center', 'Adult and Family Dentistry'],
    address: '3366 Boston Rd',
    cityStateZip: 'The Bronx, NY 10469',
    phone: '(718) 547-5280',
    websiteLabel: 'Visit Bronx Office',
    websiteUrl: 'https://www.creatingdentalexcellence.com/locations.html'
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
