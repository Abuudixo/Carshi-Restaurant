
import { MenuCategory } from '../types';

export const LOGO_URL = "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200&h=200&auto=format&fit=crop"; 
// Note: As the user provided a logo in the prompt, in a real scenario we'd use the provided file. 
// For this demo, we'll use a circular logo representation in components or the provided one if available.

export const MENU_ITEMS = [
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with black truffle and mozzarella center.',
    price: '$18',
    category: MenuCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Beef Carpaccio',
    description: 'Thinly sliced wagyu beef, capers, arugula, and parmesan shavings.',
    price: '$24',
    category: MenuCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1513137330480-880c5bbd0042?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Glazed Chilean Sea Bass',
    description: 'Miso-glazed sea bass served with baby bok choy and ginger broth.',
    price: '$42',
    category: MenuCategory.MAINS,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Braised Short Ribs',
    description: '12-hour slow-cooked ribs with creamy polenta and red wine reduction.',
    price: '$48',
    category: MenuCategory.MAINS,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Saffron Risotto',
    description: 'Italian arborio rice infused with premium saffron and gold leaf.',
    price: '$36',
    category: MenuCategory.MAINS,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Deconstructed Tiramisu',
    description: 'Coffee-soaked sponge, mascarpone foam, and cocoa dust.',
    price: '$16',
    category: MenuCategory.DESSERTS,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Lavender Panna Cotta',
    description: 'Silky cream infused with lavender, served with honeycomb.',
    price: '$14',
    category: MenuCategory.DESSERTS,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', alt: 'Cocktail presentation', tag: 'food' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1550966841-3ee3ad359051?q=80&w=800&auto=format&fit=crop', alt: 'Restaurant interior', tag: 'ambiance' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop', alt: 'Chef preparing dish', tag: 'ambiance' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop', alt: 'Plated main course', tag: 'food' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop', alt: 'Assorted appetizers', tag: 'food' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', alt: 'Cozy dining area', tag: 'ambiance' },
];
