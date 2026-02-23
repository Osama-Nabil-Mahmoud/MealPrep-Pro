"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Utensils, Zap, Leaf, Flame } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MEALS_DATA, Meal } from "@/data/meals"

function MealCard({ meal }: { meal: Meal }) {
  const macroList = meal.macros.split(',').map(m => m.trim());

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col h-full relative text-right" dir="rtl">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {/* Tag Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-background/90 text-foreground backdrop-blur-md border-none font-bold text-[10px] py-0.5 px-2.5 shadow-sm">
            {meal.tag}
          </Badge>
        </div>

        {/* Image / Placeholder */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0" />
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <Utensils className="w-12 h-12 text-primary/20" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="space-y-1">
          <p className="text-[10px] text-primary font-bold uppercase tracking-wider text-right">
            {meal.category === 'breakfast' ? 'فطور' : meal.category === 'lunch' ? 'غداء' : meal.category === 'dinner' ? 'عشاء' : 'سناك'}
          </p>
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] text-right">
            {meal.nameAr}
          </h3>
        </div>
        
        {/* Macros Badges - Right aligned in RTL */}
        <div className="flex flex-wrap gap-1.5 justify-start">
          {macroList.map((macro, idx) => (
            <Badge key={idx} variant="outline" className="text-[10px] font-medium py-0 px-2 bg-muted/30 border-muted-foreground/20">
              {macro}
            </Badge>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="pt-4 mt-auto flex flex-row-reverse items-center justify-between border-t border-border/50">
          <div className="flex flex-col items-end w-full">
            <span className="text-[10px] text-muted-foreground font-medium">الطاقة</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold">
              {meal.calories} سعرة
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MealsGallery() {
  const categories = [
    { label: "الفطور", value: "breakfast" },
    { label: "الغداء", value: "lunch" },
    { label: "العشاء", value: "dinner" },
    { label: "السناك", value: "snack" },
  ] as const;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background scroll-mt-16" dir="rtl">
      <div className="container">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1">قائمة الطعام</Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">منيو الأسبوع</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 text-base md:text-lg">
            اكتشف تشكيلتنا الواسعة من الوجبات الصحية المحضرة بعناية لتناسب نظامك الغذائي.
          </p>
        </div>

        <Tabs defaultValue="lunch" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 p-1.5 rounded-full h-14 md:h-16 inline-flex border">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value}
                  className="rounded-full px-6 md:px-12 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold data-[state=active]:shadow-lg"
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
        
        <div className="mt-20 pt-10 border-t text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-muted/30 px-8 py-4 rounded-[2rem] border border-border/50">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                <Zap className="w-4 h-4 text-secondary" /> طاقة مستدامة
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                <Leaf className="w-4 h-4 text-primary" /> مكونات طبيعية
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                <Flame className="w-4 h-4 text-orange-500" /> سعرات موزونة
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic border-t md:border-t-0 md:border-r md:pr-4 pt-4 md:pt-0">
              * جميع الوجبات تصلكم في عبوات صديقة للبيئة وآمنة للمايكرويف.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}