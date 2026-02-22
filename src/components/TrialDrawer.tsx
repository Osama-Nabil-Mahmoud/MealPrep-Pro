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
    console.log(values)
    toast({
      title: "تم استلام طلبك بنجاح!",
      description: "فريقنا هيتواصل معاك خلال 24 ساعة لتأكيد التفاصيل.",
    })
    form.reset()
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md">
        <SheetHeader className="text-right mb-6">
          <SheetTitle className="text-2xl font-headline">ابدأ أسبوعك الأول بخصم!</SheetTitle>
          <SheetDescription>
            املا البيانات وهنتواصل معاك فوراً لتجهيز أول شحنة ليك.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-right">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم بالكامل</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: أحمد محمد" {...field} className="text-right" />
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
                  <FormLabel>رقم الموبايل</FormLabel>
                  <FormControl>
                    <Input placeholder="01xxxxxxxxx" {...field} className="text-right" />
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
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} className="text-right" />
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
                  <FormLabel>الباقة المطلوبة</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger dir="rtl">
                        <SelectValue placeholder="اختار باقتك" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent dir="rtl">
                      <SelectItem value="starter">Starter - 899 ج</SelectItem>
                      <SelectItem value="pro">Pro - 1499 ج</SelectItem>
                      <SelectItem value="elite">Elite - 1999 ج</SelectItem>
                      <SelectItem value="keto">Keto - 1699 ج</SelectItem>
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
                  <FormLabel>هدفك الغذائي</FormLabel>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["خسارة وزن", "بناء عضل", "أكل صحي", "كيتو", "نباتي"].map((goal) => (
                      <Badge 
                        key={goal}
                        variant={field.value === goal ? "default" : "outline"}
                        className="cursor-pointer py-1.5 px-3"
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
            <Button type="submit" className="w-full text-lg font-bold h-12 mt-6">تأكيد الطلب</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
