import { Product } from '../types';

export const products: Product[] = [
  // --- PURE FABRICS ---
  {
    id: 'f1',
    slug: 'normandy-raw-flax',
    name: 'Normandy Raw Flax',
    category: 'fabrics',
    price: 85,
    tag: 'Sustainable European Flax',
    image: '/images/fabrics/fabric_1.webp',
    secondaryImage: '/images/Category1.webp',
    images: [
      '/images/fabrics/fabric_1.webp',
      '/images/Category1.webp',
      '/images/image1.webp',
      '/images/image2.webp'
    ],
    description: 'European premium 70 lea pure linen fabric designed for breathable everyday wear and natural organic texture.',
    isNew: true,
    isFeatured: true,
    specs: ['Pure Organic Flax', 'Weight: 390g/m²', 'GSM: 140', 'Width: 58 inches'],
    details: [
      'Sourced directly from the Normandy flax fields of northern France.',
      'Extremely breathable and moisture-wicking weave for summer comfort.',
      'Naturally hypoallergenic and anti-bacterial organic threads.',
      'Highly durable construction that softens gracefully with each wash.',
      'Crafted with 100% biodegradable zero-waste flax fibers.'
    ]
  },
  {
    id: 'f2',
    slug: 'aurelia-crimson-blend',
    name: 'Aurelia Crimson Blend',
    category: 'fabrics',
    price: 95,
    tag: 'Premium Cotton-Linen',
    image: '/images/fabrics/fabric_2.webp',
    secondaryImage: '/images/Category2.webp',
    images: [
      '/images/fabrics/fabric_2.webp',
      '/images/Category2.webp',
      '/images/image3.webp',
      '/images/image4.webp'
    ],
    description: 'Balanced linen and cotton fibers created for soft texture, comfort, and everyday durable wear.',
    isNew: false,
    isFeatured: true,
    specs: ['55% Linen, 45% Cotton', 'Weight: 280g/m²', 'GSM: 120', 'Pre-shrunk Double Enzyme'],
    details: [
      'Perfect blend of premium cotton softness and linen breathability.',
      'Double-enzyme pre-shrunk for premium tactile stability.',
      'Rich crimson coloration obtained via organic luxury dyes.',
      'Perfect choice for regular wash-and-wear shirts.',
      'Optimal drape with 120 GSM ideal for casual tailoring.'
    ]
  },
  {
    id: 'f3',
    slug: 'indigo-scallop-weave',
    name: 'Indigo Scallop Weave',
    category: 'fabrics',
    price: 110,
    tag: 'Special Edition Weave',
    image: '/images/fabrics/fabric_3.webp',
    secondaryImage: '/images/vian_fabric_showcase_1779434571577.webp',
    images: [
      '/images/fabrics/fabric_3.webp',
      '/images/vian_fabric_showcase_1779434571577.webp',
      '/images/image2.webp',
      '/images/image4.webp'
    ],
    description: 'Cotton-linen fabric with scallop-pattern detailing designed for clean, refined, and custom everyday shirting.',
    isNew: true,
    isFeatured: false,
    specs: ['Special Jacquard Weave', 'Scallop Detailing', 'GSM: 130', 'Imported Long-staple'],
    details: [
      'Features an elegant micro-scallop pattern woven on high-end Jacquard looms.',
      'Imported long-staple cotton-linen threads for ultimate luxury touch.',
      'Designed specifically for premium semi-formal and custom shirting.',
      'Subtle indigo hues that present gorgeous light reflections.',
      'Excellent breathability with high tensile fiber durability.'
    ]
  },
  {
    id: 'f4',
    slug: 'imperial-giza-cotton',
    name: 'Imperial Giza Cotton',
    category: 'fabrics',
    price: 125,
    tag: 'Rare Egyptian Cotton',
    image: '/images/fabrics/fabric_4.webp',
    secondaryImage: '/images/banner4.webp',
    images: [
      '/images/fabrics/fabric_4.webp',
      '/images/banner4.webp',
      '/images/image1.webp',
      '/images/image3.webp'
    ],
    description: 'Rare double-twisted Giza Egyptian cotton weave, designed for an incredibly soft, smooth, and breathable sartorial handle.',
    isNew: true,
    isFeatured: true,
    specs: ['100% Giza Cotton', 'Weight: 240g/m²', 'GSM: 110', 'High Thread Count'],
    details: [
      'Woven from the finest extra-long staple Egyptian Giza cotton.',
      'High thread count weave for a silky smooth finish and pristine luster.',
      'Extremely breathable and naturally hypoallergenic fabric body.',
      'Premium lock-stitch durability designed for custom shirting.',
      'Eco-friendly cultivation using Nile-delta sustainable agriculture.'
    ]
  },

  // --- READY-TO-WEAR ---
  {
    id: 'rtw1',
    slug: 'the-solis-everyday-shirt',
    name: 'The Solis Everyday Shirt',
    category: 'ready-to-wear',
    price: 180,
    tag: 'Atelier Classic Cut',
    image: '/images/product1.webp',
    secondaryImage: '/images/product2.webp',
    images: [
      '/images/product1.webp',
      '/images/product2.webp',
      '/images/image1.webp',
      '/images/image3.webp'
    ],
    description: 'Choose your preferred fabric, size, and fit from shirts designed with clean tailoring and balanced everyday styling.',
    isNew: true,
    isFeatured: true,
    specs: ['100% Normandy Linen', 'Premium Spread Collar', 'Rounded Single Cuffs', 'Standard Sizing S-XXL'],
    details: [
      'Tailored from 100% premium French linen flax.',
      'Atelier spread collar designed to wear beautifully with or without a tie.',
      'Features elegant single-needle tailoring with 18 stitches per inch.',
      'Mother of Pearl buttons fastened with premium lock-stitch technique.',
      'Clean French front placket for a modern, minimalistic menswear look.'
    ]
  },
  {
    id: 'rtw2',
    slug: 'normandy-classic-shirt',
    name: 'Normandy Classic Shirt',
    category: 'ready-to-wear',
    price: 195,
    tag: 'Signature Off-white',
    image: '/images/banner1.webp',
    secondaryImage: '/images/product1.webp',
    images: [
      '/images/banner1.webp',
      '/images/product1.webp',
      '/images/image2.webp',
      '/images/image4.webp'
    ],
    description: 'Slightly relaxed, pre-washed everyday linen shirt with drop-shoulder styling and structured chest stitching.',
    isNew: false,
    isFeatured: true,
    specs: ['Sustainable French Flax', 'French Placket Front', '18 Stitches Per Inch', 'Horn Buttons'],
    details: [
      'Tailored around a comfortable, relaxed fit with drop-shoulder tailoring.',
      'Pre-washed with soft organic enzymes for a luxurious broken-in feel.',
      'Classic rounded cuffs with double-button adjustments.',
      'Hand-stitched horn buttons that add masculine, organic highlights.',
      'Subtle rear box pleat to optimize ease of movement.'
    ]
  },
  {
    id: 'rtw3',
    slug: 'crimson-drop-shoulder',
    name: 'Crimson Drop-Shoulder',
    category: 'ready-to-wear',
    price: 210,
    tag: 'Atelier Favorite Style',
    image: '/images/product2.webp',
    secondaryImage: '/images/banner3.webp',
    images: [
      '/images/product2.webp',
      '/images/banner3.webp',
      '/images/image3.webp',
      '/images/image1.webp'
    ],
    description: 'Vibrant dyed, breathable organic linen shirting with symmetric structured seams and double-rolled hems.',
    isNew: true,
    isFeatured: false,
    specs: ['Crimson Red Flax Weave', 'Hidden Button-down Collar', 'Soft Enzyme Washed', 'German Fused Cuffs'],
    details: [
      'Dynamic deep crimson tone dyed at a high-end ethical yarn atelier.',
      'Hidden button-down collar that stays structured and neat automatically.',
      'Curved hemline perfect for both tucked and untucked styling.',
      'Interlined with high-end German collar fusing for shape preservation.',
      'Double-rolled side seams that prevent fraying and increase longevity.'
    ]
  },

  // --- MADE-TO-WEAR ---
  {
    id: 'mtw1',
    slug: 'made-to-wear-customizer',
    name: 'Made-To-Wear Customizer',
    category: 'made-to-wear',
    price: 280,
    tag: 'Personalized Details Pathway',
    image: '/images/banner2.webp',
    secondaryImage: '/images/banner1.webp',
    images: [
      '/images/banner2.webp',
      '/images/banner1.webp',
      '/images/image2.webp',
      '/images/image3.webp'
    ],
    description: 'Personalize collars, cuffs, buttons, and sleeves with your favorite styling choices on standard premium sizing slots.',
    isNew: true,
    isFeatured: true,
    customizable: true,
    specs: ['Collar, Button & Cuff Toggles', 'Double Needle Stitching', 'German Interlinings', 'Lead Time: 2-3 Weeks'],
    details: [
      'Choose your core fabric and toggle structural elements instantly.',
      'Customized sleeve cuffs, collar spreads, and pocket shapes.',
      'Individually tailored in our boutique studio on standard sizing scales.',
      'Delivered in an elegant VL presentation folder in 14-21 days.',
      'Features high-end stitching and hand-finished buttonhole construction.'
    ]
  },
  {
    id: 'mtw2',
    slug: 'aurelia-tailored-linen',
    name: 'Aurelia Tailored Linen',
    category: 'made-to-wear',
    price: 295,
    tag: 'Atelier Semi-Custom Spec',
    image: '/images/banner3.webp',
    secondaryImage: '/images/product2.webp',
    images: [
      '/images/banner3.webp',
      '/images/product2.webp',
      '/images/image1.webp',
      '/images/image4.webp'
    ],
    description: 'Linen-cotton blend shirting customizable across collar styles and pockets, offering a balance of ready-made convenience.',
    isNew: false,
    isFeatured: false,
    customizable: true,
    specs: ['Linen Cotton Blend', 'Monogram Options', 'Custom Pocket Accents', 'Lead Time: 2-3 Weeks'],
    details: [
      'Crafted from Aurelia Crimson premium linen-cotton blend.',
      'Allows hand-stitched monogram accents on cuffs or pocket.',
      'Configurable with mandarin or classic spread collar outlines.',
      'Premium lock-stitched seams with authentic silk-cotton threads.',
      'Combines bespoke personalization options with standard sizing speeds.'
    ]
  },

  // --- BESPOKE ---
  {
    id: 'bespoke1',
    slug: 'savile-row-bespoke',
    name: 'Savile Row Bespoke',
    category: 'bespoke',
    price: 450,
    tag: 'Individual Custom Blueprint',
    image: '/images/vian_tailoring_bespoke_1779434589378.webp',
    secondaryImage: '/images/banner4.webp',
    images: [
      '/images/vian_tailoring_bespoke_1779434589378.webp',
      '/images/banner4.webp',
      '/images/image2.webp',
      '/images/image3.webp'
    ],
    description: 'Drafted strictly around your neck, chest, waist, and sleeve measurements. Authentic flat felled seams for ultimate fit.',
    isNew: true,
    isFeatured: true,
    bespoke: true,
    specs: ['24-Point Posture Blueprint', 'Double-Needle Hand Felling', 'Imported Threading', 'Lead Time: 4-6 Weeks'],
    details: [
      'Individually drafted starting from a blank paper pattern.',
      '24 posture metrics mapped to accommodate shoulder slopes and back lengths.',
      'Assembled by hand with double-needle hand felling by master tailors.',
      'Allows complete uploaded measurements and bespoke stitching notes.',
      'Comes with a complimentary fit guarantee and lifetime adjustments.'
    ]
  },
  {
    id: 'bespoke2',
    slug: 'heirloom-giza-cotton',
    name: 'Heirloom Giza Cotton',
    category: 'bespoke',
    price: 490,
    tag: 'Sartorial Masterpiece',
    image: '/images/banner4.webp',
    secondaryImage: '/images/vian_tailoring_bespoke_1779434589378.webp',
    images: [
      '/images/banner4.webp',
      '/images/vian_tailoring_bespoke_1779434589378.webp',
      '/images/image1.webp',
      '/images/image4.webp'
    ],
    description: '100% premium double-twisted Giza cotton crafted around body measurements, featuring authentic custom monograms.',
    isNew: false,
    isFeatured: true,
    bespoke: true,
    specs: ['Giza Cotton Weave', 'German Collar Fusing', 'Genuine Mother of Pearl Buttons', 'Lead Time: 4-6 Weeks'],
    details: [
      'Tailored exclusively from rare, double-twisted Egyptian Giza cotton.',
      'Includes bespoke collar structure customization and shoulder adjustments.',
      '100% hand-sewn buttonholes and genuine Mother of Pearl inserts.',
      'Tailored with 22 stitches per inch for seamless joints and luxurious shine.',
      'Premium custom tailoring studio experience with dedicated support.'
    ]
  }
];