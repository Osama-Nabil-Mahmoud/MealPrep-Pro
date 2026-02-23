"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Calculator, Utensils, ShieldCheck, Truck, Leaf } from "lucide-react"

export function Hero({ onTrialClick, onSubscribeClick, onConsultationClick }: any) {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right space-y-6 md:space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm md:text-lg inline-block animate-fade-in-up">
                في سر بيخلّي الأكل الصحي… أسهل من طلب دليفري.
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold leading-[1.15] md:leading-tight">
                وجبات صحية جاهزة… <br className="hidden sm:block" />
                <span className="text-secondary">توصل لك كل صباح</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mr-0">
                توقف عن تضييع الوقت في المطبخ. وجبات شيفات محترفين، محسوبة السعرات، بتوصلك طازة يومياً لحد بابك.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-muted/50 p-3 rounded-xl md:bg-transparent md:p-0">
                <Clock className="text-primary w-5 h-5 shrink-0" />
                <span className="font-medium text-sm md:text-base">وفر وقتك</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-muted/50 p-3 rounded-xl md:bg-transparent md:p-0">
                <Calculator className="text-primary w-5 h-5 shrink-0" />
                <span className="font-medium text-sm md:text-base">ماكروز محسوبة</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-muted/50 p-3 rounded-xl md:bg-transparent md:p-0">
                <Utensils className="text-primary w-5 h-5 shrink-0" />
                <span className="font-medium text-sm md:text-base">طعم لذيذ</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" onClick={onTrialClick} className="w-full sm:w-auto text-lg px-10 font-bold h-14 shadow-lg">
                ابدأ التجربة المخفضة
              </Button>
              <Button size="lg" variant="outline" onClick={onSubscribeClick} className="w-full sm:w-auto text-lg px-10 h-14">
                اشترك شهرياً
              </Button>
            </div>
            
            <button 
              onClick={onConsultationClick}
              className="text-primary hover:text-secondary underline font-medium block mx-auto lg:mr-0 transition-colors text-sm md:text-base"
            >
              احجز استشارة مجانية مع خبير تغذية
            </button>
          </div>

          {/* Mock UI Card */}
          <div className="flex-1 w-full relative animate-fade-in-up delay-200">
            <div className="bg-card border rounded-3xl p-5 md:p-8 shadow-2xl relative z-10 max-w-lg mx-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg md:text-xl">خطة اليوم</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">توصيل: 7:00 ص - 9:00 ص</p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1">نشط الآن</Badge>
              </div>

              <div className="space-y-3 md:space-y-4">
                {[
                  { title: "إفطار: بان كيك بروتين", cal: 350, tag: "نشويات معقد" },
                  { title: "غداء: سلمون مشوي", cal: 550, tag: "أوميجا 3" },
                  { title: "عشاء: ستيك مع بروكلي", cal: 450, tag: "بروتين عالي" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <Utensils className="text-primary w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-xs md:text-sm line-clamp-1">{item.title}</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground">{item.tag}</p>
                      </div>
                    </div>
                    <span className="font-bold text-xs md:text-sm whitespace-nowrap">{item.cal} سعرة</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-2 text-center">
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs text-muted-foreground">بروتين</p>
                  <p className="font-bold text-sm md:text-base">145g</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs text-muted-foreground">كارب</p>
                  <p className="font-bold text-sm md:text-base">120g</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs text-muted-foreground">دهون</p>
                  <p className="font-bold text-sm md:text-base">45g</p>
                </div>
              </div>
            </div>
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 md:mt-24 py-8 md:py-10 border-y bg-muted/30 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <Truck className="text-primary w-7 h-7 md:w-8 md:h-8" />
            <p className="font-bold text-sm md:text-base">توصيل مجاني</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Leaf className="text-primary w-7 h-7 md:w-8 md:h-8" />
            <p className="font-bold text-sm md:text-base">بدون مواد حافظة</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="text-primary w-7 h-7 md:w-8 md:h-8" />
            <p className="font-bold text-sm md:text-base">ضمان 7 أيام</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Calculator className="text-primary w-7 h-7 md:w-8 md:h-8" />
            <p className="font-bold text-sm md:text-base">ماكروز دقيقة</p>
          </div>
        </div>
      </div>
    </section>
  )
}
