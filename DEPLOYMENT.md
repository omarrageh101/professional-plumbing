# Deployment Guide

This project has been refactored for easy deployment to any major hosting platform while maintaining 100% visual consistency with the original design.

## Project Structure

```
├── src/
│   ├── components/          # All React components
│   │   ├── ui/             # Reusable UI components (shadcn/ui)
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingCTA.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── company.json    # All business data configuration
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Documentation
```

## Key Improvements

### 1. **Centralized Configuration**
- All business data moved to `src/config/company.json`
- Easy to update contact info, services, testimonials
- No hardcoded data in components

### 2. **Standard Structure**
- Following React/Vite best practices
- Clean separation of concerns
- TypeScript throughout

### 3. **Deployment Optimized**
- Removed Replit-specific dependencies
- Standard build process with `npm run build`
- Proper asset handling
- SEO meta tags included

### 4. **Platform-Specific Configs**
- `vercel.json` for Vercel deployment
- `netlify.toml` for Netlify deployment
- Standard `package.json` scripts

## Deployment Instructions

### Vercel (Recommended)

1. **One-Click Deploy**
   - Connect your Git repository to Vercel
   - Vercel will automatically detect the Vite framework
   - No additional configuration needed

2. **Manual Deploy**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Netlify

1. **Drag & Drop Deploy**
   - Run `npm run build` locally
   - Drag the `dist` folder to Netlify

2. **Git Integration**
   - Connect your repository to Netlify
   - Build settings are in `netlify.toml`

### GitHub Pages

1. **Setup**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Other Platforms

The project works with any platform that supports:
- Node.js 18+
- Static file serving
- SPA routing (redirects to index.html)

## Configuration

### Company Data
Edit `src/config/company.json` to update:
- Company information
- Contact details
- Services offered
- Testimonials
- Business hours
- Social media links

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes
- Custom animations: CSS keyframes in `src/index.css`

### SEO
- Meta tags in `index.html`
- Update title, description, og:image
- Add favicon in `public/` folder

## Build Process

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Environment Variables

No environment variables required for basic deployment. All configuration is in `company.json`.

## Assets

- All images are loaded from external URLs (Unsplash)
- Font Awesome icons via CDN
- Google Fonts via CDN
- No local asset dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized Vite build
- Tree-shaking enabled
- Minimal bundle size
- Efficient CSS with Tailwind
- Lazy loading ready

## Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Run `npm install` to install dependencies
- Check TypeScript errors with `npm run build`

### Deployment Issues
- Verify build command: `npm run build`
- Check output directory: `dist`
- Ensure SPA routing is configured for 404 redirects

### Styling Issues
- Tailwind CSS classes should work out of the box
- Check `tailwind.config.ts` for custom configurations
- Verify PostCSS configuration in `postcss.config.js`

## Support

For deployment issues, check the documentation of your hosting platform:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

The website is now fully ready for production deployment with zero configuration needed!