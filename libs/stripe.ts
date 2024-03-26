import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? '',
  {
    //apiVersion: '2024-01-05',
    appInfo: {
      name: 'Spotify App Clone',
      version: '0.1.0'
    }
  }
);