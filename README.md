# Muhammad Asad — Portfolio

A product-focused portfolio for Muhammad Asad, built with Next.js. The site presents selected
work through engineering decisions and outcomes rather than a technology inventory.

## Local development

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` before testing message delivery.

## Contact form

The form submits to `POST /api/contact`. Delivery uses the Resend HTTP API and requires:

- `RESEND_API_KEY`: a Resend API key
- `CONTACT_TO_EMAIL`: the inbox that should receive portfolio enquiries
- `CONTACT_FROM_EMAIL`: a sender on a domain verified by Resend

Add the same variables to the Vercel project before deploying. The endpoint validates field
lengths, rejects malformed submissions, includes a bot honeypot, and sets the visitor's address
as the reply-to address.

## Production

```bash
npm run build
npm run start
```

Vercel is configured to detect and deploy the project as a Next.js application, including the
contact API route.
