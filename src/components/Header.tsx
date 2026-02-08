import { Coffee, Phone, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Coffee className="h-10 w-10 text-amber-300" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Spice Garden</h1>
              <p className="text-amber-200 text-sm">Authentic South Indian Cuisine</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Spice Street</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
