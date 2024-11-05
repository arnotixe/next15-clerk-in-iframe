# Next.js + Clerk in-iframe test

- Based on [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- Added clerk as per https://clerk.com/docs/quickstarts/nextjs
  - need stuff in .env
- Protected /private(.*) https://clerk.com/docs/references/nextjs/clerk-middleware

## Problem was
- eternal loop with a Clerk-authenticated app running in an iframe embedded on a different subdomain but same TLD
- problem app was using the old middleware (protect-by-default mw)

# Status
- works in staging (protects /private, redirects to sign-in on unlogged nav)
- doesn't in production, until we have a domain at least