import React, { ReactNode } from 'react';

export interface Plot {
  id: number;
  title: string;
  location: string;
  size: string;
  price: string;
  image: string;
  tag: string;
  features: string[];
  reraNumber: string;
  amenities: string[];
  floorPlanImage: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
}
