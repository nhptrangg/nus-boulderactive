import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { EventInfoSection } from '@/components/event-info-section';
import { LocationSection } from '@/components/location-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventInfoSection />
      <LocationSection />
    </main>
  );
}
