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
  imageUrl?: string;
}

export const MEALS_DATA: Meal[] = [
  // الفطور (Breakfast)
  { 
    id: 'b1', 
    nameAr: "شوفان بالفواكه والمكسرات", 
    slug: "oats-fruits-nuts",
    calories: 340, 
    macros: "P:12g, C:50g, F:10g", 
    tag: "ألياف", 
    category: 'breakfast',
    pexelsQuery: "oatmeal bowl berries nuts",
    imageUrl: "https://drive.google.com/uc?export=view&id=1wTJos1Ahq-Pg4uSGb4JlK8Tb1J-dkU55"
  },
  { 
    id: 'b2', 
    nameAr: "بيض أومليت مع خضار", 
    slug: "veggie-omelette",
    calories: 280, 
    macros: "P:20g, C:5g, F:18g", 
    tag: "بروتين", 
    category: 'breakfast',
    pexelsQuery: "veggie omelette plate",
    imageUrl: "https://drive.google.com/uc?export=view&id=1n04h5YIOLcQRtUZPQtgWDuZzi41Qc7KJ"
  },
  { 
    id: 'b3', 
    nameAr: "بان كيك بروتين", 
    slug: "protein-pancakes",
    calories: 320, 
    macros: "P:25g, C:35g, F:8g", 
    tag: "طاقة", 
    category: 'breakfast',
    pexelsQuery: "protein pancakes stack",
    imageUrl: "https://drive.google.com/uc?export=view&id=1BogWaxCS4VMNueW8_ig3Dp0yrX93NGB3"
  },
  { 
    id: 'b4', 
    nameAr: "زبادي يوناني بالعسل والتوت", 
    slug: "greek-yogurt-berries",
    calories: 250, 
    macros: "P:15g, C:25g, F:5g", 
    tag: "سناك بروتين", 
    category: 'breakfast',
    pexelsQuery: "greek yogurt honey berries",
    imageUrl: "https://drive.google.com/uc?export=view&id=1DeUTu8waYjbadU52xV6jLda6MSLuAZCI"
  },
  { 
    id: 'b5', 
    nameAr: "فول وطعمية (صحية!)", 
    slug: "ful-falafel-healthy",
    calories: 380, 
    macros: "P:18g, C:45g, F:12g", 
    tag: "شعبي مطور", 
    category: 'breakfast',
    pexelsQuery: "healthy falafel egyptian",
    imageUrl: "https://drive.google.com/uc?export=view&id=1skcg3Uvb0HFUKM1Qxq6k1MK0Q-WiNoQS"
  },

  // الغداء (Lunch)
  { 
    id: 'l1', 
    nameAr: "دجاج مشوي مع أرز بسمتي وخضار", 
    slug: "grilled-chicken-rice-veggies",
    calories: 450, 
    macros: "P:35g, C:40g, F:15g", 
    tag: "متوازن", 
    category: 'lunch',
    pexelsQuery: "grilled chicken rice vegetables"
  },
  { 
    id: 'l2', 
    nameAr: "سلمون مع بطاطس حلوة مشوية", 
    slug: "salmon-sweet-potato",
    calories: 500, 
    macros: "P:30g, C:45g, F:20g", 
    tag: "أوميجا 3", 
    category: 'lunch',
    pexelsQuery: "grilled salmon sweet potato"
  },
  { 
    id: 'l3', 
    nameAr: "كفتة لحم مع أرز وسلطة", 
    slug: "kofta-rice",
    calories: 420, 
    macros: "P:35g, C:30g, F:18g", 
    tag: "بروتين عالي", 
    category: 'lunch',
    pexelsQuery: "kofta kebab rice"
  },
  { 
    id: 'l4', 
    nameAr: "باستا بصوص الطماطم ودجاج", 
    slug: "chicken-tomato-pasta",
    calories: 550, 
    macros: "P:30g, C:60g, F:10g", 
    tag: "كاربو", 
    category: 'lunch',
    pexelsQuery: "chicken tomato pasta"
  },
  { 
    id: 'l5', 
    nameAr: "برجر صحي بخبز القمح الكامل", 
    slug: "healthy-burger",
    calories: 480, 
    macros: "P:32g, C:35g, F:14g", 
    tag: "وجبة الغش الصحية", 
    category: 'lunch',
    pexelsQuery: "healthy beef burger"
  },

  // العشاء (Dinner)
  { 
    id: 'd1', 
    nameAr: "ستيك مشوي مع بروكلي", 
    slug: "steak-broccoli",
    calories: 480, 
    macros: "P:40g, C:10g, F:25g", 
    tag: "كيتو", 
    category: 'dinner',
    pexelsQuery: "steak broccoli plate"
  },
  { 
    id: 'd2', 
    nameAr: "جمبري بالثوم مع كينوا", 
    slug: "shrimp-quinoa-garlic",
    calories: 380, 
    macros: "P:28g, C:40g, F:12g", 
    tag: "سوبر فود", 
    category: 'dinner',
    pexelsQuery: "garlic shrimp quinoa"
  },
  { 
    id: 'd3', 
    nameAr: "دجاج كاري مع أرز بني", 
    slug: "chicken-curry-brown-rice",
    calories: 460, 
    macros: "P:32g, C:42g, F:14g", 
    tag: "بهارات هندية", 
    category: 'dinner',
    pexelsQuery: "chicken curry brown rice"
  },
  { 
    id: 'd4', 
    nameAr: "سمك فيليه مع خضار على البخار", 
    slug: "fish-fillet-steamed-veg",
    calories: 310, 
    macros: "P:30g, C:5g, F:12g", 
    tag: "عشاء خفيف", 
    category: 'dinner',
    pexelsQuery: "steamed fish vegetables",
    imageUrl: "https://drive.google.com/uc?export=view&id=1aMVgbmyCEYTmw2TlpP8-YAvhcL0pdzY0"
  },

  // السناك (Snack)
  { 
    id: 's1', 
    nameAr: "مكسرات مشكلة", 
    slug: "mixed-nuts",
    calories: 180, 
    macros: "P:6g, C:5g, F:14g", 
    tag: "دهون صحية", 
    category: 'snack',
    pexelsQuery: "mixed nuts bowl",
    imageUrl: "https://drive.google.com/uc?export=view&id=1rrjNz3iYrK4-j2n4vBGRV97uVyt4H5xk"
  },
  { 
    id: 's2', 
    nameAr: "فواكه طازجة", 
    slug: "fresh-fruits",
    calories: 120, 
    macros: "P:1g, C:25g, F:0g", 
    tag: "فيتامينات", 
    category: 'snack',
    pexelsQuery: "fruit salad bowl",
    imageUrl: "https://drive.google.com/uc?export=view&id=1aliXlTGMBhkQ8pxAWA4OQhq2hR_KOJ8j"
  },
  { 
    id: 's3', 
    nameAr: "بروتين بارز", 
    slug: "protein-bars",
    calories: 210, 
    macros: "P:20g, C:15g, F:6g", 
    tag: "بروتين عالي", 
    category: 'snack',
    pexelsQuery: "protein bar snacks",
    imageUrl: "https://drive.google.com/uc?export=view&id=1_FJzhsHlI4tWGlKn8xTpcQCtPnJ9GIby"
  },
  { 
    id: 's4', 
    nameAr: "حمص بالطحينة وخضار", 
    slug: "hummus-tahini-veggies",
    calories: 300, 
    macros: "P:10g, C:45g, F:8g", 
    tag: "نباتي", 
    category: 'snack',
    pexelsQuery: "hummus plate vegetables",
    imageUrl: "https://drive.google.com/uc?export=view&id=1gOPUc5eVyBKqp3UFSY9UGAQhU63pgO73"
  },
];