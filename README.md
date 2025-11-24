# LFB - Life Food & Beverages Landing Page

A modern, high-performance landing page for Life Food & Beverages, featuring interactive animations, product showcases, and seamless user experience.

## 🚀 Features

- **Interactive Hero Carousel** - Smooth Swiper-based image carousel with Framer Motion text animations
- **Layered Juice Carousel** - Custom GSAP scroll-triggered animations with layered product reveals
- **Product Showcase** - Dynamic product carousel with detailed individual product pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Code splitting, lazy loading, and optimized image loading
- **SEO Ready** - Comprehensive meta tags including Open Graph and Twitter Cards
- **Error Handling** - React Error Boundary for graceful error recovery
- **404 Page** - Custom Not Found page with navigation options
- **Contact Form** - Enhanced form with loading states and user feedback
- **Analytics Ready** - Google Analytics (GA4) and Facebook Pixel integration
- **Smooth Scrolling** - Accessibility-aware smooth scroll behavior
- **Back to Top** - Floating scroll-to-top button

## 🛠️ Tech Stack

- **React 19.2.0** - Modern React with latest features
- **React Router 7.9.6** - Client-side routing with code splitting
- **Vite 6.0.11** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **GSAP 3.13.0** - Professional-grade animation library with ScrollTrigger
- **Framer Motion 12.23.24** - React animation library
- **Swiper 12.0.3** - Modern touch slider

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Alamnurain786/lfb.git

# Navigate to project directory
cd lfb-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
lfb-landing-page/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── Hero_Images/   # Hero carousel images
│   │   └── Product_Images/ # Product photos
│   ├── components/        # Reusable components
│   │   ├── BackToTop.jsx  # Scroll-to-top button
│   │   ├── ErrorBoundary.jsx # Error handling wrapper
│   │   ├── Footer.jsx     # Site footer
│   │   └── Header.jsx     # Navigation header
│   ├── data/              # Static data
│   │   └── products.js    # Product information
│   ├── pages/             # Page components
│   │   ├── LandingPage.jsx # Main landing page
│   │   ├── NotFound.jsx   # 404 error page
│   │   └── ProductDetails.jsx # Product detail pages
│   ├── Section/           # Landing page sections
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Herocarousel.jsx # Hero section
│   │   ├── JuiceCarousel.jsx # Animated juice showcase
│   │   └── Productcarousel.jsx # Product carousel
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
└── package.json           # Dependencies
```

## 🎨 Key Components

### Hero Carousel

- Swiper-powered image slider with autoplay
- Framer Motion text animations
- Responsive overlay design

### Juice Carousel

- Custom GSAP ScrollTrigger animations
- Layered product reveal effect (Litchi → Nimboo → Coco → Mango)
- Scroll-synchronized animations

### Product Details

- Dynamic routing with React Router
- GSAP-powered hero animations
- Product information display with pack sizes

### Contact Form

- FormSpree integration ready
- Loading states and user feedback
- Form validation

## 📊 Analytics Setup

The project includes integration points for:

- **Google Analytics (GA4)** - Replace `G-XXXXXXXXXX` in `index.html`
- **Facebook Pixel** - Replace `YOUR_PIXEL_ID` in `index.html`

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js` with extended colors and animations.

### Vite

Optimized build configuration in `vite.config.js` for React.

### ESLint

Code quality rules configured in `eslint.config.js`.

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📝 Performance Optimizations

- ✅ Route-based code splitting
- ✅ Lazy loading of page components
- ✅ Optimized image formats
- ✅ Minimal bundle size
- ✅ Smooth scroll with reduced motion support
- ✅ Efficient animation management

## 🐛 Error Handling

- Global Error Boundary catches React errors
- Custom 404 page for invalid routes
- Graceful error recovery with user-friendly messages

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions

## 👨‍💻 Development

The project uses modern JavaScript/React patterns:

- Functional components with hooks
- React Router for navigation
- Context-free architecture
- Tailwind utility classes
- GSAP for complex animations

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ for Life Food & Beverages
