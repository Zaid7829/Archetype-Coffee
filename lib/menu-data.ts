export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "£3.60" },
      { name: "Long Black", price: "£4.00" },
      { name: "Macchiato", price: "£4.20" },
      { name: "Cortado", price: "£4.30" },
      { name: "Flat White", price: "£4.40" },
      { name: "Latte", price: "£4.50" },
      { name: "Cappuccino", price: "£4.50" },
      { name: "Mocha", price: "£5.00" },
      { name: "Babyccino", price: "£1.00" },
      { name: "Extra Shot", price: "£0.50" },
    ],
  },
  {
    category: "Matcha",
    items: [
      { name: "Pure", price: "£4.80", description: "Savoury, rich" },
      { name: "Vanilla", price: "£4.80", description: "Sweet, smooth" },
      { name: "Jasmine", price: "£4.80", description: "Savoury floral" },
      {
        name: "Iced Matcha Latte",
        price: "£6.50",
        description: "Double the matcha, poured over ice and milk. Pure, vanilla, chai, jasmine.",
      },
    ],
  },
  {
    category: "Pourover",
    items: [
      {
        name: "Pourover",
        price: "£6.50",
        description: "We have a small, ever-changing filter coffee menu. Just ask!",
      },
    ],
  },
  {
    category: "Cold Brew",
    items: [
      {
        name: "Cold Brew",
        price: "£4.50",
        description: "Bold, high-caffeine cold brew filtered in ice water overnight",
      },
    ],
  },
  {
    category: "Spiced Cold Brew / Creatine Lemonade",
    items: [
      {
        name: "Lemonade",
        price: "£5.70",
        description: "Freshly squeezed lemon juice, dark muscovado, 10g creatine",
      },
      {
        name: "Raspberry",
        price: "£6.20",
        description: "Raspberry purée, organic ACV, sparkling water, 10g creatine",
      },
      { name: "Make It A Megadose", price: "+£1.50", description: "20g" },
    ],
  },
  {
    category: "Signature",
    items: [
      {
        name: "Chai Matcha Latte",
        price: "£5.00",
        description: "Sweet, peppery. Ginger, cinnamon, cardamom, clove, nutmeg, matcha, muscovado",
      },
      {
        name: "Blueberry Mocha",
        price: "£6.00",
        description: "Blueberry purée, dark chocolate sauce, espresso",
      },
      {
        name: "Raspberry Iced Matcha",
        price: "£7.00",
        description: "Raspberry purée, double strength matcha",
      },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Kombucha", price: "£5.00", description: "Prebiotic kefir" },
      { name: "Lemonade", price: "£4.00" },
      { name: "Hot Chocolate", price: "£4.00" },
      { name: "Loose-Leaf Teas", price: "£4.00" },
      { name: "Ginger Shot", price: "£3.50" },
      { name: "Sparkling Water", price: "£2.50" },
    ],
  },
  {
    category: "Chia Fresca",
    items: [
      {
        name: "Cherry Fresca",
        price: "£6.40",
        description: "Chia seeds, montmorency sour cherry, hojicha cold brew",
      },
      {
        name: "Hojicha Milk Tea",
        price: "£6.40",
        description: "Chia seeds, hojicha cold brew, dark muscovado, any milk",
      },
      {
        name: "Cold Brew Fresca",
        price: "£6.40",
        description: "Chia seeds, coffee cold brew, dark muscovado, any milk",
      },
    ],
  },
  {
    category: "Smoothies",
    items: [
      {
        name: "The Red One",
        price: "£7.50",
        description: "Blended mixed berry, banana, passion fruit, any milk",
      },
      {
        name: "The Green One",
        price: "£7.50",
        description: "Blended broccoli, kale, mango, peach, kiwi, any milk",
      },
    ],
  },
  {
    category: "Signature Bubble Teas",
    items: [
      {
        name: "Okinawa Pearls",
        price: "£7.90",
        description: "Black sugar tapioca, espresso or cold brew, any milk",
      },
      {
        name: "Hojicha Fruit Tea",
        price: "£7.90",
        description: "Black sugar tapioca, hojicha, passion fruit or mango",
      },
    ],
  },
  {
    category: "Cold Pressed Juice",
    items: [{ name: "Kale & Red Grape", price: "£6.00" }],
  },
  {
    category: "Others",
    items: [
      { name: "Latte & Cappuccino" },
      { name: "Americano" },
      { name: "Matcha Lattes" },
      { name: "Drip Filter" },
    ],
  },
];

// Re-export old signatureDrinks for compatibility if needed, 
// though the new system is better. 
// Keeping them for now to avoid breaking other components 
// until I audit them.
export const signatureDrinks = [
  {
    id: 'sd-1',
    name: 'Archetype Espresso',
    description: 'Our house blend with notes of dark chocolate, toasted hazelnut, and a hint of stone fruit.',
    price: '£3.80',
    color: '#3d2b1f',
  },
  {
    id: 'sd-2',
    name: 'Matcha Velvet Latte',
    description: 'Ceremonial grade matcha whisked with oat milk and a touch of vanilla bean.',
    price: '£4.50',
    color: '#6b8e23',
  },
  {
    id: 'sd-3',
    name: 'Raspberry Rose Pour Over',
    description: 'Single origin Ethiopian beans brewed with subtle raspberry and rose petal infusions.',
    price: '£5.20',
    color: '#c21e56',
  },
  {
    id: 'sd-4',
    name: 'Copper Gold Flat White',
    description: 'Silky micro-foam over intense espresso, finished with a dusting of edible gold copper flakes.',
    price: '£4.20',
    color: '#b87333',
  },
];

export const reviews = [
  {
    id: 1,
    author: 'Elena Rossi',
    rating: 5,
    comment: 'Best flat white I’ve had so far in London.',
    date: '2 days ago',
    tags: ['Best flat white', 'Specialty coffee']
  },
  {
    id: 2,
    author: 'Marcus Thorne',
    rating: 5,
    comment: 'A cute little coffee spot with a friendly owner and great latte art.',
    date: '1 week ago',
    tags: ['Friendly owner', 'Latte art']
  },
  {
    id: 3,
    author: 'Sophia Chen',
    rating: 5,
    comment: 'Small, cosy and full of character — perfect for a quiet coffee.',
    date: '2 weeks ago',
    tags: ['Cosy intimate space', 'Small but atmospheric']
  },
  {
    id: 4,
    author: 'David Miller',
    rating: 5,
    comment: 'Specialty coffee crafted with real care.',
    date: '3 weeks ago',
    tags: ['Specialty coffee', 'Friendly barista']
  },
  {
    id: 5,
    author: 'Amara Okafor',
    rating: 5,
    comment: 'Atmospheric, minimal and warm, tucked away near Oxford Circus.',
    date: '1 month ago',
    tags: ['Atmospheric', 'Fitzrovia', 'Cosy spot']
  },
];
