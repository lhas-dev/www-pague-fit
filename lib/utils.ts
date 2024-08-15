import stripePackage from 'stripe'
import axios from 'axios'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new stripePackage(stripeSecretKey, {
  apiVersion: '2023-08-16'
});

export const fetcher = (url: string) => axios.get(url).then(res => res.data)
