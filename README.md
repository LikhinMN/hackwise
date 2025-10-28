# HackWise Web

A modern, interactive landing page built with Next.js featuring 3D physics simulations and smooth animations.

## ✨ Features

- **Interactive Hero Section** - Dynamic background with mouse-following reveal effects
- **Animated Navigation** - Smooth mobile menu with hamburger animation
- **Companies Showcase** - Marquee animation displaying trusted brands
- **3D Physics Simulation** - Interactive lanyard card with realistic physics
- **Responsive Design** - Optimized for all screen sizes
- **Dark Theme** - Sophisticated purple-dark color scheme

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **3D Graphics**: React Three Fiber
- **Physics**: Rapier Physics Engine
- **Animations**: Custom CSS animations and transitions
- **Language**: TypeScript

## 📦 Dependencies

### Core Dependencies
- `next` - React framework
- `react` & `react-dom` - UI library
- `three` - 3D graphics library

### 3D & Physics Dependencies
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers and abstractions
- `@react-three/rapier` - Physics engine integration
- `meshline` - Custom line rendering

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hackwise-web
```

2. Install dependencies:
```bash
npm install
```

3. Install 3D dependencies:
```bash
npm install @react-three/fiber @react-three/drei @react-three/rapier meshline
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
hackwise-web/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── NavBar.tsx        # Navigation component
│   ├── CompaniesLogo.tsx # Companies marquee
│   ├── Lanyard.tsx       # 3D physics simulation
│   └── LaserFlow.tsx     # Additional animations
├── public/
│   ├── bg/
│   │   └── hero-bg.jpeg  # Hero background image
│   ├── card.glb          # 3D card model
│   └── lanyard.png       # Lanyard texture
└── package.json
```

## 🎨 Components

### NavBar
- Fixed positioning with backdrop blur
- Smooth mobile menu animations
- Responsive hamburger icon transformation

### CompaniesLogo
- Infinite marquee animation
- Gradient fade effects
- Responsive logo sizing

### Lanyard
- Interactive 3D physics simulation
- Drag-and-drop functionality
- Realistic rope physics with joints
- Professional lighting setup

## 🎯 Key Features

### Interactive Elements
- **Mouse-following effects** in hero section
- **Drag-and-drop** 3D card interaction
- **Smooth animations** throughout the site
- **Responsive design** for all devices

### Performance Optimizations
- **60fps physics** simulation
- **Optimized 3D rendering** with proper culling
- **Efficient animations** using CSS transforms
- **Lazy loading** for 3D assets

## 🚀 Deployment

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features
1. Create components in the `components/` directory
2. Import and use in `app/page.tsx`
3. Follow the existing dark theme (`#060010`)
4. Ensure responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Three.js community for excellent 3D tools
- React Three Fiber for seamless React integration
- Rapier Physics for realistic physics simulation
- Tailwind CSS for utility-first styling