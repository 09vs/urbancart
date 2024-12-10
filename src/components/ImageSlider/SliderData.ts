export interface SlideImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

export const sliderData: SlideImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    title: "New Season Arrivals",
    description: "Discover our latest collection featuring trendsetting styles for the new season."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
    title: "Summer Collection 2024",
    description: "Explore our curated selection of summer essentials perfect for any occasion."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    title: "Exclusive Designs",
    description: "Shop our exclusive designs crafted with premium materials and attention to detail."
  }
];