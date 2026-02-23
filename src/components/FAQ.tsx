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
      a: "طبعاً، تقدر توقف اشتراكك مؤقتاً أو تلغيه في أي وقت من خلال التواصل معانا قبل الموعد بـ 24 ساعة."
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
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">الأسئلة المتكررة</h2>
          <p className="text-muted-foreground px-4 text-sm md:text-base">كل اللي محتاج تعرفه عن MealPrep Pro وطريقة الخدمة.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-4 md:px-6 bg-card">
              <AccordionTrigger className="text-right font-bold text-base md:text-lg py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-right text-muted-foreground leading-relaxed text-sm md:text-base pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
