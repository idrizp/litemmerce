# Litemmerce:

[The project is deployed on Vercel.](https://litemmerce.vercel.app/)

Litemmerce is a small e-commerce platform built using Supabase and Stripe.
It uses supabase storage alongside the supabase database, and stripe to manage payments.

The environment variables are as follows:

```
NEXT_PUBLIC_SUPABASE_URL=<public supabase url>
SUPABASE_DATABASE_PASSWORD=<the supabase database password>
SUPABASE_SERVICE_ROLE_KEY=<supabase service role key>
SUPABASE_JWT_SECRET_KEY=<supabase jwt secret>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase anon key>
STRIPE_SECRET_KEY=<the stripe secret key>
```
