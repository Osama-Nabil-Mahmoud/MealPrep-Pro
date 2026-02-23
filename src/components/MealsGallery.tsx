"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { Utensils, Zap, Heart, Leaf, Flame, Target } from "lucide-react"

const mealData = [
  { title: "دجاج مشوي مع أرز وخضار", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "الأكثر طلباً", imgId: "meal-1" },
  { title: "سلمون مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "أوميجا 3", imgId: "meal-2" },
  { title: "ستيك مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "كيتو", imgId: "meal-3" },
  { title: "باستا بالدجاج", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "طاقة", imgId: "meal-4" },
  { title: "كفتة مع أرز وسلطة", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "شرقي صحي", imgId: "meal-5" },
  { title: "جمبري بالثوم مع كينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "خفيف", imgId: "meal-6" },
  { title: "زبادي يوناني بالتوت", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "إفطار", imgId: "meal-7" },
  { title: "بان كيك بروتين", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "إفطار", imgId: "meal-8" }
]

export function MealsGallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">منيو يتغير كل أسبوع</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">أكل لذيذ، صحي، ومحسوب بدقة بدون تعقيد، بمكونات طازة يومياً.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mealData.map((meal, i) => {
            const img = PlaceHolderImages.find(pi => pi.id === meal.imgId) || PlaceHolderImages[0]
            return (
              <div key={i} className="group bg-card rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={meal.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={img.imageHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <Badge className="absolute top-4 right-4 bg-white/95 text-black hover:bg-white">{meal.tag}</Badge>
                </div>
                <div className="p-5 md:p-6 space-y-4">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{meal.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-b pb-4">
                    <span>{meal.macros}</span>
                    <span className="font-bold text-primary">{meal.calories} سعرة</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-secondary" /> طاقة عالية</span>
                    <span className="flex items-center gap-1"><Leaf className="w-3 h-3 text-primary" /> مكونات طبيعية</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm italic">* المنيو الكامل يضم أكثر من 20 وجبة متنوعة أسبوعياً.</p>
        </div>
      </div>
    </section>
  )
}
