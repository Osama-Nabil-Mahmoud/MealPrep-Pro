
"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Zap, Leaf, AlertCircle, Loader2, Camera, ExternalLink } from "lucide-react"
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
        if (!res.ok) throw new Error('Failed to fetch from Pexels API');
        const data = await res.json();
        setPexelsInfo(data);
      } catch (err) {
        console.warn(`Error loading Pexels image for ${meal.nameAr}:`, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [meal]);

  // Fallback to a high-quality placeholder if API fails
  const fallbackUrl = `https://picsum.photos/seed/${meal.slug}/800/600`;
  const displayImage = pexelsInfo?.imageUrl || fallbackUrl;

  return (
    <div className="group bg-card rounded-[2rem] overflow-hidden border hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-primary/40" />
            <span className="text-[10px] text-muted-foreground">جاري جلب الصورة...</span>
          </div>
        ) : (
          <Image 
            src={displayImage} 
            alt={meal.nameAr}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={meal.category === 'lunch'}
          />
        )}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
        
        <Badge className="absolute top-4 right-4 bg-white/95 text-black hover:bg-white border-none shadow-sm font-bold z-10">
          {meal.tag}
        </Badge>
        
        {/* Pexels Attribution */}
        {pexelsInfo && (
          <a 
            href={pexelsInfo.pexelsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white hover:bg-primary z-20"
          >
            <Camera className="w-3 h-3" />
            <span className="truncate max-w-[120px]">By {pexelsInfo.photographer}</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}

        {error && !loading && (
          <div className="absolute bottom-3 right-3 text-[9px] bg-amber-500/90 text-white px-2 py-1 rounded-md flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> صورة افتراضية
          </div>
        )}
      </div>

      <div className="p-6 space-y-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
          {meal.nameAr}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground border-b pb-4 mt-auto">
          <span dir="ltr" className="font-medium bg-muted px-2 py-0.5 rounded-md">{meal.macros}</span>
          <span className="font-bold text-primary">{meal.calories} سعرة</span>
        </div>
        
        <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-medium pt-1">
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-secondary" /> طاقة عالية</span>
          <span className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-primary" /> 100% طازج</span>
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
            <TabsContent key={cat.value} value={cat.value} className="mt-0 focus-visible:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {MEALS_DATA.filter(meal => meal.category === cat.value).map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 pt-8 border-t text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-muted/30 px-6 py-2 rounded-full border text-xs md:text-sm text-muted-foreground italic">
            <Leaf className="w-4 h-4 text-primary" />
            <span>المنيو الكامل يضم وجبات متنوعة تتجدد أسبوعياً لضمان التنوع الغذائي.</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">Powered by</p>
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <Image 
                src="https://images.pexels.com/lib/api/pexels-white.png" 
                alt="Pexels Logo" 
                width={80} 
                height={20} 
                className="dark:invert-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
