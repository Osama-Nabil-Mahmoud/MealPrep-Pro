"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { BeforeAfter } from "@/components/BeforeAfter"
import { Features } from "@/components/Features"
import { Pricing } from "@/components/Pricing"
import { MealsGallery } from "@/components/MealsGallery"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { TrialDrawer } from "@/components/TrialDrawer"
import { ConsultationModal } from "@/components/ConsultationModal"
import { MealPlanSuggester } from "@/components/MealPlanSuggester"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isTrialOpen, setIsTrialOpen] = React.useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false)

  return (
    <main className="min-h-screen">
      <Navbar onTrialClick={() => setIsTrialOpen(true)} />
      
      <Hero 
        onTrialClick={() => setIsTrialOpen(true)}
        onSubscribeClick={() => setIsTrialOpen(true)}
        onConsultationClick={() => setIsConsultationOpen(true)}
      />

      <BeforeAfter />

      <Features />

      <section id="ai-suggester" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline mb-4">السر مش بس في الأكل، السر في النظام الذكي</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            تكنولوجيا MealPrep Pro بتساعدك تختار الأنسب لجسمك وهدفك.
          </p>
        </div>
        <MealPlanSuggester />
      </section>

      <Pricing onSubscribeClick={() => setIsTrialOpen(true)} />

      <MealsGallery />

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline mb-4">قصص نجاح حقيقية</h2>
            <p className="text-muted-foreground">ناس زيّك غيّروا حياتهم مع MealPrep Pro</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "أحمد سليم", story: "خسرت 12 كج في 3 شهور من غير ما أحس إني عامل دايت." },
              { name: "سارة محمود", story: "وفرت 10 ساعات أسبوعياً كنت بضيعهم في المطبخ والزحمة." },
              { name: "كريم ممدوح", story: "زودت 6 كج عضل صافي بفضل الماكروز الدقيقة للوجبات." },
              { name: "مريم علي", story: "أم عاملة: راحة تامة وأكل صحي ومضمون لكل العيلة." }
            ].map((s, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border shadow-sm">
                <p className="italic text-muted-foreground mb-4 leading-relaxed">"{s.story}"</p>
                <p className="font-bold text-primary">{s.name}</p>
                <p className="text-xs text-muted-foreground mt-4">النتائج تختلف من شخص للتاني.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">جاهز تخلّي الأكل الصحي عادة سهلة؟</h2>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <span className="flex items-center gap-2">✓ شيفات محترفين</span>
            <span className="flex items-center gap-2">✓ توصيل يومي</span>
            <span className="flex items-center gap-2">✓ ضمان استرجاع</span>
          </div>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => setIsTrialOpen(true)}
            className="text-xl px-12 h-14 font-bold"
          >
            ابدأ التجربة المخفضة الآن
          </Button>
        </div>
      </section>

      <FAQ />

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t z-40 md:hidden">
        <Button onClick={() => setIsTrialOpen(true)} className="w-full h-12 text-lg font-bold">
          ابدأ تجربتك بخصم 20%
        </Button>
      </div>

      <TrialDrawer isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </main>
  )
}
