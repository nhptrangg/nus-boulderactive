import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Camera, Trophy } from "lucide-react"

export function EventInfoSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">EVENT INFORMATION</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Date & Venue */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Date & Venue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">15-16 & 18-19 March 2025</p>
                <p className="text-muted-foreground mb-4">NUS Sports & Recreation Centre</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Climbers and spectators enjoy the Sport Climbing Day if you are not familiar. Please check
                  Registration on Instagram if you intend to join the system.
                </p>
                <Button className="bg-primary hover:bg-primary/90">HOW TO GET TO NUS SRCL</Button>
              </div>
            </CardContent>
          </Card>

          {/* Event Photos */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Event Photos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Climbers and spectators enjoy the Sport Climbing Day if you are not familiar. Please check Registration
                on Instagram if you intend to join the system.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                SEE PREVIOUS 2024 PHOTOS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="text-center p-6 bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">QUALIFICATION</h3>
              <p className="text-sm opacity-90">March 15-16</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-accent text-accent-foreground">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">SEMI-FINALS</h3>
              <p className="text-sm opacity-90">March 18</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-secondary text-secondary-foreground">
            <CardContent className="pt-6">
              <Trophy className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">FINALS</h3>
              <p className="text-sm opacity-90">March 19</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 border-primary">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2 text-primary">REGISTER</h3>
              <p className="text-sm text-muted-foreground">Open Now</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
