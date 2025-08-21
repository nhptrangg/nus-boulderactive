"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="NUS BoulderActive Logo" width={40} height={40} className="w-10 h-10" />
              <h1 className="text-xl font-bold text-primary">NUS BOULDERACTIVE</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                HOME
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#rules" className="text-foreground hover:text-primary transition-colors">
                RULES
              </a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors">
                SCHEDULE
              </a>
              <a href="#location" className="text-foreground hover:text-primary transition-colors">
                LOCATION
              </a>
              <Button className="bg-primary hover:bg-primary/90">REGISTER</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                HOME
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#rules" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                RULES
              </a>
              <a href="#schedule" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                SCHEDULE
              </a>
              <a href="#location" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                LOCATION
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">REGISTER</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
