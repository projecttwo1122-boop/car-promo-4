# Premium Auto - Car Promo 4

The most advanced and beautiful promotional landing page for premium auto showcase. Built with cutting-edge design patterns inspired by Apple and Netflix.

## 🎨 Design Philosophy

- **Minimalist Apple-style approach** - Clean, spacious, focused
- **Netflix-inspired animations** - Smooth, sophisticated transitions
- **Premium aesthetic** - Dark theme with gradient accents
- **Modern interactions** - Micro-interactions and hover states
- **Performance-first** - Optimized animations and lazy loading

## 🚀 Features

### Hero Section
- Animated gradient backgrounds with layered effects
- Floating animated elements
- Call-to-action buttons with smooth interactions
- Scroll indicator animation

### Cars Showcase
- Responsive grid layout (auto-adapts from 1-3 columns)
- Individual car cards with image gallery
- Price display in rubles
- Technical specifications badges
- Smooth hover animations and scale effects

### Features Section
- 6 key features grid
- Icon animations on hover
- Gradient borders and backgrounds
- Professional typography

### Header
- Sticky navigation with blur effect on scroll
- Logo with gradient text
- Navigation links with underline animations
- Call-to-action button

### Footer
- 4-column footer layout (responsive)
- Social media links
- Quick navigation sections
- Contact information
- Policies links

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Framer Motion** - Advanced animations
- **CSS Modules** - Scoped styling
- **Responsive Design** - Mobile-first approach

## 🎯 Key Animations

1. **Gradient Animation** - Continuously moving gradient backgrounds
2. **Floating Elements** - Smooth vertical and horizontal movements
3. **Card Hover** - 3D perspective with subtle lifting
4. **Text Highlight** - Gradient text animations
5. **Icon Rotation** - Smooth rotation on interactions
6. **Scroll Indicator** - Bounce animation for guidance

## 🔧 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) with your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎬 Color Scheme

- **Primary**: `#FF6B35` (Orange)
- **Secondary**: `#004E89` (Dark Blue)
- **Accent**: `#00D9FF` (Cyan)
- **Dark BG**: `#000000`
- **Surface**: `#111111`
- **Text**: `#FFFFFF`
- **Muted**: `#B3B3B3`

## 📚 Component Structure

```
src/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── layout.css        # Layout styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── CarsShowcase.tsx  # Cars grid
│   ├── CarCard.tsx       # Individual car card
│   ├── Features.tsx      # Features section
│   └── Footer.tsx        # Footer
├── lib/
│   └── api.ts            # API client
├── styles/
│   ├── globals.css       # Global styles
│   ├── Hero.module.css
│   ├── Header.module.css
│   ├── CarsShowcase.module.css
│   ├── CarCard.module.css
│   ├── Features.module.css
│   └── Footer.module.css
└── next-env.d.ts
```

## 🌐 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

For production:

```
NEXT_PUBLIC_API_URL=https://your-api.railway.app
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/globals.css`:

```css
html {
  --primary-color: #FF6B35;
  --secondary-color: #004E89;
  --accent-color: #00D9FF;
  /* ... */
}
```

### Typography
Modify font-sizes and weights in component modules and `globals.css`

### Animations
Adjust animation durations and delays in component `variants` objects

## 📊 Performance Tips

- Images are lazy loaded
- CSS is scoped with modules
- Animations use GPU-accelerated properties
- Framer Motion optimizations for smooth performance

## 🚢 Deployment

### Railway

1. Connect your Git repository
2. Configure environment variables:
   - `NEXT_PUBLIC_API_URL`
   - `PORT` (optional, default 3004)

3. Deploy!

### Other Platforms (Vercel, Netlify)

The project works on any platform supporting Node.js and Next.js.

## 📝 Notes

- All prices are displayed in rubles (₽)
- Uses API from `car-api` backend
- Fully responsive design
- Dark theme optimized for eye comfort

## 🤝 Contributing

When extending this project:

1. Follow the existing component structure
2. Use CSS Modules for styling
3. Keep animations performant
4. Maintain responsive design
5. Update this README as needed

## 📄 License

Private project

---

Built with ❤️ for premium auto showcase



# car-promo-4
