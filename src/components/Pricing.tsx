"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function Pricing({ onSubscribeClick }: { onSubscribeClick: (plan: string) => void }) {
  const plans = [
    {
      name: "Starter",
      price: "899",
      desc: "مثالي للمبتدئين",
      included: "15 وجبة (3 يومياً × 5 أيام)",
      target: "خسارة وزن خفيفة",
      calories: "1200-1500 سعرة",
      highlight: false
    },
    {
      name: "Pro",
      price: "1499",
      oldPrice: "1699",
      desc: "الأكثر طلباً ⭐",
      included: "25 وجبة (3+2 سناك × 5 أيام)",
      target: "توازن صحي مثالي",
      calories: "1500-2000 سعرة",
      highlight: true
    },
    {
      name: "Elite",
      price: "1999",
      desc: "التغطية الشاملة",
      included: "35 وجبة (7 أيام شاملة)",
      target: "بناء عضلات ورياضيين",
      calories: "2500+ سعرة",
      highlight: false
    },
    {
      name: "Keto",
      price: "1699",
      desc: "حرق دهون سريع",
      included: "25 وجبة (كيتو كلاسيك)",
      target: "نظام 70/25/5 ماكروز",
      calories: "1400-1800 سعرة",
      highlight: false
    },
    {
      name: "Vegan",
      price: "1299",
      desc: "نباتي 100%",
      included: "20 وجبة نباتية",
      target: "تغذية نباتية متكاملة",
      calories: "1300-1600 سعرة",
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline mb-4">اختر الباقة المناسبة لهدفك</h2>
          <Badge variant="outline" className="mb-4">سعر التجربة لفترة محدودة</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-card border rounded-2xl p-6 flex flex-col transition-all hover:scale-[1.02] ${
                plan.highlight ? 'ring-2 ring-primary shadow-xl scale-105 z-10' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> الأكثر طلباً
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{plan.price} ج</span>
                <span className="text-muted-foreground text-sm"> /أسبوع</span>
                {plan.oldPrice && (
                  <p className="text-xs text-muted-foreground line-through">{plan.oldPrice} ج</p>
                )}
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{plan.included}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{plan.target}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{plan.calories}</span>
                </div>
              </div>

              <Button 
                onClick={() => onSubscribeClick(plan.name)}
                variant={plan.highlight ? 'default' : 'outline'} 
                className="w-full font-bold"
              >
                اختر هذه الباقة
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted/50 p-6 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="font-bold mb-4">كل الباقات تشمل:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-background px-3 py-1 rounded-full border">توصيل مجاني</span>
            <span className="bg-background px-3 py-1 rounded-full border">إيقاف/إلغاء أي وقت</span>
            <span className="bg-background px-3 py-1 rounded-full border">ضمان استرجاع 7 أيام</span>
          </div>
        </div>
      </div>
    </section>
  )
}
