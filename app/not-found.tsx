import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background climbing-grid flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-foreground/10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full climbing-hold"/>
              <div className="w-6 h-6 rounded-full climbing-hold"/>
              <div className="w-10 h-10 rounded-full climbing-hold"/>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Off Route</h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-lg mx-auto">
            Looks like you&apos;ve taken a wrong turn on the wall. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/">Find Your Route Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
            <Link href="/rules-and-formats">Check the Rules</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
