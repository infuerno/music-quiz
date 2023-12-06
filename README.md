# Build & Deploy: Full Stack AI Quiz Platform with NextJS 13, TailwindCSS, OpenAI, Next Auth

https://www.youtube.com/watch?v=vIyU4nInlt0

1. Create nextjs project: `npx create-next-app@latest --ts`
2. Run: `npm run dev`
3. Create github repo and push initial code
4. Remove globals.css, install shadcn (see site for installation instructions)
5. Create new planet scale MySQL database
6. Setup prisma
   - `npm i -D prisma` - push schema changes to the database
   - `npm i @prisma/client` - interacting with the database in code
   - `npx prisma init --datasource-provider mysql`
   - create `lib/db.ts` to initialise singleton prisma client for development (due to hot reloading)
   - add example schema to prisma/schema.prisma
   - `npx prisma db push`
7. Setup auth
   - `npm i next-auth`
   - create `lib/nextauth.ts` to persist signed in users to prisma
   - `npm i @next-auth/prisma-adapter`
   - copy schema from https://authjs.dev/reference/adapter/prisma, add index to Account and Sesssion and `push`
   - create new google project
   - configure consent screen, add email addresses and publish to PRODUCTION
   - create credentials > OAuth > Web application > fill in URLs
   - add client id and secret to .env
   - create `api/auth/[...nextauth]/route.ts` and add basic GET and POST handlers
   - create `components/Providers.tsx` to wrap `SessionProvider`
8. Create server side component for the nav bar
   - add helper function to `nextauth.ts` to return session
   - create server side component for NavBar by making async
   - get (await) the session and display user info if signed in
   - add NavBar to layout.tsx
   - create `SignInButton` component and call `signIn("google")` when clicked, make client side using "use client" at top of file
   - add the SignInButton to the NavBar
   - everything should work!

TLD launch schedule: https://tld-list.com/launch-schedule

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
