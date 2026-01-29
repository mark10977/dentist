
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

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
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
