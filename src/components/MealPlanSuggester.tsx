"use client"

import * as React from "react"
import { suggestMealPlan } from "@/ai/flows/ai-meal-plan-suggestion"
import { Button } from "@/components/ui/button"
import { Utensils, Loader2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const availableMealsData = [
  { title: "دجاج مشوي مع أرز وخضار", calories: 450, macros: "P:35g, C:40g, F:15g", tag: "غداء/عشاء" },
  { title: "سلمون مع بطاطس حلوة", calories: 500, macros: "P:30g, C:45g, F:20g", tag: "غداء/عشاء" },
  { title: "ستيك مع بروكلي", calories: 480, macros: "P:40g, C:10g, F:25g", tag: "كيتو" },
  { title: "باستا بالدجاج", calories: 550, macros: "P:30g, C:60g, F:10g", tag: "غداء/عشاء" },
  { title: "كفتة مع أرز وسلطة", calories: 420, macros: "P:35g, C:30g, F:18g", tag: "غداء/عشاء" },
  { title: "جمبري بالثوم مع كينوا", calories: 380, macros: "P:28g, C:40g, F:12g", tag: "غداء/عشاء" },
  { title: "زبادي يوناني بالعسل والتوت", calories: 250, macros: "P:15g, C:25g, F:5g", tag: "إفطار" },
  { title: "بان كيك بروتين", calories: 320, macros: "P:25g, C:35g, F:8g", tag: "إفطار" },
  { title: "فول وطعمية (صحية!)", calories: 350, macros: "P:18g, C:45g, F:12g", tag: "نباتي" }
]

export function MealPlanSuggester() {
  const [goal, setGoal] = React.useState("weight loss")
  const [loading, setLoading] = React.useState(false)
  const [suggestion, setSuggestion] = React.useState<any[] | null>(null)

  const handleSuggest = async () => {
    setLoading(true)
    try {
      const result = await suggestMealPlan({
        dietaryGoal: goal,
        availableMeals: availableMealsData
      })
      setSuggestion(result.suggestedMealPlan)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto my-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-primary" />
        <h3 className="text-xl font-bold">اقتراح وجبات ذكي</h3>
      </div>
      
      <p className="mb-6 text-sm text-muted-foreground">
        مش عارف تختار إيه؟ سيب الذكاء الاصطناعي يقترح عليك منيو مناسب لهدفك.
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
        className="w-full mb-8 font-bold"
      >
        {loading ? <Loader2 className="animate-spin mr-2" /> : "اقترح لي وجبات"}
      </Button>

      {suggestion && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="font-bold text-sm mb-2 text-primary">الخطة المقترحة لك:</p>
          {suggestion.map((meal, i) => (
            <Card key={i} className="p-4 flex justify-between items-center bg-background">
              <div>
                <p className="font-bold text-sm">{meal.title}</p>
                <p className="text-xs text-muted-foreground">{meal.macros}</p>
              </div>
              <Badge variant="secondary">{meal.calories} سعرة</Badge>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
