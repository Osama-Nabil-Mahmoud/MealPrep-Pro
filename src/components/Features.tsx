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
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline mb-4">السر مش في الدايت… السر في الاستمرارية</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            إحنا بنوفرلك كل الأدوات اللي تخليك تلتزم بنظامك الصحي من غير ما تحس بمجهود.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
