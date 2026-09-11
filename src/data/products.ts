export interface Product {
  id: string
  name: string
  category: string
  sku: string
  price: string
  stock: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
  [key: string]: unknown
}

const NAMES = [
  'Aurora Desk Lamp', 'Nimbus Backpack', 'Quartz Water Bottle', 'Cedar Notebook',
  'Halo Wireless Charger', 'Pico Mechanical Keyboard', 'Drift Office Chair', 'Lumen Monitor Stand',
  'Cobalt Travel Mug', 'Ridge Laptop Sleeve', 'Ember Desk Organizer', 'Slate Whiteboard',
  'Fable Bookend Set', 'Tonic Standing Desk', 'Vale Ergonomic Mouse', 'Marsh Cable Kit',
]
const CATEGORIES = ['Office', 'Electronics', 'Accessories', 'Furniture']

export const PRODUCTS: Product[] = NAMES.map((name, i) => ({
  id: `PRD-${1000 + i}`,
  name,
  category: CATEGORIES[i % CATEGORIES.length],
  sku: `SKU-${(i + 1) * 37}`,
  price: `$${(19 + i * 7.5).toFixed(2)}`,
  stock: (i * 13) % 90,
  status: (i * 13) % 90 === 0 ? 'Out of Stock' : (i * 13) % 90 < 15 ? 'Low Stock' : 'In Stock',
}))
