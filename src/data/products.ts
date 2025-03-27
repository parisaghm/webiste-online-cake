
import { Product } from '@/context/CartContext';

// All products data
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Classic Vanilla Cake",
    description: "A timeless favorite with moist vanilla sponge layers and silky vanilla buttercream frosting. Perfect for any occasion.",
    price: 35,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "birthday"
  },
  {
    id: 2,
    name: "Chocolate Decadence",
    description: "Rich chocolate cake layers with dark chocolate ganache and chocolate buttercream. A chocolate lover's dream.",
    price: 40,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "birthday"
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    description: "Light vanilla sponge with fresh strawberry compote and strawberry buttercream frosting. Fresh and delightful.",
    price: 38,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "birthday"
  },
  {
    id: 4,
    name: "Elegant Wedding Cake",
    description: "Three-tier vanilla cake with delicate fondant flowers and pearl details. Perfect for your special day.",
    price: 250,
    image: "https://images.unsplash.com/photo-1535254973040-607b474d7f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "wedding"
  },
  {
    id: 5,
    name: "Red Velvet Dream",
    description: "Velvety red cocoa cake with cream cheese frosting. A perfect balance of flavors that's always a crowd-pleaser.",
    price: 42,
    image: "https://images.unsplash.com/photo-1586788680434-30d324626f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "birthday"
  },
  {
    id: 6,
    name: "Lemon Raspberry Cake",
    description: "Zesty lemon cake with raspberry filling and lemon buttercream. Refreshing and bright with the perfect balance of sweet and tangy.",
    price: 40,
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "specialty"
  },
  {
    id: 7,
    name: "Rustic Wedding Cake",
    description: "Semi-naked vanilla cake with fresh flowers and berries. Simple, elegant, and perfect for a rustic wedding.",
    price: 220,
    image: "https://images.unsplash.com/photo-1623428454614-abaf7c5080c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "wedding"
  },
  {
    id: 8,
    name: "Caramel Drip Cake",
    description: "Vanilla buttercake with salted caramel filling, caramel buttercream, and a dramatic caramel drip.",
    price: 45,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "specialty"
  },
  {
    id: 9,
    name: "Matcha Green Tea Cake",
    description: "Japanese-inspired matcha cake with white chocolate ganache and matcha buttercream. Sophisticated and unique.",
    price: 48,
    image: "https://images.unsplash.com/photo-1583952336639-83405eddb492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "specialty"
  },
  {
    id: 10,
    name: "Chocolate Raspberry Cake",
    description: "Moist chocolate cake with raspberry compote filling and dark chocolate ganache. A delightful combination.",
    price: 44,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "birthday"
  },
  {
    id: 11,
    name: "Tiramisu Cake",
    description: "Coffee-soaked sponge cake with mascarpone cream and cocoa dusting. Inspired by the classic Italian dessert.",
    price: 46,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "specialty"
  },
  {
    id: 12,
    name: "Modern Wedding Cake",
    description: "Sleek and modern four-tier cake with geometric details and gold accents. A statement piece for contemporary weddings.",
    price: 280,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    category: "wedding"
  }
];

// Featured products (subset of all products)
export const featuredProducts: Product[] = [
  allProducts[1], // Chocolate Decadence
  allProducts[2], // Strawberry Bliss
  allProducts[5], // Lemon Raspberry Cake
];
