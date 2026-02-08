import { MenuCategory } from '../data/menuData';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

export function MenuSection({ category, index }: MenuSectionProps) {
  const bgColors = [
    'bg-orange-50',
    'bg-amber-50',
    'bg-yellow-50',
    'bg-rose-50',
    'bg-orange-50',
    'bg-amber-50',
  ];

  return (
    <section className={`py-16 ${bgColors[index % bgColors.length]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
            {category.name}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
