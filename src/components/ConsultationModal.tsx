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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(11, "رقم الموبايل غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  time: z.string().min(1, "اختار الموعد المفضل"),
})

export function ConsultationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      time: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "تم حجز استشارتك!",
      description: "أخصائي التغذية هيتواصل معاك في الموعد المختار.",
    })
    form.reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-right">
          <DialogTitle className="text-2xl font-headline">حجز استشارة مجانية</DialogTitle>
          <DialogDescription>
            ابدأ رحلتك الصحية مع نصائح من خبراء متخصصين.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-right">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم</FormLabel>
                  <FormControl>
                    <Input placeholder="الاسم الكامل" {...field} className="text-right" />
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
                  <FormLabel>الموبايل</FormLabel>
                  <FormControl>
                    <Input placeholder="01xxxxxxxxx" {...field} className="text-right" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الموعد المفضل (صباحاً/مساءً)</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: غداً 6 مساءً" {...field} className="text-right" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full font-bold h-11">تأكيد الحجز</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
