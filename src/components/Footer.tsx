import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary font-headline">MealPrep Pro</h3>
            <p className="text-sm text-muted-foreground">
              خدمة اشتراك وجبات صحية بتوصيل يومي في مصر.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#features">المميزات</Link></li>
              <li><Link href="/#pricing">الباقات</Link></li>
              <li><Link href="/#gallery">الوجبات</Link></li>
              <li><Link href="/#testimonials">قصص نجاح</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">المساعدة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#faq" className="hover:text-primary transition-colors">الأسئلة المتكررة</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a 
                  href="tel:01210285859" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">01210285859</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:osamanabilmahmoud98@gmail.com" 
                  className="hover:text-primary transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>osamanabilmahmoud98@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 MealPrep Pro. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">فيسبوك</span>
            <span className="text-sm text-muted-foreground">إنستجرام</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
