export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isSpicy?: boolean;
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      {
        id: 'medu-vada',
        name: 'Medu Vada',
        description: 'Crispy lentil donuts served with coconut chutney and sambar',
        price: 8.99,
        isVeg: true,
      },
      {
        id: 'masala-vada',
        name: 'Masala Vada',
        description: 'Spiced lentil fritters with curry leaves and onions',
        price: 7.99,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 'onion-pakoda',
        name: 'Onion Pakoda',
        description: 'Golden fried onion fritters with chickpea flour',
        price: 6.99,
        isVeg: true,
      },
      {
        id: 'mirchi-bajji',
        name: 'Mirchi Bajji',
        description: 'Stuffed green chilies dipped in gram flour and deep fried',
        price: 7.49,
        isVeg: true,
        isSpicy: true,
      },
    ],
  },
  {
    id: 'dosas',
    name: 'Dosas & Uttapams',
    items: [
      {
        id: 'masala-dosa',
        name: 'Masala Dosa',
        description: 'Crispy crepe filled with spiced potato masala',
        price: 11.99,
        isVeg: true,
        isSpecial: true,
      },
      {
        id: 'mysore-masala-dosa',
        name: 'Mysore Masala Dosa',
        description: 'Spicy red chutney spread dosa with potato filling',
        price: 12.99,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 'rava-masala-dosa',
        name: 'Rava Masala Dosa',
        description: 'Crispy semolina crepe with potato masala',
        price: 12.49,
        isVeg: true,
      },
      {
        id: 'onion-rava-dosa',
        name: 'Onion Rava Dosa',
        description: 'Thin crispy dosa topped with onions and spices',
        price: 11.49,
        isVeg: true,
      },
      {
        id: 'ghee-roast-dosa',
        name: 'Ghee Roast Dosa',
        description: 'Paper thin dosa roasted in pure ghee',
        price: 10.99,
        isVeg: true,
      },
      {
        id: 'onion-uttapam',
        name: 'Onion Uttapam',
        description: 'Thick pancake topped with onions and tomatoes',
        price: 10.99,
        isVeg: true,
      },
    ],
  },
  {
    id: 'main-courses',
    name: 'Main Courses',
    items: [
      {
        id: 'chettinad-chicken',
        name: 'Chettinad Chicken',
        description: 'Spicy chicken curry with roasted spices and coconut',
        price: 16.99,
        isVeg: false,
        isSpicy: true,
        isSpecial: true,
      },
      {
        id: 'hyderabadi-biryani',
        name: 'Hyderabadi Biryani',
        description: 'Aromatic basmati rice layered with marinated chicken',
        price: 17.99,
        isVeg: false,
        isSpecial: true,
      },
      {
        id: 'fish-curry',
        name: 'Kerala Fish Curry',
        description: 'Traditional fish curry in coconut and tamarind gravy',
        price: 18.99,
        isVeg: false,
        isSpicy: true,
      },
      {
        id: 'sambar',
        name: 'Sambar',
        description: 'Lentil stew with vegetables and tamarind',
        price: 8.99,
        isVeg: true,
      },
      {
        id: 'avial',
        name: 'Avial',
        description: 'Mixed vegetables in coconut and yogurt sauce',
        price: 12.99,
        isVeg: true,
      },
      {
        id: 'paneer-butter-masala',
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese in rich tomato and butter gravy',
        price: 14.99,
        isVeg: true,
      },
    ],
  },
  {
    id: 'rice-breads',
    name: 'Rice & Breads',
    items: [
      {
        id: 'steamed-rice',
        name: 'Steamed Rice',
        description: 'Fluffy basmati rice',
        price: 4.99,
        isVeg: true,
      },
      {
        id: 'lemon-rice',
        name: 'Lemon Rice',
        description: 'Tangy rice with lemon, curry leaves, and peanuts',
        price: 9.99,
        isVeg: true,
      },
      {
        id: 'curd-rice',
        name: 'Curd Rice',
        description: 'Cooling yogurt rice with mustard seeds and curry leaves',
        price: 8.99,
        isVeg: true,
      },
      {
        id: 'parotta',
        name: 'Kerala Parotta',
        description: 'Flaky layered flatbread',
        price: 4.99,
        isVeg: true,
      },
      {
        id: 'chapati',
        name: 'Chapati (2 pcs)',
        description: 'Whole wheat Indian flatbread',
        price: 3.99,
        isVeg: true,
      },
      {
        id: 'poori',
        name: 'Poori (3 pcs)',
        description: 'Deep fried puffed bread',
        price: 5.99,
        isVeg: true,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 'payasam',
        name: 'Payasam',
        description: 'Traditional Kerala sweet pudding with vermicelli and nuts',
        price: 6.99,
        isVeg: true,
        isSpecial: true,
      },
      {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings in rose-flavored sugar syrup',
        price: 5.99,
        isVeg: true,
      },
      {
        id: 'mysore-pak',
        name: 'Mysore Pak',
        description: 'Rich gram flour fudge with ghee',
        price: 6.49,
        isVeg: true,
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      {
        id: 'filter-coffee',
        name: 'Filter Coffee',
        description: 'Authentic South Indian filter coffee',
        price: 3.99,
        isVeg: true,
        isSpecial: true,
      },
      {
        id: 'masala-chai',
        name: 'Masala Chai',
        description: 'Spiced Indian tea with aromatic herbs',
        price: 3.49,
        isVeg: true,
      },
      {
        id: 'buttermilk',
        name: 'Spiced Buttermilk',
        description: 'Refreshing yogurt drink with curry leaves',
        price: 3.99,
        isVeg: true,
      },
      {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        description: 'Sweet yogurt drink blended with mango',
        price: 4.99,
        isVeg: true,
      },
    ],
  },
];
