import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Camera, Trophy, Info } from "lucide-react"

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
                <p className="text-lg font-semibold mb-2">October 3-5, 2025</p>
                <p className="text-muted-foreground mb-4">NUS Sports & Recreation Centre</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Join us for Singapore's premier university climbing competition featuring multiple categories and
                  formats across three exciting days.
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
                Experience the excitement of competitive bouldering with climbers from across Singapore's universities
                and climbing community.
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
              <h3 className="font-semibold mb-2">DAY 1 - QUALIFIERS</h3>
              <p className="text-sm opacity-90">October 3</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-accent text-accent-foreground">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">DAY 2 - SEMI-FINALS</h3>
              <p className="text-sm opacity-90">October 4</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-secondary text-secondary-foreground">
            <CardContent className="pt-6">
              <Trophy className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">DAY 3 - FINALS</h3>
              <p className="text-sm opacity-90">October 5</p>
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

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">DETAILED SCHEDULE</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three days of intense competition across multiple categories and formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Day 1 */}
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">DAY 1 - QUALIFIERS</CardTitle>
                <p className="text-sm text-muted-foreground">October 3, 2025</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-semibold">• Novice Women (Qualifiers)</p>
                  <p className="font-semibold">• Novice Men (Qualifiers)</p>
                  <p className="font-semibold">• Intermediate Women (Qualifiers)</p>
                  <p className="font-semibold">• Novice Women (Semi-Finals)</p>
                  <p className="font-semibold">• Intermediate Men (Qualifiers)</p>
                  <p className="font-semibold">• Novice Men (Semi-Finals)</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">DAY 2 - SEMI-FINALS</CardTitle>
                <p className="text-sm text-muted-foreground">October 4, 2025</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-semibold">• Open Men (Qualifiers)</p>
                  <p className="font-semibold">• Inter Men (Semi-Finals)</p>
                  <p className="font-semibold">• Open Women (Qualifiers)</p>
                  <p className="font-semibold">• Inter Women (Semi-Finals)</p>
                  <p className="font-semibold">• Team Event</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">DAY 3 - FINALS</CardTitle>
                <p className="text-sm text-muted-foreground">October 5, 2025</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-semibold">• Open Men (Semi Finals)</p>
                  <p className="font-semibold">• Open Women (Semi Finals)</p>
                  <p className="font-semibold">• Novice Finals</p>
                  <p className="font-semibold">• Intermediate Finals</p>
                  <p className="font-semibold">• Open Finals</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competition Formats */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4 text-primary">COMPETITION FORMATS</h4>
              <p className="text-muted-foreground">Understanding the different competition styles</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Flash Format */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">FLASH</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• Demo climb available</p>
                  <p>• 4 problems per competitor</p>
                  <p>• Same heat enters together</p>
                  <p>• Can view routes beforehand</p>
                  <p>• 4 min per route + 4 min rest</p>
                </CardContent>
              </Card>

              {/* Rotation Format */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">ROTATION</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• No demo climb</p>
                  <p>• Sent out one by one</p>
                  <p>• All attempt problem 1 first</p>
                  <p>• Cannot view routes beforehand</p>
                  <p>• 4 min per route, back to isolation</p>
                </CardContent>
              </Card>

              {/* IFSC Finals */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">IFSC FINALS</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• No demo climb</p>
                  <p>• Sent out in reverse order</p>
                  <p>• Cannot view routes beforehand</p>
                  <p>• 1 hour isolation</p>
                  <p>• Top 3 each gender awarded</p>
                </CardContent>
              </Card>

              {/* IFSC Concurrent */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">IFSC CONCURRENT</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• No demo climb</p>
                  <p>• Sent out in reverse order</p>
                  <p>• 2-min observation period</p>
                  <p>• 1 hour isolation + observation</p>
                  <p>• Return to isolation before competing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
