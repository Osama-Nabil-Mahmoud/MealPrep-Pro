
"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Zap, Leaf, AlertCircle, Loader2, Camera } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MEALS_DATA, MealCategory, Meal } from "@/data/meals"

interface PexelsInfo {
  imageUrl: string;
  photographer: string;
  photographerUrl: string;
  pexelsUrl: string;
}

function MealCard({ meal }: { meal: Meal }) {
  const [pexelsInfo, setPexelsInfo] = React.useState<PexelsInfo | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(`/api/pexels?query=${encodeURIComponent(meal.pexelsQuery)}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPexelsInfo(data);
      } catch (err) {
        console.error(`Error loading image for ${meal.nameAr}:`, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [meal]);

  const fallbackUrl = `https://picsum.photos/seed/${meal.slug}/600/400`;
  const displayImage = pexelsInfo?.imageUrl || fallbackUrl;

  return (
    <div className="group bg-card rounded-[2rem] overflow-hidden border hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
        {loading ? (
          <Loader2 className="w-8 h-8 animate-spin text-primary/30" />
        ) : (
          <Image 
            src={displayImage} 
            alt={meal.nameAr}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <Badge className="absolute top-4 right-4 bg-white/95 text-black hover:bg-white border-none shadow-sm font-bold">
          {meal.tag}
        </Badge>
        
        {pexelsInfo && (
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-white">
            <Camera className="w-3 h-3" />
            <span className="truncate max-w-[100px]">{pexelsInfo.photographer}</span>
          </div>
        )}

        {error && !loading && (
          <div className="absolute bottom-2 left-2 text-[10px] bg-amber-500/80 text-white px-2 py-0.5 rounded flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> صورة تجريبية
          </div>
        )}
      </div>
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
          {meal.nameAr}
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
}

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
            أكل لذيذ، صحي، ومحسوب بدقة بدون تعقيد، بمكونات طازة من Pexels يومياً.
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
                {MEALS_DATA.filter(meal => meal.category === cat.value).map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground text-sm italic bg-muted/30 inline-block px-6 py-2 rounded-full border">
            * المنيو الكامل يضم وجبات متنوعة تتغير أسبوعياً لضمان التنوع.
          </p>
          <div className="text-[10px] text-muted-foreground/60 flex items-center justify-center gap-2">
            <span>جميع الصور المستخدمة مقدمة من</span>
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">Pexels</a>
          </div>
        </div>
      </div>
    </section>
  )
}
