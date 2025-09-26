import ScrollButton from "@/components/scroll-link"
import { Instagram, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NUS BOULDERACTIVE</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Singapore's premier bouldering competition. Join us in pushing limits, conquering fears, and building an
              inclusive climbing community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nusboulderactive/" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:boulderactivenus@gmail.com" className="text-background/80 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollButton scrollToId="home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </ScrollButton>
              </li>
              <li>
                <ScrollButton scrollToId="about" className="text-background/80 hover:text-primary transition-colors">
                  About
                </ScrollButton>
              </li>
              <li>
                <ScrollButton scrollToId="information" className="text-background/80 hover:text-primary transition-colors">
                  Information
                </ScrollButton>
              </li>
              <li>
                <ScrollButton scrollToId="schedule" className="text-background/80 hover:text-primary transition-colors">
                  Schedule
                </ScrollButton>
              </li>
              <li>
                <ScrollButton scrollToId="location" className="text-background/80 hover:text-primary transition-colors">
                  Location
                </ScrollButton>
              </li>
              <li>
                <Link href="/rules-and-formats" className="text-background/80 hover:text-primary transition-colors">
                  Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <span className="text-background/80">nusboulderactive</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-background/80">boulderactivenus@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 NUS BoulderActive. All rights reserved. |<span className="ml-2">Organised by NUS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
