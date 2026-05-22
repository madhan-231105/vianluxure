/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'aurelia-blazer',
    name: 'Aurelia Soft-Tailored Linen Blazer',
    price: 790,
    category: 'Ready To Wear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop',
    description: 'Double-breasted jacket sculpted from heavy Italian linen. Crafted with relaxed shoulders, partial horn buttons, and unstructured linings for breathable structure.',
    isNew: true,
    isFeatured: true,
    details: [
      '100% fine French flax linen',
      'Real horn buttons with matte finish',
      'Internal smartphone and passport pockets',
      'Hand-finished lapel stitching'
    ]
  },
  {
    id: 'normandy-trousers',
    name: 'Normandy Pleated Linen Trousers',
    price: 390,
    category: 'Ready To Wear',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
    description: 'A classic high-rise silhouette featuring elegant double front pleats, adjustable side tabs, and a refined straight-leg drape.',
    isNew: false,
    isFeatured: true,
    details: [
      '100% pre-washed Belgian linen',
      'Genuine side-tab adjusters in solid brass',
      'French bearer button closure',
      'Unfinished hems for custom tailoring'
    ]
  },
  {
    id: 'solis-resort-shirt',
    name: 'Solis Silk-Linen Resort Shirt',
    price: 280,
    category: 'Made To Order',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
    description: 'An airy knit made of luxurious raw silk and long-staple Irish linen. Designed with an open Camp collar and clean seamless hem.',
    isNew: true,
    isFeatured: true,
    details: [
      '60% Linen, 40% Mulberry Silk blend',
      'Mother-of-pearl buttons',
      'Relaxed, breathable camp collar style',
      'Enzyme-washed for cloud-like softness'
    ]
  },
  {
    id: 'elysian-wrap-dress',
    name: 'Elysian Textured Linen Column Dress',
    price: 680,
    category: 'Ready To Wear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',
    description: 'An architectural column-style dress celebrating the raw raw texture of linen. Features standard side slits, a clean boat neckline, and an invisible back zipper.',
    isNew: false,
    isFeatured: true,
    details: [
      '100% thick-weave heritage linen',
      'Concealed dry-gilded zip back closure',
      'Gently tapered waist belt included',
      'Fully self-lined for zero opacity issues'
    ]
  },
  {
    id: 'sienna-overcoat',
    name: 'Sienna Linen-Wool Belted Duster',
    price: 1150,
    category: 'Custom Bespoke',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    description: 'A luxurious mid-weight duster jacket blending raw linen with organic merino wool, creating an absolute seasonal masterpiece.',
    isNew: true,
    isFeatured: false,
    details: [
      '55% French linen, 45% fine Merino wool',
      'Deep cargo styling with hand-rolled pipings',
      'Detachable luxury self-tie waist belt',
      'Master tailor-embroidered initials option'
    ]
  },
  {
    id: 'valencia-tunic',
    name: 'Valencia Drape Linen Tunic',
    price: 320,
    category: 'Made To Order',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    description: 'A structural, clean tunic featuring a deep V-slit stand collar and high-low sidevents, perfect for seaside lounging.',
    isNew: false,
    isFeatured: false,
    details: [
      '100% premium long-staple linen',
      'Contrast organic cotton internal bias tapes',
      'French flat-felled side seams',
      'Split cuffs with mother-of-pearl stud fast'
    ]
  }
];
