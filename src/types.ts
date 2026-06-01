export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  slug: string;
  placeholderText: string;
  badge?: string;
  features?: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
}
