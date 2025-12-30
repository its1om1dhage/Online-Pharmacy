// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// App Constants
export const APP_NAME = 'MediEase';
export const APP_TAGLINE = 'Your Health, Our Priority';

// Colors
export const COLORS = {
  PRIMARY_RED: '#DD0000',
  GRADIENT: 'linear-gradient(90deg, #FF7B7B 0%, #FF3333 25%, #DD0000 50%, #AA0000 75%, #660000 100%)',
};

// Navigation Links
export const NAV_LINKS = {
  HOME: '/',
  CART: '/cart',
  LOGIN: '/login',
  ABOUT: '/about',
  PRODUCTS: '/products',
  CONTACT: '/contact',
};

// Delivery Locations
export const LOCATIONS = [
  { value: '', label: 'Location' },
  { value: 'ny', label: 'New York' },
  { value: 'la', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'phoenix', label: 'Phoenix' },
];
