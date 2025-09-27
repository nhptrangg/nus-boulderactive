import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Mail, Instagram } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">LOCATION</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="w-full">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=City%20Square%20Mall+(NUS%20BoulderActive)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">CITY SQUARE MALL</h3>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address:</h4>
                    <p className="text-muted-foreground">
                      City Square Mall, Green Square
                      <br />
                      180 Kitchener Rd
                      <br />
                      Singapore 208539
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <Navigation className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Getting There:</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-muted-foreground">
                        Take MRT to Farrer Park Station (North-East Line)
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">Bus stops:</span>
                        <br />
                        Before Tai Hoe Hotel, 07231 - 21, 125, 130
                        <br />
                        Outside Sri Srinivasa Perumal Temple, 07211 - 21, 23, 64, 65, 66, 67, 125,
                        130, 139, 141, 147, 857, NR6
                      </p>
                      <p className="text-muted-foreground">Parking available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <Instagram className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Instagram</p>
                  <p className="text-xs text-muted-foreground">nusboulderactive</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">boulderactivenus@gmail.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
