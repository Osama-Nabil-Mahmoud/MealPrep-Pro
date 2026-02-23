"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Zap, Leaf, Utensils } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MEALS_DATA, MealCategory, Meal } from "@/data/meals"

function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="group bg-card rounded-[2rem] overflow-hidden border hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Utensils className="w-5 h-5" />
          </div>
          <Badge variant="secondary" className="bg-muted text-muted-foreground border-none font-bold">
            {meal.tag}
          </Badge>
        </div>

        <h3 className="font-bold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
          {meal.nameAr}
        </h3>
        
        <div className="flex flex-col gap-2 pt-2 mt-auto">
          <div className="flex items-center justify-between text-sm border-b pb-2">
            <span className="text-muted-foreground">الماكروز</span>
            <span dir="ltr" className="font-medium font-mono">{meal.macros}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">السعرات</span>
            <span className="font-bold text-primary text-lg">{meal.calories} سعرة</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-medium pt-3 border-t">
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-secondary" /> طاقة مستدامة</span>
          <span className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-primary" /> مكونات طبيعية</span>
        </div>
      </div>
    </div>
  )
}

export function MealsGallery() {
  const categories: { label: string; value: MealCategory }[] = [
    { label: "الفطور", value: "breakfast" },
    { label: "الغداء", value: "lunch" },
    { label: "العشاء", value: "dinner" },
    { label: "السناك", value: "snack" },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background scroll-mt-16">
      <div className="container">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">منيو الأسبوع</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 text-base md:text-lg">
            قائمة وجباتنا المختارة بعناية لتناسب أهدافك الصحية، محضرة طازجة يومياً.
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
            <TabsContent key={cat.value} value={cat.value} className="mt-0 focus-visible:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {MEALS_DATA.filter(meal => meal.category === cat.value).map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 pt-8 border-t text-center">
          <div className="inline-flex items-center gap-2 bg-muted/30 px-6 py-2 rounded-full border text-xs md:text-sm text-muted-foreground italic">
            <Leaf className="w-4 h-4 text-primary" />
            <span>جميع الوجبات يتم توصيلها في عبوات صديقة للبيئة ومحكمة الغلق.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
