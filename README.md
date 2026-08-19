# 💳 Money - Smart FinTech Banking Platform 💸

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.7-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

A modern, high-conversion FinTech & Digital Banking Web Application built with **React 18**, **Tailwind CSS v4**, and **Framer Motion 12**. Features a sleek lavender and purple glassmorphism design, floating 3D fluid physics, interactive card stacks, pricing matrix, and a full authentication suite with local storage persistence.

---

## 🌟 Key Features

### 1. ⚡ Hero & Conversion Engine
- **Dynamic Headline & CTAs**: Instant triggers for account onboarding (`Read More` ➔ Sign Up) and custom enterprise consultation (`Get a Quote` modal).
- **Floating 3D Physics Badges**: Smooth floating micro-animations for Money Sack, Coin Stack, and Global Payments badges layered over organic fluid background shapes.

### 2. 🛡️ Online Platform Services
- **4 Feature Cards**: `Track Your Move`, `Lifetime Support`, `Top Security`, and `Professionals Guide`.
- **Interactive Detail Modal**: Deep-dive feature modal with key advantages and REST/GraphQL API specifications.

### 3. 💳 How It Works - Dual 3D Visa Cards
- Dual stacked interactive Visa cards (**Purple Platinum** & **Black Titanium**) with contactless chips, holographic accents, and embossed account numbering.
- Checklist highlights covering data-driven decision-making and automated sales enablement.

### 4. 💎 Exclusive Features & Pricing Matrix
- **Tiered Plans**: `Basic ($10/mo)`, `Pro ($29/mo - Popular)`, and `Enterprise ($49/mo)`.
- Dynamic hover elevation and interactive feature comparison.

### 5. 💬 Constellation Testimonial Cloud
- Interactive testimonial network with reviewer avatar constellation, verified feedback, and location tags.

### 6. 🔐 Complete Authentication Suite
- **🔑 Login (`/login`)**: Email/password authentication, remember-me toggle, and instant dashboard redirection.
- **📝 Sign Up (`/signup`)**: New account registration with `localStorage` user persistence.
- **❓ Forgot Password (`/forgot-password`)**: Password reset recovery flow.
- **🔄 Reset Password (`/reset-password`)**: Secure credential update with validation checks.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://reactjs.org/) | Component-based UI architecture |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation CSS framework with Vite integration |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Smooth layout transitions & modal physics |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp SVG icons |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) | Client-side route management |

---

## 📁 Project Structure

```text
Money - Smart FinTech Banking 💳/
├── public/
│   └── index.png
├── src/
│   ├── assets/
│   │   ├── branding/           # Logos & favicon badges
│   │   │   ├── logo.png
│   │   │   └── index.png
│   │   ├── backgrounds/        # Floating fluid blobs & decorative orbs
│   │   │   ├── pink-fluid.png
│   │   │   ├── purple-fluid.png
│   │   │   ├── pink-orb.png
│   │   │   └── purple-orb.png
│   │   └── icons/              # Feature badges & utility icons
│   │       ├── coin-stack.png
│   │       ├── globe.png
│   │       ├── guide.png
│   │       ├── money-sack.png
│   │       ├── move-feature.png
│   │       ├── security.png
│   │       └── support.png
│   ├── components/
│   │   ├── layout/             # Navigation & footer
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/           # Modular landing sections
│   │   │   ├── Hero.jsx
│   │   │   ├── OnlinePlatform.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Pricing.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/                 # Reusable UI modals
│   │       └── FeatureModal.jsx
│   ├── pages/
│   │   ├── auth/               # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   └── LandingPage.jsx     # Landing page composition
│   ├── App.jsx                 # Route manager & global state
│   ├── index.css               # Global Tailwind CSS styles & keyframe animations
│   └── main.jsx                # Application root entrypoint
├── index.html                # HTML entrypoint
├── package.json              # Project dependencies & scripts
├── vercel.json               # SPA routing rewrite configuration
└── vite.config.js            # Vite configuration with port 3002
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sushanth666/Money---Smart-FinTech-Banking-.git
   cd Money---Smart-FinTech-Banking-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be live at **`http://localhost:3002/`**.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production bundle**:
   ```bash
   npm run preview
   ```

---

## 🌐 Routes Overview

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `LandingPage.jsx` | Main FinTech Banking Landing Page |
| `/login` | `Login.jsx` | User sign-in form |
| `/signup` | `SignUp.jsx` | User registration |
| `/forgot-password` | `ForgotPassword.jsx` | Password reset request |
| `/reset-password` | `ResetPassword.jsx` | Set new password confirmation |

---

## 🎨 Theme & Color Palette

- **Primary Purple Gradient**: `#A78FFF` ➔ `#8565FF`
- **Dark Indigo Accent**: `#1A1538`
- **Soft Lavender Background**: `#FAF9FF`
- **Typography**: `Plus Jakarta Sans`

---

## 📄 License

This project is licensed under the **MIT License**.
