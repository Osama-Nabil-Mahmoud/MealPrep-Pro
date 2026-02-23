export type MealCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Meal {
  id: string;
  nameAr: string;
  slug: string;
  imagePath: string;
  calories: number;
  macros: string;
  tag: string;
  category: MealCategory;
}

export const MEALS_DATA: Meal[] = [
  // فطور (Breakfast)
  { 
    id: 'b1', 
    nameAr: "بان كيك بروتين بالتوت", 
    slug: "protein-pancakes",
    imagePath: "/meals/protein-pancakes.jpg",
    calories: 320, 
    macros: "P:25g, C:35g, F:8g", 
    tag: "طاقة", 
    category: 'breakfast' 
  },
  { 
    id: 'b2', 
    nameAr: "أومليت بالخضار والجبن", 
    slug: "veggie-omelette",
    imagePath: "/meals/veggie-omelette.jpg",
    calories: 280, 
    macros: "P:20g, C:5g, F:18g", 
    tag: "كيتو", 
    category: 'breakfast' 
  },
  { 
    id: 'b3', 
    nameAr: "زبادي يوناني بالمكسرات", 
    slug: "greek-yogurt-nuts",
    imagePath: "/meals/greek-yogurt-nuts.jpg",
    calories: 250, 
    macros: "P:15g, C:25g, F:5g", 
    tag: "خفيف", 
    category: 'breakfast' 
  },

  // غداء (Lunch)
  { 
    id: 'l1', 
    nameAr: "سلمون مشوي مع بطاطس حلوة", 
    slug: "salmon-sweet-potato",
    imagePath: "/meals/salmon-sweet-potato.jpg",
    calories: 500, 
    macros: "P:30g, C:45g, F:20g", 
    tag: "أوميجا 3", 
    category: 'lunch' 
  },
  { 
    id: 'l2', 
    nameAr: "دجاج مشوي مع أرز وخضار", 
    slug: "grilled-chicken-rice-veggies",
    imagePath: "/meals/grilled-chicken-rice-veggies.jpg",
    calories: 450, 
    macros: "P:35g, C:40g, F:15g", 
    tag: "الأكثر طلباً", 
    category: 'lunch' 
  },
  { 
    id: 'l3', 
    nameAr: "جمبري بالثوم والكينوا", 
    slug: "shrimp-quinoa",
    imagePath: "/meals/shrimp-quinoa.jpg",
    calories: 380, 
    macros: "P:28g, C:40g, F:12g", 
    tag: "بحريات", 
    category: 'lunch' 
  },

  // عشاء (Dinner)
  { 
    id: 'd1', 
    nameAr: "ستيك لحم مع بروكلي", 
    slug: "steak-broccoli",
    imagePath: "/meals/steak-broccoli.jpg",
    calories: 480, 
    macros: "P:40g, C:10g, F:25g", 
    tag: "بروتين عالي", 
    category: 'dinner' 
  },
  { 
    id: 'd2', 
    nameAr: "باستا بالدجاج", 
    slug: "chicken-pasta",
    imagePath: "/meals/chicken-pasta.jpg",
    calories: 550, 
    macros: "P:30g, C:60g, F:10g", 
    tag: "قبل التمرين", 
    category: 'dinner' 
  },
  { 
    id: 'd3', 
    nameAr: "كفتة مع أرز", 
    slug: "kofta-rice",
    imagePath: "/meals/kofta-rice.jpg",
    calories: 420, 
    macros: "P:35g, C:30g, F:18g", 
    tag: "شرقي صحي", 
    category: 'dinner' 
  },

  // سناكس (Snacks)
  { 
    id: 's1', 
    nameAr: "سموثي بروتين بالشوكولاتة", 
    slug: "protein-smoothie",
    imagePath: "/meals/protein-smoothie.jpg",
    calories: 200, 
    macros: "P:20g, C:15g, F:4g", 
    tag: "سناك", 
    category: 'snack' 
  },
  { 
    id: 's2', 
    nameAr: "مكسرات مشكلة محمصة", 
    slug: "mixed-nuts",
    imagePath: "/meals/mixed-nuts.jpg",
    calories: 180, 
    macros: "P:5g, C:8g, F:14g", 
    tag: "كيتو", 
    category: 'snack' 
  },
  { 
    id: 's3', 
    nameAr: "سلطة فواكه موسمية", 
    slug: "fruit-salad",
    imagePath: "/meals/fruit-salad.jpg",
    calories: 120, 
    macros: "P:2g, C:28g, F:0g", 
    tag: "فيتامينات", 
    category: 'snack' 
  },
];
