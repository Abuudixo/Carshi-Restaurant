
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
}

export enum MenuCategory {
  APPETIZERS = 'Appetizers',
  MAINS = 'Main Courses',
  DESSERTS = 'Desserts',
  DRINKS = 'Signature Drinks'
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  tag: 'food' | 'ambiance';
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
