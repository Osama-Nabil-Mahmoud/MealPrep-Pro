"use client"

import { Badge } from "@/components/ui/badge"
import { Utensils, Zap, Heart, Leaf, Flame, Target } from "lucide-react"

const meals = [
  { title: "دجاج مشوي مع أرز وخضار", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "الأكثر طلباً", icon: Utensils },
  { title: "سلمون مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "أوميجا 3", icon: Heart },
  { title: "ستيك مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "كيتو", icon: Flame },
  { title: "باستا بالدجاج", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "طاقة", icon: Zap },
  { title: "كفتة مع أرز وسلطة", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "شرقي صحي", icon: Utensils },
  { title: "جمبري بالثوم مع كينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "خفيف", icon: Leaf },
  { title: "زبادي يوناني بالعسل والتوت", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "إفطار", icon: Heart },
  { title: "بان كيك بروتين", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "إفطار", icon: Zap },
  { title: "فول وطعمية (صحية!)", calories: 350, macros: "P:18g, C:45g, F:12g", tag: "نباتي", icon: Leaf },
  { title: "دجاج كاري مع أرز بسمتي", calories: 460, macros: "P:32g, C:42g, F:14g", tag: "متوازن", icon: Utensils },
  { title: "سمك فيليه مشوي", calories: 310, macros: "P:30g, C:5g, F:12g", tag: "خفيف جداً", icon: Leaf },
  { title: "تونة بالخضار والذرة", calories: 290, macros: "P:28g, C:15g, F:8g", tag: "سريع", icon: Heart },
  { title: "صدر ديك رومي مع فريك", calories: 430, macros: "P:38g, C:35g, F:10g", tag: "بروتين عالي", icon: Target },
  { title: "فاصوليا بيضاء مع لحم", calories: 470, macros: "P:30g, C:38g, F:16g", tag: "تقليدي", icon: Utensils },
  { title: "ملوخية مع دجاج مسلوق", calories: 390, macros: "P:35g, C:10g, F:12g", tag: "قليل الكارب", icon: Leaf },
  { title: "أومليت بالخضار والجبن", calories: 280, macros: "P:20g, C:5g, F:18g", tag: "كيتو إفطار", icon: Flame },
  { title: "شوفان بالموز والمكسرات", calories: 340, macros: "P:12g, C:50g, F:10g", tag: "طاقة صباحية", icon: Zap },
  { title: "برجر لحم صحي (بدون خبز)", calories: 410, macros: "P:35g, C:5g, F:22g", tag: "كيتو", icon: Flame },
  { title: "سلطة سيزر بالدجاج", calories: 320, macros: "P:28g, C:10g, F:15g", tag: "سلطات", icon: Leaf },
  { title: "كينوا بالخضار المشوية", calories: 300, macros: "P:10g, C:45g, F:8g", tag: "نباتي بالكامل", icon: Leaf }
]

export function MealsGallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline mb-4">منيو يتغير كل أسبوع (20 وجبة متنوعة)</h2>
          <p className="text-muted-foreground">أكل لذيذ، صحي، ومحسوب بدقة بدون تعقيد</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal, i) => (
            <div key={i} className="group bg-card rounded-2xl p-6 border hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <meal.icon className="w-8 h-8" />
              </div>
              <Badge variant="outline" className="mb-3 text-[10px]">{meal.tag}</Badge>
              <h3 className="font-bold text-lg mb-2 h-14 flex items-center">{meal.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">الماكروز: {meal.macros}</p>
              <div className="mt-auto pt-4 border-t w-full flex justify-between items-center">
                <span className="font-bold text-primary text-sm">{meal.calories} سعرة</span>
                <span className="text-[10px] bg-muted px-2 py-1 rounded text-muted-foreground">طازة</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
