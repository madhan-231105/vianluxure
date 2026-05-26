/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  secondaryImage?: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  details?: string[];
  slug?: string;
  tag?: string;
  specs?: string[];
  images?: string[];
  customizable?: boolean;
  bespoke?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}
