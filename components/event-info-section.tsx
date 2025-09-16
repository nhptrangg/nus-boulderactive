import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Camera, Trophy, Info, ExternalLink } from "lucide-react"
import Link from "next/link"

export function EventInfoSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">EVENT INFORMATION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 border-2 border-primary bg-primary/5">
            <CardContent className="text-center pt-6">
              <ExternalLink className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-primary">ClimbBuddy Live Scores</h3>
              <p className="text-muted-foreground mb-6">View live scores and rankings during the competition</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="https://climbbuddy-5b7f6.web.app/" target="_blank" rel="noopener noreferrer">
                  View Live Scores
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-secondary bg-secondary/5">
            <CardContent className="text-center pt-6">
              <Info className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-secondary">Competition Details</h3>
              <p className="text-muted-foreground mb-6">View detailed rules, categories, and competition information</p>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <Link href="#" rel="noopener noreferrer">
                  View Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
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
                <p className="text-muted-foreground mb-4">City Square Mall</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Join us for Singapore's premier university climbing competition featuring multiple categories and
                  formats across three exciting days.
                </p>
                <Button className="bg-primary hover:bg-primary/90">HOW TO GET TO CITY SQUARE MALL</Button>
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
                <Link target="_blank" href="https://linktr.ee/boulderactive2022" rel="noopener noreferrer">
                  SEE PREVIOUS BOULDERACTIVE PHOTOS
                </Link>
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
            <Card className="p-6 border-l-4 border-l-primary">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">DAY 1 - QUALIFIERS</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 3, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Novice Qualifiers</span>
                    <span className="text-primary font-bold">09:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Inter Qualifiers</span>
                    <span className="text-primary font-bold">15:40</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Novice Semifinals</span>
                    <span className="text-accent font-bold">16:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="p-6 border-l-4 border-l-accent">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-accent">DAY 2 - SEMI-FINALS</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 4, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Open Qualifiers</span>
                    <span className="text-primary font-bold">10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Inter Semifinals</span>
                    <span className="text-accent font-bold">11:35</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <span className="font-semibold text-sm">Team Event</span>
                    <span className="text-secondary font-bold">15:50</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="p-6 border-l-4 border-l-secondary">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-secondary">DAY 3 - FINALS</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 5, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Open Semifinals</span>
                    <span className="text-accent font-bold">10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <span className="font-semibold text-sm">Novice Finals</span>
                    <span className="text-secondary font-bold">14:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <span className="font-semibold text-sm">Inter Finals</span>
                    <span className="text-secondary font-bold">17:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg border-2 border-secondary">
                    <span className="font-bold text-sm">Open Finals</span>
                    <span className="text-secondary font-bold text-lg">19:00</span>
                  </div>
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
