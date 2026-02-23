"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const formSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(11, "رقم الموبايل غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  plan: z.string().min(1, "اختار الباقة"),
  goal: z.string().min(1, "اختار هدفك"),
})

export function TrialDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      plan: "",
      goal: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "201210285859"
    const message = `مرحباً MealPrep Pro، أريد طلب باقة تجريبية:
*الاسم:* ${values.name}
*الموبايل:* ${values.phone}
*البريد:* ${values.email}
*الباقة:* ${values.plan}
*الهدف:* ${values.goal}`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
    
    toast({
      title: "تم توجيهك للواتساب!",
      description: "يرجى إرسال الرسالة لتأكيد طلبك.",
    })
    form.reset()
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-hidden flex flex-col">
        <ScrollArea className="flex-1">
          <div className="p-6 pb-24">
            <SheetHeader className="text-right mb-8">
              <SheetTitle className="text-2xl font-headline">ابدأ أسبوعك الأول بخصم!</SheetTitle>
              <SheetDescription className="text-base leading-relaxed">
                املا البيانات وهنتواصل معاك فوراً لتجهيز أول شحنة ليك وضمان أفضل تجربة صحية.
              </SheetDescription>
            </SheetHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-right">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">الاسم بالكامل</FormLabel>
                      <FormControl>
                        <Input placeholder="أحمد محمد" {...field} className="text-right h-12 text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">رقم الموبايل (واتساب)</FormLabel>
                      <FormControl>
                        <Input placeholder="01xxxxxxxxx" {...field} className="text-right h-12 text-lg" dir="ltr" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">البريد الإلكتروني</FormLabel>
                      <FormControl>
                        <Input placeholder="example@mail.com" {...field} className="text-right h-12 text-lg" dir="ltr" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="plan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">الباقة المطلوبة</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger dir="rtl" className="h-12 text-lg">
                            <SelectValue placeholder="اختار باقتك" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="starter">Starter - 899 ج</SelectItem>
                          <SelectItem value="pro">Pro - 1499 ج</SelectItem>
                          <SelectItem value="elite">Elite - 1999 ج</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">هدفك الغذائي</FormLabel>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["خسارة وزن", "بناء عضل", "أكل صحي", "كيتو", "نباتي"].map((goal) => (
                          <Badge 
                            key={goal}
                            variant={field.value === goal ? "default" : "outline"}
                            className="cursor-pointer py-2 px-4 text-sm font-medium transition-all"
                            onClick={() => field.onChange(goal)}
                          >
                            {goal}
                          </Badge>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-4">
                  <Button type="submit" className="w-full text-lg font-bold h-14 shadow-lg">تأكيد الطلب عبر الواتساب</Button>
                </div>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
