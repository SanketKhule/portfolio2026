# Sanket Khule Portfolio 2026

Premium Full Stack Developer portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build Check

Run this before deploying:

```bash
npm run lint
npm run build
```

## Vercel Deployment

This project is ready for Vercel.

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: keep default / empty
- Root Directory: this project folder, `portfolio2026`
- Node.js Version: `24.x`

## Deploy From GitHub

1. Push this project to GitHub.
2. Open `https://vercel.com/new`.
3. Import the GitHub repository.
4. Select the project root folder if Vercel asks for Root Directory.
5. Click Deploy.

## Deploy From Terminal

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Notes

- No environment variables are required for this portfolio.
- Images and videos are inside `public/`, so Vercel will deploy them with the site.
- The project includes `vercel.json` for consistent Vercel build settings.
