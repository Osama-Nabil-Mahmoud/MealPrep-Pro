"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Calculator, Utensils, ShieldCheck, Truck, Leaf } from "lucide-react"

export function Hero({ onTrialClick, onSubscribeClick, onConsultationClick }: any) {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right space-y-6">
            <span className="text-primary font-bold text-lg inline-block animate-fade-in-up">
              في سر بيخلّي الأكل الصحي… أسهل من طلب دليفري.
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              وجبات صحية جاهزة… <br className="hidden md:block" />
              <span className="text-secondary">توصل لك كل صباح</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:ml-0 lg:mr-auto">
              توقف عن تضييع الوقت في المطبخ. وجبات شيفات محترفين، محسوبة السعرات، بتوصلك طازة يومياً لحد بابك.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Clock className="text-primary w-5 h-5" />
                <span className="font-medium">وفر وقتك</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Calculator className="text-primary w-5 h-5" />
                <span className="font-medium">ماكروز محسوبة</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Utensils className="text-primary w-5 h-5" />
                <span className="font-medium">طعم لذيذ</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 justify-center lg:justify-start">
              <Button size="lg" onClick={onTrialClick} className="w-full sm:w-auto text-lg px-8 font-bold">
                ابدأ التجربة المخفضة
              </Button>
              <Button size="lg" variant="outline" onClick={onSubscribeClick} className="w-full sm:w-auto text-lg px-8">
                اشترك شهرياً
              </Button>
            </div>
            
            <button 
              onClick={onConsultationClick}
              className="text-primary underline font-medium block mx-auto lg:mr-0 lg:ml-auto"
            >
              احجز استشارة مجانية مع خبير تغذية
            </button>
          </div>

          {/* Mock UI Card */}
          <div className="flex-1 relative animate-fade-in-up delay-200">
            <div className="bg-card border rounded-2xl p-6 shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-xl">خطة اليوم</h3>
                  <p className="text-sm text-muted-foreground">توصيل: 7:00 ص - 9:00 ص</p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">نشط الآن</Badge>
              </div>

              <div className="space-y-4">
                {[
                  { title: "إفطار: بان كيك بروتين", cal: 350, tag: "نشويات معقدة" },
                  { title: "غداء: سلمون مشوي وكينوا", cal: 550, tag: "أوميجا 3" },
                  { title: "عشاء: ستيك مع بروكلي", cal: 450, tag: "بروتين عالي" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center">
                        <Utensils className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.tag}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm">{item.cal} سعرة</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">بروتين</p>
                  <p className="font-bold">145g</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">كارب</p>
                  <p className="font-bold">120g</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">دهون</p>
                  <p className="font-bold">45g</p>
                </div>
              </div>
            </div>
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-20 py-8 border-y bg-muted/30 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <Truck className="text-primary w-8 h-8" />
            <p className="font-bold">توصيل مجاني</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Leaf className="text-primary w-8 h-8" />
            <p className="font-bold">بدون مواد حافظة</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="text-primary w-8 h-8" />
            <p className="font-bold">ضمان 7 أيام</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Calculator className="text-primary w-8 h-8" />
            <p className="font-bold">ماكروز دقيقة</p>
          </div>
        </div>
      </div>
    </section>
  )
}
