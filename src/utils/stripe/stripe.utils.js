import { loadStripe } from "@stripe/stripe-js";
const REACT_APP_STRIPE_PUBLISHABLE_KEY = "pk_test_51K2rvHSDmW7eja9qmmOAUcfptINukKYo4lw8LBCItJVCQYJVQN577et9onXgWBE72UyvFHsd9Pe7WF9gIvLmGCGq00aD8cnaow"
export const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY)