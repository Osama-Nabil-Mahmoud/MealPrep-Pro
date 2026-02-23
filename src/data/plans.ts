export interface PricingPlan {
  name: string;
  nameAr: string;
  price: string;
  oldPrice?: string;
  desc: string;
  included: string;
  target: string;
  calories: string;
  highlight: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    nameAr: "المبتدئ",
    price: "899",
    desc: "مثالي للمبتدئين وخسارة الوزن المعتدلة",
    included: "15 وجبة (3 يومياً × 5 أيام)",
    target: "فطور + غداء + عشاء",
    calories: "1500-1800 سعرة/يوم",
    highlight: false
  },
  {
    name: "Pro",
    nameAr: "الاحترافي",
    price: "1,499",
    oldPrice: "1,699",
    desc: "الأكثر طلباً ⭐ لبناء العضلات والرياضيين",
    included: "25 وجبة (5 يومياً × 5 أيام)",
    target: "فطور + سناك + غداء + سناك + عشاء",
    calories: "1800-2200 سعرة/يوم",
    highlight: true
  },
  {
    name: "Elite",
    nameAr: "النخبة",
    price: "1,999",
    desc: "راحة كاملة وتغطية شاملة للأسبوع",
    included: "35 وجبة (5 يومياً × 7 أيام)",
    target: "تشمل وجبات Premium (سلمون، ستيك)",
    calories: "قابلة للتخصيص (1200-3000)",
    highlight: false
  },
  {
    name: "Keto",
    nameAr: "كيتو",
    price: "1,699",
    desc: "مخصص لمتبعي نظام الكيتو دايت",
    included: "15 وجبة (3 يومياً × 5 أيام)",
    target: "70% دهون، 25% بروتين، 5% كارب",
    calories: "نظام كيتو دقيق الماكروز",
    highlight: false
  },
  {
    name: "Vegan",
    nameAr: "نباتي",
    price: "1,299",
    desc: "100% نباتي بدون أي منتجات حيوانية",
    included: "15 وجبة (3 يومياً × 5 أيام)",
    target: "توازن غذائي نباتي متكامل",
    calories: "مكونات طبيعية طازجة",
    highlight: false
  }
];
