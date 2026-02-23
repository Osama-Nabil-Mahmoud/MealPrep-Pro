"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar({ onTrialClick }: { onTrialClick: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "المميزات", href: "#features" },
    { name: "الباقات", href: "#pricing" },
    { name: "مساعد الوجبات (AI)", href: "#ai-suggester" },
    { name: "الوجبات", href: "#gallery" },
    { name: "قصص نجاح", href: "#testimonials" },
    { name: "الأسئلة", href: "#faq" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary font-headline">
            MealPrep Pro
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button onClick={onTrialClick} className="hidden sm:flex font-bold">
            ابدأ التجربة المخفضة
          </Button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="container px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={() => { setIsOpen(false); onTrialClick(); }} className="w-full font-bold">
              ابدأ التجربة المخفضة
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
