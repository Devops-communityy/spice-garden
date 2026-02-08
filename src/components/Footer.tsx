import { Coffee, Clock, Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <h3 className="text-2xl font-bold">Spice Garden</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing the authentic flavors of South India to your table with love and
              tradition.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Opening Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Monday - Friday: 11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Saturday - Sunday: 10:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@spicegarden.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Spice Street, Food City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>for food lovers</span>
          </p>
          <p className="mt-2 text-sm">© 2024 Spice Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
