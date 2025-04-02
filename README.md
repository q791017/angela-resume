[![image](https://github.com/q791017/angela-resume/blob/develop/public/images/img-logo-yh.png)](https://angela-resume.vercel.app)

# Angela's Resume

This is a [Next.js](https://nextjs.org) project designed to showcase my personal resume and portfolio.

[![Static Badge](https://img.shields.io/badge/Next.js-15.1.3-blue)](https://nextjs.org)
[![Static Badge](https://img.shields.io/badge/i18next-^3.26.3-blue)](https://next-intl-docs.vercel.app)
[![Static Badge](https://img.shields.io/badge/TypeScript-^5-blue)](https://www.typescriptlang.org)
[![Static Badge](https://img.shields.io/badge/Tailwindcss-^3.4.1-blue)](https://tailwindcss.com)

## Features

- Multilingual support (English and Traditional Chinese) with `next-intl`.
- Fully responsive design using Tailwind CSS.
- Optimized performance with Next.js and TypeScript.
- Easy customization and scalability.

## Getting Started

First, clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-github/angela-resume.git

# Navigate to the project folder
cd angela-resume

# Install dependencies
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main structure of the project is as follows:

```plaintext
.
├── public/                       # Static assets such as images
├── messages/
│   ├── en-US.json                # Translation messages in en-US
│   └── zh-TW.json                # Translation messages in zh-TW
│
├── src/
│   └── app/
│   │   └── [locale]
│   │       ├── layout.tsx        # Application layout component
│   │       └── page.tsx          # Main entry point for the application
│   ├── i18n/                     # Localization files for i18n
│   ├── components/               # Reusable React components
│   └── middleware.ts             # Middleware for i18n routing
│
├── next.config.mjs               # Configuration of i18n
└── tailwind.config.ts            # Configuration of tailwind
```

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com). For more information, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
