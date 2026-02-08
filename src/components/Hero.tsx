import { Clock, Award, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZiOTIzYyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-orange-600">Spice Garden</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience the authentic flavors of South India with our traditional recipes
            passed down through generations
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-3">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Fresh Daily</h3>
              <p className="text-gray-600 text-sm">Made to order</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-3">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Authentic Taste</h3>
              <p className="text-gray-600 text-sm">Traditional recipes</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-3">
                <Leaf className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Natural Spices</h3>
              <p className="text-gray-600 text-sm">No artificial flavors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
