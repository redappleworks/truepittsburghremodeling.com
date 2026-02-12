# Aspen Remodeling Website

A production-ready marketing website for Aspen Remodeling, a kitchen & bathroom remodeling contractor in Pittsburgh, PA.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Required: Resend API Key for contact form emails
RESEND_API_KEY=your_resend_api_key_here

# Optional: Override default contact email
CONTACT_TO_EMAIL=contact@redappleworks.com

# Optional: Production site URL
NEXT_PUBLIC_SITE_URL=https://aspenremodeling.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/src
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API route
│   ├── about/              # About page
│   ├── areas/              # Service area pages (local SEO)
│   │   └── [area]/         # Dynamic area pages
│   ├── contact/            # Contact/estimate page
│   ├── portfolio/          # Portfolio pages
│   │   └── [slug]/         # Project detail pages
│   ├── reviews/            # Reviews page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # Reusable React components
├── data/                   # Static data (projects, reviews, areas, services)
├── lib/                    # Utilities and config
└── globals.css             # Global styles
```

## Key Features

- **Lead Generation**: Prominent CTAs, click-to-call/text, contact form
- **Portfolio**: Before/after project gallery with lightbox
- **Reviews**: Testimonials with Google Business Profile link
- **Local SEO**: 15 area pages with structured data
- **JSON-LD**: LocalBusiness schema on key pages
- **Responsive**: Mobile-first design
- **Accessible**: Focus states, ARIA labels, alt text

## Configuration

Edit `/src/lib/config.ts` to update:

- Business name and phone
- Google Business Profile URL
- Feature flags (licensed/insured badge)
- Default metadata

## Customization

### Adding Projects

Edit `/src/data/projects.ts` to add/modify portfolio projects.

### Adding Service Areas

Edit `/src/data/areas.ts` to add/modify service areas.

### Adding Reviews

Edit `/src/data/reviews.ts` to add/modify testimonials.

### Updating Services

Edit `/src/data/services.ts` to modify service offerings.

## Deployment

The site is ready for deployment to Vercel, Netlify, or any Node.js hosting platform.

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables in the Vercel dashboard.

## Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your sender domain
3. Get your API key
4. Add `RESEND_API_KEY` to environment variables

## License

Private - All rights reserved.
