import Link from "next/link"

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
              <li><Link href="#features">المميزات</Link></li>
              <li><Link href="#pricing">الباقات</Link></li>
              <li><Link href="#gallery">الوجبات</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">تواصل معنا</Link></li>
              <li><Link href="#">الأسئلة المتكررة</Link></li>
              <li><Link href="#">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground">فيسبوك</span>
              <span className="text-sm text-muted-foreground">إنستجرام</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 MealPrep Pro. جميع الحقوق محفوظة.</p>
          <p className="font-body italic">Eat smart. Live strong.</p>
        </div>
      </div>
    </footer>
  )
}
