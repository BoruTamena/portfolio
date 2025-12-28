# 🚀 Portfolio - Boru Tamene

A modern, professional portfolio website showcasing my work as a Compute Engineer. Built with Next.js and featuring a beautiful green theme with smooth animations.

## ✨ Features

- 🌐 **Internationalization** – Supports both English and Amharic (አማርኛ)
- 📱 **Fully Responsive** – Optimized for all devices (mobile, tablet, desktop)
- ⚡ **High Performance** – Built with Next.js 16 and Turbopack
- 🎨 **Smooth Animations** – Powered by Framer Motion for fluid transitions
- 🎬 **Video Support** – Project showcases with video demos
- 📄 **CV Download** – Easy resume download functionality
- 🎨 **Modern UI** – Beautiful green theme with Tailwind CSS
- 🏢 **Company Showcase** – Display companies I've worked with
- 🔄 **Loading Screen** – Custom loading animation with logo
- 📱 **Mobile Optimized** – Touch-friendly interactions and mobile-first design

## 🛠️ Technologies Used

- **Framework:** Next.js 16.0.8 (App Router with Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + TailwindCSS Animated
- **Animations:** Framer Motion
- **Icons:** React Icons + Lucide React
- **Package Manager:** pnpm
- **Deployment:** Render / Cloudflare Pages (Static Site)

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About/           # About me section with values
│   │   ├── Companies/       # Companies I've worked with
│   │   ├── Contact/         # Contact information
│   │   ├── Header/          # Navbar with language dropdown
│   │   ├── Hero/            # Main hero section with logo
│   │   ├── Projects/        # Project showcase with modals
│   │   ├── Services/        # Services offered
│   │   └── Stack/           # Technology stack
│   ├── providers/
│   │   └── LanguageContext.tsx  # Context for i18n
│   ├── loading.tsx          # Loading screen component
│   └── layout.tsx           # Root layout with metadata
├── assets/
│   ├── images/              # Images and assets
│   └── Hailuo_Video_*.mp4   # Project video demos
└── public/
    ├── logo.webp            # Portfolio logo
    ├── my-latest-cv.pdf     # Resume file
    └── [project-images]     # Project screenshots
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (22.16.0 recommended)
- pnpm 10.26.0+ (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio_website
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Portfolio Sections

- **🏠 Hero** – Introduction with logo, name, role, and description
- **👨‍💻 About** – Background, experience, and core values
- **🏢 Companies** – Companies I've worked with (Ziyara, Two F Capital, LakiPay)
- **🚀 Projects** – Featured projects with detailed modals:
  - Go-Chat: Real-time chat application (with video demo)
  - Job Board API: Scalable job posting platform
  - URL Shortening Service: High-performance URL shortener
- **⚙️ Stack** – Technologies organized by:
  - Currently working with
  - Already worked with
  - Currently studying
- **🛠️ Services** – Services I offer (Web Development, Backend, Goals)
- **📞 Contact** – Contact details and social media links

## 🌐 Features

- **Language Dropdown:** Switch between English and Amharic with flag icons
- **Smooth Scrolling:** Seamless navigation between sections
- **Scroll to Top Button:** Quickly return to the top
- **Project Modals:** Detailed project views with images/videos, tech stack, and links
- **CV Download:** Direct PDF resume download
- **Social Links:** Easy access to LinkedIn, GitHub, WhatsApp, Email
- **Mobile-Friendly:** Touch-optimized interactions and responsive design
- **Loading Screen:** Custom loading animation with logo

## 🎨 Theme

The portfolio features a modern green theme:
- **Primary Color:** Green (#22c55e)
- **Background:** Dark green (#0a0f0a)
- **Cards:** Dark green (#0f1a0f)
- **Text:** Light green/white (#e4f5e4)
- **Accents:** Various shades of green for highlights

## 📊 Performance

- ⚡ Next.js 16 with Turbopack for ultra-fast development
- 🔄 App Router with Static Export for optimal performance
- 📦 Automatic code splitting
- 🖼️ Optimized images and videos
- 🚀 Static site generation for fast loading

## 🚀 Deployment

The project is configured for deployment on:

### Render
- **Build Command:** `pnpm run build`
- **Start Command:** `pnpm run start` (uses `serve` for static files)
- **Output Directory:** `out`

### Cloudflare Pages
- **Build Command:** `pnpm run build`
- **Build Output Directory:** `out`
- **Deploy Command:** (Leave empty - Pages handles deployment automatically)

### Build Locally

```bash
pnpm run build
# Output will be in the 'out' directory
```

## 🛠️ Tech Stack Highlights

### Currently Working With
- TypeScript, React, Vite, TailwindCSS
- Golang, Go Micro
- AzureDevOps, Git

### Already Worked With
- JavaScript, Python, Flutter
- Next.js 14, PostgreSQL, Prisma, Zod, Docker
- MongoDB, MySQL, Oracle, Firebase
- React, Styled Components, SASS

### Currently Studying
- Node.js, Express.js, Jest
- Linux/WSL2, Unity, AWS, Expo
- Agent Building

## 📝 Project Details

### Go-Chat
Real-time messaging platform with private and group chat, WebSockets, MongoDB, and RBAC.

### Job Board API
Scalable job posting platform with JWT authentication, Casbin RBAC, GORM, and Swagger documentation.

### URL Shortening Service
High-performance URL shortener with Redis caching, MongoDB sharding, Nginx load balancing, and Prometheus/Grafana monitoring.

## 📞 Contact

- **GitHub:** [@BoruTamena](https://github.com/BoruTamena)
- **LinkedIn:** [Boru Tamene](https://www.linkedin.com/in/boru-tamena)
- **Email:** borubt@gmail.com
- **WhatsApp:** +251 953 301 736
- **Location:** Addis Ababa, Ethiopia

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Boru Tamene**
