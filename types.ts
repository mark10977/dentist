
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  source: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Implants' | 'Veneers' | 'Whitening' | 'Surgery';
}

export interface TimetableEntry {
  day: string;
  hours: string;
  note?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface LocationInfo {
  county: string;
  city: string;
  name: string;
  services: string[];
  address: string;
  cityStateZip: string;
  phone: string;
  websiteLabel: string;
  websiteUrl: string;
}
