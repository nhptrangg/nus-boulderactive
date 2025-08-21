import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">LOCATION</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/singapore-nus-map.png')`,
              }}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">NUS SPORTS & RECREATION CENTRE</h3>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address:</h4>
                    <p className="text-muted-foreground">
                      National University of Singapore
                      <br />
                      Sports & Recreation Centre
                      <br />
                      21 Lower Kent Ridge Rd
                      <br />
                      Singapore 119077
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <Navigation className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Getting There:</h4>
                    <p className="text-muted-foreground">
                      Take MRT to Kent Ridge Station (Circle Line)
                      <br />
                      Bus services: 95, 96, 151, 200
                      <br />
                      Parking available on campus
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Contact</p>
                  <p className="text-xs text-muted-foreground">+65 6516 2345</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">info@nusboulderactive.sg</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
