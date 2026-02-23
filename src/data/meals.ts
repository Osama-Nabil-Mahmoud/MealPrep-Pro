export type MealCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Meal {
  id: string;
  title: string;
  calories: number;
  macros: string;
  tag: string;
  category: MealCategory;
  imgId: string;
}

export const MEALS_DATA: Meal[] = [
  // فطور (Breakfast)
  { id: 'b1', title: "بان كيك بروتين بالتوت", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "طاقة", category: 'breakfast', imgId: "meal-8" },
  { id: 'b2', title: "أومليت بالخضار والجبن", calories: 280, macros: "P:20g, C:5g, F:18g", tag: "كيتو", category: 'breakfast', imgId: "meal-9" },
  { id: 'b3', title: "زبادي يوناني بالمكسرات", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "خفيف", category: 'breakfast', imgId: "meal-7" },

  // غداء (Lunch)
  { id: 'l1', title: "سلمون مشوي مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "أوميجا 3", category: 'lunch', imgId: "meal-2" },
  { id: 'l2', title: "دجاج مشوي مع أرز بسمتي", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "الأكثر طلباً", category: 'lunch', imgId: "meal-1" },
  { id: 'l3', title: "جمبري بالثوم والكينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "بحريات", category: 'lunch', imgId: "meal-6" },

  // عشاء (Dinner)
  { id: 'd1', title: "ستيك لحم مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "بروتين عالي", category: 'dinner', imgId: "meal-3" },
  { id: 'd2', title: "باستا الدجاج الكريمية", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "قبل التمرين", category: 'dinner', imgId: "meal-4" },
  { id: 'd3', title: "كفتة مشوية مع سلطة خضراء", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "شرقي صحي", category: 'dinner', imgId: "meal-5" },

  // سناكس (Snacks)
  { id: 's1', title: "سموثي بروتين بالشوكولاتة", calories: 200, macros: "P:20g, C:15g, F:4g", tag: "سناك", category: 'snack', imgId: "meal-7" },
  { id: 's2', title: "مكسرات مشكلة محمصة", calories: 180, macros: "P:5g, C:8g, F:14g", tag: "كيتو", category: 'snack', imgId: "meal-3" },
  { id: 's3', title: "سلطة فواكه موسمية", calories: 120, macros: "P:2g, C:28g, F:0g", tag: "فيتامينات", category: 'snack', imgId: "meal-1" },
];
