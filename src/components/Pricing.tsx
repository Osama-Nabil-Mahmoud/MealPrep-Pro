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
    }
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">سعر التجربة لفترة محدودة</Badge>
          <h2 className="text-3xl md:text-4xl font-headline mb-4">اختر الباقة المناسبة لهدفك</h2>
          <p className="text-muted-foreground max-w-xl mx-auto px-4 text-sm md:text-base">استمتع بوجبات صحية توصلك طازة يومياً، مع إمكانية التعديل في أي وقت.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-card border rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:translate-y-[-5px] ${
                plan.highlight ? 'ring-2 ring-primary shadow-2xl scale-100 md:scale-105 z-10' : 'shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> الموصى به
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price} ج</span>
                  <span className="text-muted-foreground text-sm"> /أسبوع</span>
                </div>
                {plan.oldPrice && (
                  <p className="text-xs text-muted-foreground line-through mt-1 opacity-70">{plan.oldPrice} ج</p>
                )}
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-start gap-3 text-sm md:text-base leading-snug">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{plan.included}</span>
                </div>
                <div className="flex items-start gap-3 text-sm md:text-base leading-snug">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{plan.target}</span>
                </div>
                <div className="flex items-start gap-3 text-sm md:text-base leading-snug">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{plan.calories}</span>
                </div>
              </div>

              <Button 
                onClick={() => onSubscribeClick(plan.name)}
                variant={plan.highlight ? 'default' : 'outline'} 
                className={`w-full font-bold h-12 text-lg rounded-xl ${plan.highlight ? 'shadow-lg hover:shadow-xl' : ''}`}
              >
                اختر هذه الباقة
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border shadow-sm p-6 md:p-10 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <p className="font-bold text-lg mb-6">كل الباقات تشمل هذه الميزات القياسية:</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["توصيل مجاني يومياً", "إيقاف/إلغاء في أي وقت", "ضمان استرجاع 7 أيام", "تخصيص كامل للمنيو"].map((item, i) => (
              <span key={i} className="bg-muted px-4 py-2 rounded-full border text-sm md:text-base font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
