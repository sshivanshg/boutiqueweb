
// Fix: Import React to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface CollectionItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  occasion: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}