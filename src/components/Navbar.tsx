"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar({ onTrialClick }: { onTrialClick: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "المميزات", href: "/#features" },
    { name: "الباقات", href: "/#pricing" },
    { name: "الوجبات", href: "/#gallery" },
    { name: "قصص نجاح", href: "/#testimonials" },
    { name: "الأسئلة", href: "/#faq" },
  ]

  const NavContent = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            mobile ? "text-lg py-3 border-b" : "text-sm"
          } font-medium hover:text-primary transition-colors`}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </>
  )

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary font-headline whitespace-nowrap">
            MealPrep Pro
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <NavContent />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button onClick={onTrialClick} className="hidden sm:flex font-bold">
            ابدأ التجربة
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8 text-right">
                <NavContent mobile />
                <Button onClick={() => { setIsOpen(false); onTrialClick(); }} className="w-full font-bold h-12 mt-4">
                  ابدأ التجربة المخفضة
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
