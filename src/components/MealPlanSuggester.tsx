"use client"

import * as React from "react"
import { suggestMealPlan } from "@/ai/flows/ai-meal-plan-suggestion"
import { Button } from "@/components/ui/button"
import { Loader2, Sparkles, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const availableMealsData = [
  { title: "دجاج مشوي مع أرز وخضار", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "غداء/عشاء" },
  { title: "سلمون مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "غداء/عشاء" },
  { title: "ستيك مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "كيتو" },
  { title: "باستا بالدجاج", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "غداء/عشاء" },
  { title: "كفتة مع أرز وسلطة", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "غداء/عشاء" },
  { title: "جمبري بالثوم مع كينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "غداء/عشاء" },
  { title: "زبادي يوناني بالعسل والتوت", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "إفطار" },
  { title: "بان كيك بروتين", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "إفطار" },
  { title: "فول وطعمية (صحية!)", calories: 350, macros: "P:18g, C:45g, F:12g", tag: "نباتي" },
  { title: "دجاج كاري مع أرز بسمتي", calories: 460, macros: "P:32g, C:42g, F:14g", tag: "غداء/عشاء" },
  { title: "سمك فيليه مشوي", calories: 310, macros: "P:30g, C:5g, F:12g", tag: "غداء/عشاء" },
  { title: "تونة بالخضار والذرة", calories: 290, macros: "P:28g, C:15g, F:8g", tag: "غداء/عشاء" },
  { title: "صدر ديك رومي مع فريك", calories: 430, macros: "P:38g, C:35g, F:10g", tag: "غداء/عشاء" },
  { title: "فاصوليا بيضاء مع لحم", calories: 470, macros: "P:30g, C:38g, F:16g", tag: "غداء/عشاء" },
  { title: "ملوخية مع دجاج مسلوق", calories: 390, macros: "P:35g, C:10g, F:12g", tag: "غداء/عشاء" },
  { title: "أومليت بالخضار والجبن", calories: 280, macros: "P:20g, C:5g, F:18g", tag: "إفطار" },
  { title: "شوفان بالموز والمكسرات", calories: 340, macros: "P:12g, C:50g, F:10g", tag: "إفطار" },
  { title: "برجر لحم صحي (بدون خبز)", calories: 410, macros: "P:35g, C:5g, F:22g", tag: "كيتو" },
  { title: "سلطة سيزر بالدجاج", calories: 320, macros: "P:28g, C:10g, F:15g", tag: "غداء/عشاء" },
  { title: "كينوا بالخضار المشوية", calories: 300, macros: "P:10g, C:45g, F:8g", tag: "نباتي" }
]

export function MealPlanSuggester() {
  const [goal, setGoal] = React.useState("weight loss")
  const [loading, setLoading] = React.useState(false)
  const [suggestion, setSuggestion] = React.useState<any[] | null>(null)
  const { toast } = useToast()

  const handleSuggest = async () => {
    setLoading(true)
    setSuggestion(null)
    try {
      const result = await suggestMealPlan({
        dietaryGoal: goal,
        availableMeals: availableMealsData
      })
      if (result && result.suggestedMealPlan) {
        setSuggestion(result.suggestedMealPlan)
      } else {
        throw new Error("No data received")
      }
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "عذراً، حدث خطأ",
        description: "فشل الذكاء الاصطناعي في إنشاء خطة حالياً. حاول مرة أخرى.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto my-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-primary" />
        <h3 className="text-xl font-bold">اقتراح وجبات ذكي (AI)</h3>
      </div>
      
      <p className="mb-6 text-sm text-muted-foreground">
        اختار هدفك وسيب الذكاء الاصطناعي ينسق لك منيو من الـ 20 وجبة المتاحة عندنا.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { label: "خسارة وزن", value: "weight loss" },
          { label: "بناء عضل", value: "muscle gain" },
          { label: "كيتو", value: "keto" },
          { label: "نباتي", value: "vegan" }
        ].map((item) => (
          <Badge
            key={item.value}
            variant={goal === item.value ? "default" : "outline"}
            className="cursor-pointer py-1.5 px-4"
            onClick={() => { setGoal(item.value); setSuggestion(null); }}
          >
            {item.label}
          </Badge>
        ))}
      </div>

      <Button 
        onClick={handleSuggest} 
        disabled={loading} 
        className="w-full mb-8 font-bold h-12"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            جاري التحليل والاقتراح...
          </>
        ) : (
          "اقترح لي خطة وجبات"
        )}
      </Button>

      {suggestion && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="font-bold text-sm mb-2 text-primary">الخطة المقترحة لك بناءً على أهدافك:</p>
          {suggestion.map((meal, i) => (
            <Card key={i} className="p-4 flex justify-between items-center bg-background border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">{meal.title}</p>
                  <p className="text-[10px] text-muted-foreground">{meal.macros}</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-[10px] shrink-0">{meal.calories} سعرة</Badge>
            </Card>
          ))}
        </div>
      )}

      {!loading && !suggestion && (
        <div className="text-center py-4 text-xs text-muted-foreground">
          اضغط على الزر للحصول على اقتراحات مخصصة.
        </div>
      )}
    </div>
  )
}
