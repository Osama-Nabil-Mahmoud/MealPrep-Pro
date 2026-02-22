export function BeforeAfter() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline mb-4">ليه MealPrep Pro بتغير حياتك؟</h2>
          <p className="text-muted-foreground">الفرق واضح من أول يوم</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-600 mb-6 text-center">قبل MealPrep Pro</h3>
            <ul className="space-y-4">
              {[
                "ساعات ضايعة في المطبخ والزحمة",
                "أكل سريع دليفري مش صحي ومكلف",
                "حيرة كل يوم: هناكل إيه النهاردة؟",
                "صعوبة في حساب السعرات والماكروز",
                "أكل متكرر وممل بيخليك تزهق من الدايت"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-red-800 dark:text-red-400">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">بعد MealPrep Pro</h3>
            <ul className="space-y-4">
              {[
                "أكل جاهز في تلاجتك يوفر وقتك تماماً",
                "وجبات صحية 100% محسوبة بدقة",
                "توصيل لحد بابك كل يوم الصبح",
                "تنوع مذهل: أكتر من 20 وجبة أسبوعياً",
                "مرونة كاملة: وقف أو عدل اشتراكك بلمسة"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
