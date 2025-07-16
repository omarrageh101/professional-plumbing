# replit.md

## Overview

This is a modern full-stack web application built for Sanitär-Technik Oerlicke, a German plumbing and heating company. The application is a business landing page that showcases company services, provides contact information, and includes a contact form for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components wrapped with shadcn/ui
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Style**: REST API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store

### Database Schema
The application uses a simple database schema with two main tables:
- `users`: For potential admin functionality (id, username, password)
- `contacts`: For storing contact form submissions (id, name, email, phone, message, service, createdAt)

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections
- **Navigation**: Responsive navigation with mobile menu
- **Hero Section**: Main banner with call-to-action buttons
- **Services Section**: Company service offerings display
- **About Section**: Company information and statistics
- **Testimonials**: Customer reviews and ratings
- **Contact Section**: Contact information and form
- **Footer**: Company details and social links
- **Floating CTA**: Emergency contact button

### Backend Components
- **Contact API**: Handles contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Route Handler**: Express route registration and middleware
- **Development Server**: Vite integration for development mode

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data is validated using Zod schema
   - POST request sent to `/api/contact`
   - Server validates and stores contact in database
   - Success/error response returned to client

2. **Contact Retrieval**:
   - Admin can access `/api/contacts` to view all submissions
   - Data retrieved from PostgreSQL database
   - Formatted and returned as JSON

3. **Static Content**:
   - All company information is hardcoded in React components
   - No dynamic content management system
   - Focus on performance and simplicity

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React icons and Font Awesome
- **Fonts**: Inter font family from Google Fonts

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict mode
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations stored in `./migrations`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **PORT**: Server port (defaults to Express default)

### Production Deployment
- Run `npm run build` to create production builds
- Start server with `npm start`
- Database migrations handled via `npm run db:push`

### Development Setup
- Run `npm run dev` for development server
- Vite dev server with HMR for frontend
- tsx for TypeScript execution in development
- Automatic database schema synchronization

## Technical Notes

- The application uses a modern ES module setup throughout
- Database operations are abstracted through a storage interface
- In-memory storage fallback available for development
- Responsive design optimized for mobile and desktop
- German language content throughout the application
- Focus on local business SEO and conversion optimization