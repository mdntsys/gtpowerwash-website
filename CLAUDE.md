# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GT Powerwash — a residential and commercial pressure washing company website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (imported via `@import "tailwindcss"` in globals.css)
- **Font**: Inter (Google Fonts via `next/font/google`)
- **Package manager**: npm

## Build Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with Header + Footer
    page.tsx            # Home page (all sections assembled here)
    globals.css         # Tailwind import + CSS variables
  components/
    layout/
      Header.tsx        # Sticky nav with mobile hamburger menu
      Footer.tsx        # Footer with links and contact info
    sections/
      Hero.tsx          # Full-width hero with CTA buttons
      Services.tsx      # Service cards grid
      WhyUs.tsx         # Stats + reasons to choose us
      Testimonials.tsx  # Customer review cards
      Contact.tsx       # Quote request form (needs backend wiring)
    ui/                 # Reusable UI primitives (Button, etc.) — add here
  lib/                  # Utility functions
  types/                # Shared TypeScript types
```

## Key Notes

- All page sections are in `src/components/sections/` and assembled in `src/app/page.tsx`
- The contact form in `Contact.tsx` is wired to a mock delay — connect it to a real backend (Resend, Formspree, or a Next.js API route at `src/app/api/contact/route.ts`)
- Phone number and email in `Footer.tsx` are placeholders — update with real contact info
- Stats in `WhyUs.tsx` are placeholders — update with real numbers
- Testimonials in `Testimonials.tsx` are placeholders — replace with real reviews
