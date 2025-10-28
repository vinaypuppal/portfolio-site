# Vinay Puppal - Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and TanStack Router showcasing my work as a Senior Full Stack Engineer.

## 🚀 Tech Stack

- **Framework**: [TanStack Router](https://tanstack.com/router) with React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Vite
- **Linting/Formatting**: Biome
- **Icons**: Lucide React
- **Deployment**: Netlify

## ✨ Features

- 🎨 Modern, responsive design with dark theme
- 📱 Mobile-first approach with excellent mobile experience  
- 🖨️ Print-optimized resume with clean PDF export
- ⚡ Fast page loads with code splitting
- 🔍 SEO optimized with meta tags and structured data
- 📊 Project showcase with category filtering
- 🎯 PWA-ready with offline support
- ♿ Accessible and keyboard navigable

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/vinaypuppal/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm format       # Format code with Biome
pnpm lint         # Lint code with Biome
pnpm typecheck    # Run TypeScript type checking
```

## 📁 Project Structure

```
portfolio-site/
├── public/           # Static assets (favicons, images)
├── src/
│   ├── components/   # Reusable React components
│   ├── content/      # Site content and data
│   ├── routes/       # Page components (TanStack Router)
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── biome.json        # Biome configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── vite.config.ts    # Vite configuration
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero section and featured projects
- **Projects** (`/works`) - Complete project showcase with filtering
- **Resume** (`/resume`) - Professional resume with print optimization

## 🎨 Customization

### Update Personal Information

Edit `src/content/data/site-config.ts` to update:
- Personal details (name, title, location)
- Social media links
- Skills and expertise
- Company information

### Add/Update Projects

Edit `src/content/data/works.ts` to manage your project portfolio.

### Styling

- Global styles: `src/styles/app.css`
- Tailwind config: `tailwind.config.mjs`
- Component styles use Tailwind utility classes

## 🚀 Deployment

The site is configured for automatic deployment to Netlify. Push to the `main` branch to trigger a deployment.

### Manual Deployment

1. Build the project:
```bash
pnpm build
```

2. Deploy the `dist` folder to your hosting service

## 🌲 Branches

- `master` - Current React/TanStack Router version
- `v1` - Legacy Gatsby version (archived)

## 📝 License

MIT License - feel free to use this code for your own portfolio!

## 🤝 Contact

- **Email**: hello@vinaypuppal.com
- **LinkedIn**: [linkedin.com/in/vinay-puppal](https://www.linkedin.com/in/vinay-puppal-4514b7104)
- **GitHub**: [github.com/vinaypuppal](https://github.com/vinaypuppal)
- **Website**: [vinaypuppal.com](https://vinaypuppal.com)

---

Built with ❤️ by Vinay Puppal