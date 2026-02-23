"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { Zap, Leaf } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MEALS_DATA, MealCategory } from "@/data/meals"

export function MealsGallery() {
  const categories: { label: string; value: MealCategory }[] = [
    { label: "الفطور", value: "breakfast" },
    { label: "الغداء", value: "lunch" },
    { label: "العشاء", value: "dinner" },
    { label: "السناك", value: "snack" },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">منيو الأسبوع</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 text-base md:text-lg">
            أكل لذيذ، صحي، ومحسوب بدقة بدون تعقيد، بمكونات طازة يومياً.
          </p>
        </div>

        <Tabs defaultValue="lunch" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="bg-muted/50 p-1 rounded-full h-12 md:h-14 shrink-0">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value}
                  className="rounded-full px-6 md:px-10 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value} className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {MEALS_DATA.filter(meal => meal.category === cat.value).map((meal) => {
                  const img = PlaceHolderImages.find(pi => pi.id === meal.imgId) || PlaceHolderImages[0]
                  return (
                    <div key={meal.id} className="group bg-card rounded-[2rem] overflow-hidden border hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
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
                        <Badge className="absolute top-4 right-4 bg-white/95 text-black hover:bg-white border-none shadow-sm font-bold">{meal.tag}</Badge>
                      </div>
                      <div className="p-6 space-y-4 flex flex-col flex-1">
                        <h3 className="font-bold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                          {meal.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground border-b pb-4 mt-auto">
                          <span dir="ltr" className="font-medium">{meal.macros}</span>
                          <span className="font-bold text-primary">{meal.calories} سعرة</span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-medium pt-1">
                          <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-secondary" /> طاقة عالية</span>
                          <span className="flex items-center gap-1"><Leaf className="w-3.5 h-3.5 text-primary" /> 100% طبيعي</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic bg-muted/30 inline-block px-6 py-2 rounded-full border">
            * المنيو الكامل يضم أكثر من 20 وجبة متنوعة تتغير أسبوعياً لضمان التنوع.
          </p>
        </div>
      </div>
    </section>
  )
}
