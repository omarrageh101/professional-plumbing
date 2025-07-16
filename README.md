# Sanitär-Technik Oerlicke - Modern Business Website

A modern, responsive website for Sanitär-Technik Oerlicke, a plumbing and heating company in Fulda, Germany. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized for fast loading and smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: Built with accessibility best practices
- **Deployment Ready**: Optimized for major hosting platforms

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Icons**: Lucide React, Font Awesome
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sanitaer-technik-oerlicke
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with these settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to your package.json scripts:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## Configuration

### Company Information

All company data is stored in `src/config/company.json`. Update this file to modify:

- Company details (name, address, phone)
- Services offered
- Testimonials
- Business hours
- Social media links

### Styling

The website uses Tailwind CSS with custom components. Key style files:

- `src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- `src/components/ui/` - Reusable UI components

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (Radix UI)
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── FloatingCTA.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ServicesSection.tsx
│   └── TestimonialSection.tsx
├── config/
│   └── company.json     # Company data configuration
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Features Overview

### Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero Section** - Main banner with call-to-action buttons
3. **Services** - Service cards with hover animations
4. **About** - Company information and statistics
5. **Testimonials** - Customer reviews and ratings
6. **Contact** - Contact information and Google Maps
7. **Footer** - Company details and social links
8. **Floating CTA** - Emergency contact button

### Responsive Design

- Mobile-first approach
- Breakpoints: mobile (default), tablet (768px+), desktop (1024px+)
- Touch-friendly interface
- Optimized for all screen sizes

### Performance Optimizations

- Lazy loading for images
- Optimized Google Fonts loading
- Minimal bundle size
- Efficient CSS with Tailwind
- Proper image formats and sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Sanitär-Technik Oerlicke. All rights reserved.

## Support

For technical support or questions about this website, please contact the development team.