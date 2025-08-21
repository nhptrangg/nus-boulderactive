import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder-njswm.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          NUS BOULDERACTIVE
          <span className="block text-3xl md:text-5xl font-semibold text-accent mt-2">2025</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>15-16 & 18-19 MARCH 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>NUS SPORTS & RECREATION CENTRE</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Push your limits. Conquer new heights. Join Singapore's premier bouldering competition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            REGISTER NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
          >
            VIEW SCHEDULE
          </Button>
        </div>
      </div>
    </section>
  )
}
