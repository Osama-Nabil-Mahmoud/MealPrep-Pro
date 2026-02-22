import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function MealsGallery() {
  const meals = [
    { title: "دجاج مشوي مع أرز وخضار", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "غداء/عشاء", img: PlaceHolderImages[0].imageUrl },
    { title: "سلمون مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "أوميجا 3", img: PlaceHolderImages[1].imageUrl },
    { title: "ستيك مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "كيتو", img: PlaceHolderImages[2].imageUrl },
    { title: "باستا بالدجاج", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "طاقة", img: PlaceHolderImages[3].imageUrl },
    { title: "كفتة مع أرز وسلطة", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "شرقي صحي", img: PlaceHolderImages[4].imageUrl },
    { title: "جمبري بالثوم مع كينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "خفيف", img: PlaceHolderImages[5].imageUrl },
    { title: "زبادي يوناني بالعسل والتوت", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "سناك/إفطار", img: PlaceHolderImages[6].imageUrl },
    { title: "بان كيك بروتين", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "إفطار", img: PlaceHolderImages[7].imageUrl },
    { title: "فول وطعمية (صحية!)", calories: 350, macros: "P:18g, C:45g, F:12g", tag: "نباتي", img: PlaceHolderImages[8].imageUrl }
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline mb-4">منيو يتغير كل أسبوع</h2>
          <p className="text-muted-foreground">أكل لذيذ، صحي، وعمره ما بيزهق</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, i) => (
            <div key={i} className="group bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={meal.img} 
                  alt={meal.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="healthy food"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90">{meal.tag}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{meal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">ماكروز: {meal.macros}</p>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-bold text-primary">{meal.calories} سعرة</span>
                  <Badge variant="outline">طازة يومياً</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
