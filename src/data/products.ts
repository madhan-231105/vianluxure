/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'aurelia-blazer',
    name: 'Best Linen Shirts for Men Pure Soft Linen in Red',
    price: 790,
    category: 'Ready To Wear',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    secondaryImage:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop',
    description:
      "The best linen shirt for men is largely impacted by the material it is made of. When the linen touches your skin, it's a cool.....",
    isNew: true,
    isFeatured: true,
    details: [
      'Made from 100% pure linen material.',
      'Light, soft, and gentle on the skin.',
      'Strong fabric that lasts a long time.',
      'Color stays fresh without fading quickly.',
      'Becomes softer every time you wash it.',
    ],
  },

  {
    id: 'normandy-trousers',
    name: 'Normandy Pleated Linen Trousers',
    price: 390,
    category: 'Ready To Wear',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop',
    secondaryImage:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
    description:
      "The best linen shirt for men is largely impacted by the material it is made of. When the linen touches your skin, it's a cool.....",
    isNew: false,
    isFeatured: true,
    details: [
      'Made from 100% pure linen material.',
      'Light, soft, and gentle on the skin.',
      'Strong fabric that lasts a long time.',
      'Color stays fresh without fading quickly.',
      'Becomes softer every time you wash it.',
    ],
  },
];