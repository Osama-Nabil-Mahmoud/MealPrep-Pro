
export type MealCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Meal {
  id: string;
  nameAr: string;
  slug: string;
  calories: number;
  macros: string;
  tag: string;
  category: MealCategory;
  pexelsQuery: string;
}

export const MEALS_DATA: Meal[] = [
  // فطور (Breakfast)
  { 
    id: 'b1', 
    nameAr: "بان كيك بروتين بالتوت", 
    slug: "protein-pancakes",
    calories: 320, 
    macros: "P:25g, C:35g, F:8g", 
    tag: "طاقة", 
    category: 'breakfast',
    pexelsQuery: "protein pancakes blueberies stack"
  },
  { 
    id: 'b2', 
    nameAr: "شوفان بالفواكه والمكسرات", 
    slug: "oats-fruits-nuts",
    calories: 340, 
    macros: "P:12g, C:50g, F:10g", 
    tag: "ألياف عالية", 
    category: 'breakfast',
    pexelsQuery: "oatmeal bowl berries nuts healthy"
  },
  { 
    id: 'b3', 
    nameAr: "فول وطعمية صحية", 
    slug: "ful-falafel-healthy",
    calories: 380, 
    macros: "P:18g, C:45g, F:12g", 
    tag: "شعبي مطور", 
    category: 'breakfast',
    pexelsQuery: "falafel fava beans plate oriental"
  },

  // غداء (Lunch)
  { 
    id: 'l1', 
    nameAr: "دجاج مشوي مع أرز وخضار", 
    slug: "grilled-chicken-rice-veggies",
    calories: 450, 
    macros: "P:35g, C:40g, F:15g", 
    tag: "متوازن", 
    category: 'lunch',
    pexelsQuery: "grilled chicken rice broccoli meal"
  },
  { 
    id: 'l2', 
    nameAr: "سلمون مع بطاطس حلوة", 
    slug: "salmon-sweet-potato",
    calories: 500, 
    macros: "P:30g, C:45g, F:20g", 
    tag: "أوميجا 3", 
    category: 'lunch',
    pexelsQuery: "grilled salmon steak sweet potato"
  },
  { 
    id: 'l3', 
    nameAr: "كفتة مشوية مع أرز بسمتي", 
    slug: "kofta-rice",
    calories: 420, 
    macros: "P:35g, C:30g, F:18g", 
    tag: "بروتين عالي", 
    category: 'lunch',
    pexelsQuery: "kofta kebab basmati rice"
  },

  // عشاء (Dinner)
  { 
    id: 'd1', 
    nameAr: "ستيك لحم مع بروكلي", 
    slug: "steak-broccoli",
    calories: 480, 
    macros: "P:40g, C:10g, F:25g", 
    tag: "كيتو فريندلي", 
    category: 'dinner',
    pexelsQuery: "beef steak grilled broccoli healthy"
  },
  { 
    id: 'd2', 
    nameAr: "باستا الدجاج بالكريمة الخفيفة", 
    slug: "chicken-pasta",
    calories: 550, 
    macros: "P:30g, C:60g, F:10g", 
    tag: "قبل التمرين", 
    category: 'dinner',
    pexelsQuery: "chicken alfredo pasta penne"
  },
  { 
    id: 'd3', 
    nameAr: "سمك فيليه مشوي مع خضار سوتيه", 
    slug: "fish-fillet-steamed-veg",
    calories: 310, 
    macros: "P:30g, C:5g, F:12g", 
    tag: "عشاء خفيف", 
    category: 'dinner',
    pexelsQuery: "steamed fish fillet vegetables"
  },

  // سناكس (Snacks)
  { 
    id: 's1', 
    nameAr: "جمبري بالثوم مع كينوا", 
    slug: "shrimp-quinoa-garlic",
    calories: 380, 
    macros: "P:28g, C:40g, F:12g", 
    tag: "سوبر فود", 
    category: 'snack',
    pexelsQuery: "garlic shrimp quinoa salad"
  },
  { 
    id: 's2', 
    nameAr: "زبادي يوناني بالعسل والتوت", 
    slug: "greek-yogurt-honey-berries",
    calories: 250, 
    macros: "P:15g, C:25g, F:5g", 
    tag: "سناك بروتين", 
    category: 'snack',
    pexelsQuery: "greek yogurt bowl berries honey"
  },
  { 
    id: 's3', 
    nameAr: "حمص بالطحينة مع خضروات", 
    slug: "hummus-tahini-veggies",
    calories: 300, 
    macros: "P:10g, C:45g, F:8g", 
    tag: "نباتي", 
    category: 'snack',
    pexelsQuery: "hummus plate chickpeas olive oil"
  },
];
