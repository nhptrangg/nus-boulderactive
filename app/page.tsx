import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { EventInfoSection } from '@/components/event-info-section';
import { LocationSection } from '@/components/location-section';
import { NotificationManager } from '@/components/notification-manager';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EventInfoSection />
      <LocationSection />
      <NotificationManager />
    </>
  );
}
