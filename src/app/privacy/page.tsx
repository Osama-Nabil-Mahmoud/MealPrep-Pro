"use client"

import * as React from "react"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar onTrialClick={() => window.location.href = '/#pricing'} />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowRight className="w-4 h-4 rtl-flip" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-right" dir="rtl">
          <h1 className="text-4xl font-headline font-bold text-primary">سياسة الخصوصية لـ MealPrep Pro</h1>
          <p className="text-muted-foreground italic">آخر تحديث: فبراير 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. مقدمة</h2>
            <p>
              نحن في MealPrep Pro نلتزم بحماية خصوصية بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية المعلومات التي تقدمها لنا من خلال موقعنا الإلكتروني أو عند التواصل معنا عبر الواتساب.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. المعلومات التي نجمعها</h2>
            <p>عند استخدامك لخدماتنا، قد نطلب منك تزويدنا بالمعلومات التالية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>الاسم بالكامل.</li>
              <li>رقم الهاتف (للتواصل والتوصيل).</li>
              <li>البريد الإلكتروني.</li>
              <li>العنوان (لتوصيل الوجبات).</li>
              <li>الأهداف الغذائية والتفضيلات الصحية.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. كيف نستخدم معلوماتك</h2>
            <p>نستخدم البيانات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>معالجة طلبات الاشتراك الخاصة بك.</li>
              <li>تخصيص خطط الوجبات بناءً على أهدافك الصحية (عبر الذكاء الاصطناعي).</li>
              <li>التنسيق معك لتوصيل الوجبات في مواعيدها.</li>
              <li>إرسال تحديثات العروض أو التغييرات في المنيو عبر الواتساب.</li>
              <li>تقديم استشارات التغذية المجانية.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. حماية البيانات ومشاركتها</h2>
            <p>
              نحن لا نقوم ببيع أو تأجير بياناتك الشخصية لأي طرف ثالث. تتم مشاركة البيانات فقط مع مقدمي الخدمات الضروريين (مثل شركات التوصيل أو تطبيق واتساب لإتمام المحادثات) بما يخدم غرض تقديم الخدمة لك فقط.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. ملفات تعريف الارتباط (Cookies)</h2>
            <p>
              يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وحفظ تفضيلاتك (مثل وضع النهار/الليل). يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. تواصل معنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية أو كنت ترغب في تحديث أو حذف بياناتك، يمكنك التواصل معنا مباشرة:
            </p>
            <div className="bg-muted p-6 rounded-2xl border space-y-2">
              <p><strong>رقم الموبايل:</strong> 01210285859</p>
              <p><strong>البريد الإلكتروني:</strong> osamanabilmahmoud98@gmail.com</p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
