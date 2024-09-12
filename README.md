# Build & Deploy: Full Stack AI Quiz Platform with NextJS 13, TailwindCSS, OpenAI, Next Auth

https://www.youtube.com/watch?v=vIyU4nInlt0

0. Create directory
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
   - copy schema from https://authjs.dev/reference/adapter/prisma, add index to Account and Session and `push`
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
