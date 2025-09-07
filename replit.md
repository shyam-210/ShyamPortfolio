# Portfolio Website for Shyam J

## Overview

This is a modern, interactive portfolio website built for Shyam J, an AI & Data Science student. The project is a full-stack web application featuring a React frontend with Tailwind CSS and Framer Motion animations, an Express.js backend, and PostgreSQL database integration. The website showcases Shyam's educational background, skills, projects, certificates, and provides contact functionality with a professional, light-themed design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based development
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **UI Components**: Comprehensive component library built with Radix UI primitives and shadcn/ui for accessibility and consistency
- **Animations**: Framer Motion for smooth animations, scroll-triggered effects, and interactive elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for type-safe server-side development
- **API Design**: RESTful endpoints for resume downloads and contact form submissions
- **Development Features**: Custom middleware for request logging and error handling
- **Static Serving**: Integrated with Vite for seamless development and production static file serving

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured for production with Neon Database serverless integration
- **Schema**: Simple user management schema with extensible design for future features
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Design System
- **Theme**: Light theme with carefully selected color palette (sky blue, emerald green, lavender)
- **Typography**: Poppins and Inter fonts for modern, readable typography
- **Components**: Consistent design tokens with CSS custom properties for colors, spacing, and shadows
- **Responsive Design**: Mobile-first approach with responsive breakpoints and adaptive layouts

### Development Architecture
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **TypeScript Configuration**: Shared types and utilities across frontend and backend
- **Path Aliases**: Configured for clean imports and better developer experience
- **Hot Reloading**: Development server with hot module replacement for rapid iteration

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack React Query for modern React development
- **UI Framework**: Comprehensive Radix UI component library for accessible, unstyled components
- **Animation**: Framer Motion for sophisticated animations and gesture handling
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer for utility-first styling

### Backend Dependencies
- **Express.js**: Core web framework with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL driver and Neon Database serverless client
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Validation**: Zod for runtime type validation and schema validation

### Development Tools
- **Build Tools**: Vite with React plugin and runtime error overlay for development
- **Code Quality**: ESBuild for production bundling and TypeScript compilation
- **Development Utilities**: Replit-specific plugins for development environment integration

### UI and Design Dependencies
- **Icons**: Lucide React for consistent iconography
- **Typography**: Google Fonts integration for Poppins and Inter fonts
- **Utilities**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants
- **Form Handling**: React Hook Form with Hookform resolvers for form validation

### External Services
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Image Assets**: Unsplash for placeholder images and stock photography
- **Font Delivery**: Google Fonts CDN for web font optimization