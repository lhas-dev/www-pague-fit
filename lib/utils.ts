import stripePackage from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new stripePackage(stripeSecretKey, {
  apiVersion: '2023-08-16'
});
