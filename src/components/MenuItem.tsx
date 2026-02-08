import { Flame, Star, Leaf } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-bl-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-300"></div>

      <div className="relative">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 flex-1">{item.name}</h3>
          <div className="flex items-center space-x-2 ml-3">
            {item.isVeg && (
              <div className="flex items-center justify-center w-6 h-6 border-2 border-green-600 rounded">
                <Leaf className="h-3 w-3 text-green-600 fill-green-600" />
              </div>
            )}
            {!item.isVeg && (
              <div className="flex items-center justify-center w-6 h-6 border-2 border-red-600 rounded">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-orange-600">${item.price.toFixed(2)}</span>
            {item.isSpicy && (
              <div className="flex items-center space-x-1 text-red-500">
                <Flame className="h-4 w-4 fill-red-500" />
                <span className="text-xs font-medium">Spicy</span>
              </div>
            )}
          </div>

          {item.isSpecial && (
            <div className="flex items-center space-x-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-xs font-semibold">Special</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
