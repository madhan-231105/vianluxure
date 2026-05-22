/**
 * VL Global — Products API Route Handler
 * GET  /api/products           → returns all products
 * GET  /api/products?category= → filter by category
 * GET  /api/products?featured= → filter featured products
 * POST /api/products           → create a new product (mock)
 */

/** @type {Array<{id:number,name:string,price:string,image:string,category:string,featured:boolean}>} */
const PRODUCTS = [
  {
    id: 1,
    name: 'Pure Linen Shirt — Ivory',
    price: '₹4,299',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    category: 'Ready-to-Wear',
    featured: true,
  },
  {
    id: 2,
    name: 'Cotton Blend Classic',
    price: '₹3,899',
    image:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    category: 'Ready-to-Wear',
    featured: true,
  },
  {
    id: 3,
    name: 'Premium Linen Fabric Roll',
    price: '₹2,499',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Fabric',
    featured: false,
  },
  {
    id: 4,
    name: 'Customised Linen — Navy',
    price: '₹5,999',
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    category: 'Made-to-Wear',
    featured: true,
  },
  {
    id: 5,
    name: 'Bespoke Tailored Linen',
    price: '₹8,999',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    category: 'Custom Bespoke',
    featured: true,
  },
  {
    id: 6,
    name: 'Linen Cotton Blend',
    price: '₹4,599',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    category: 'Fabric',
    featured: false,
  },
];

/* ── GET handler ─────────────────────────────────────────────────────────── */
export function GET(request) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get('category');
  const featured  = searchParams.get('featured');

  let data = [...PRODUCTS];

  if (category) {
    data = data.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === 'true') {
    data = data.filter((p) => p.featured);
  }

  return Response.json({
    success: true,
    data,
    count: data.length,
    timestamp: new Date().toISOString(),
  });
}

/* ── POST handler ────────────────────────────────────────────────────────── */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price, image, category } = body;

    // Validate required fields
    if (!name || !price || !category) {
      return Response.json(
        { success: false, error: 'name, price and category are required' },
        { status: 400 }
      );
    }

    const newProduct = {
      id: PRODUCTS.length + 1,
      name,
      price,
      image: image || 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
      category,
      featured: false,
    };

    // In a real app you would persist to a DB here
    PRODUCTS.push(newProduct);

    return Response.json(
      { success: true, data: newProduct },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}
