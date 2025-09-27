import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { HeroImageCarousel } from './hero-image-carousel';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <HeroImageCarousel />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-hero text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-wider uppercase break-words">
          NUS BOULDERACTIVE
          <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-accent mt-2">
            2025
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm sm:text-base lg:text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">3-5 OCTOBER 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">City Square Mall</span>
          </div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Push your limits. Conquer new heights. Join Singapore&apos;s premier bouldering
          competition.
        </p>

        <CountdownTimer targetDate="2025-10-03T08:00:00+08:00" label="NUS BOULDERACTIVE STARTS" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}
