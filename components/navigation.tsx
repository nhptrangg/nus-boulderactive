'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import ScrollButton from '@/components/scroll-link';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 min-w-0 flex-1 mr-2 sm:mr-4">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <Image
                src="/logo.png"
                alt="NUS BoulderActive Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
              />
              <h1
                className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold tracking-wide max-w-[120px] sm:max-w-none"
                style={{
                  color: '#d4af37 !important',
                  WebkitTextFillColor: '#d4af37 !important',
                }}
              >
                NUS BOULDERACTIVE
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <ScrollButton
                scrollToId="home"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                HOME
              </ScrollButton>
              <ScrollButton
                scrollToId="about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                ABOUT
              </ScrollButton>
              <ScrollButton
                scrollToId="information"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                INFORMATION
              </ScrollButton>
              <ScrollButton
                scrollToId="schedule"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                SCHEDULE
              </ScrollButton>
              <ScrollButton
                scrollToId="location"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                LOCATION
              </ScrollButton>
              <Link
                href="/rules-and-formats"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                RULES AND FORMATS
              </Link>
            </div>
          </div>

          <div className="md:hidden flex-shrink-0 ml-2">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              HOME
            </Link>
            <ScrollButton
              scrollToId="about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              ABOUT
            </ScrollButton>
            <ScrollButton
              scrollToId="information"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              INFORMATION
            </ScrollButton>
            <ScrollButton
              scrollToId="schedule"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              SCHEDULE
            </ScrollButton>
            <ScrollButton
              scrollToId="location"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              LOCATION
            </ScrollButton>
            <Link
              href="/rules-and-formats"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              RULES AND FORMATS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
