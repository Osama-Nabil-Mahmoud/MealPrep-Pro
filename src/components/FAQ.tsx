import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      q: "مواعيد ونطاق التوصيل؟",
      a: "بنوصل في القاهرة والجيزة يومياً بين الساعة 7 و 9 صباحاً، عشان وجباتك تكون جاهزة ليومك في البيت أو المكتب."
    },
    {
      q: "هل أقدر أوقف أو ألغي اشتراكي؟",
      a: "طبعاً، تقدر توقف اشتراكك مؤقتاً أو تلغيه في أي وقت من خلال التطبيق أو التواصل معانا قبل الموعد بـ 24 ساعة."
    },
    {
      q: "هل الوجبات بتتغير أسبوعياً؟",
      a: "أيوة، المنيو بتاعنا بيتغير كل أسبوع عشان نضمن التنوع وعدم الملل، مع الحفاظ على التوازن الغذائي."
    },
    {
      q: "هل في خطط كيتو أو نباتي؟",
      a: "نعم، عندنا باقات مخصصة للكيتو دايت بنسب ماكروز دقيقة، وأيضاً باقات نباتية (Vegan) متكاملة العناصر."
    },
    {
      q: "إيه هو ضمان الاسترجاع لمدة 7 أيام؟",
      a: "لو مجربتش خدمتنا قبل كدة ومعجبكش جودة الأكل أو التوصيل في أول أسبوع، بنرجعلك فلوسك بالكامل بدون أسئلة."
    },
    {
      q: "إزاي بتحسبوا السعرات والماكروز؟",
      a: "عندنا فريق متخصص من أخصائيي التغذية بيشرفوا على كل وجبة، وبنستخدم موازين دقيقة لضمان إن كل جرام محسوب صح."
    },
    {
      q: "هل الوجبات تنفع للعيلة والأطفال؟",
      a: "جداً، وجباتنا طبيعية 100% وبدون مواد حافظة أو ألوان صناعية، وده بيخليها الخيار الأمثل لكل أفراد العيلة."
    },
    {
      q: "إيه هي طرق الدفع المتاحة؟",
      a: "بنقبل الدفع عن طريق البطاقات الائتمانية، فوري، ومحافظ الموبايل، وتقدر تختار اللي يريحك وقت الاشتراك."
    }
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline mb-4">الأسئلة المتكررة</h2>
          <p className="text-muted-foreground">كل اللي محتاج تعرفه عن MealPrep Pro</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-right font-bold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-right text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
