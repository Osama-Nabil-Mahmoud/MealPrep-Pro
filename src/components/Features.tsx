import { Calculator, Utensils, Leaf, Truck, RefreshCw, Settings, HeartPulse, Recycle } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "محسوبة السعرات والماكروز",
      desc: "كل وجبة بتيجي مع ورقة فيها تفاصيل البروتين، الكارب، والدهون.",
      icon: Calculator
    },
    {
      title: "شيفات محترفين",
      desc: "أكل صحي بس طعمه أحلى من أكل المطاعم، طبخ بيتي بجودة فندقية.",
      icon: Utensils
    },
    {
      title: "مكونات طازة 100%",
      desc: "بنستخدم خضار ولحوم طازة يومياً، وبدون أي مواد حافظة.",
      icon: Leaf
    },
    {
      title: "توصيل يومي 7–9 ص",
      desc: "وجباتك بتوصلك كل يوم الصبح بدري عشان تبدأ يومك صح.",
      icon: Truck
    },
    {
      title: "20+ وجبة تتغير أسبوعياً",
      desc: "عمرك ما هتزهق، القائمة بتتجدد كل أسبوع بأطباق جديدة.",
      icon: RefreshCw
    },
    {
      title: "تخصيص كامل",
      desc: "اختار وجباتك بنفسك أو سيبنا نختار لك بناءً على هدفك.",
      icon: Settings
    },
    {
      title: "استشارة تغذية مجانية",
      desc: "أخصائي تغذية بيتابع معاك عشان يضمن إنك ماشي على الطريق الصح.",
      icon: HeartPulse
    },
    {
      title: "عبوات صديقة للبيئة",
      desc: "كل عبواتنا قابلة لإعادة التدوير وآمنة للاستخدام في المايكرويف.",
      icon: Recycle
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline mb-4 md:mb-6">السر مش في الدايت… السر في الاستمرارية</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed px-4">
            إحنا بنوفرلك كل الأدوات اللي تخليك تلتزم بنظامك الصحي من غير ما تحس بمجهود أو ملل.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-card p-6 md:p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-3">{f.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
