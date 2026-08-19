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

## 📸 Application Screenshots & Visual Showcase

### 1. 💳 FinTech Banking Hero & Live Conversion Hub (`/`)
*Interactive lavender glassmorphism hero with 3D fluid physics badges, dynamic CTAs, and enterprise quote modal.*

<p align="center">
  <img src="./docs/screenshots/01_home_landing.png" alt="Home Landing" width="100%" />
</p>

---

### 2. 🏢 About Us & $12.8B Metric Highlights (`/about`)
*Our journey, global banking leadership, corporate vision, and financial performance metrics.*

<p align="center">
  <img src="./docs/screenshots/02_about_us.png" alt="About Us" width="100%" />
</p>

---

### 3. 🛡️ Online Banking Services & Platform Features (`/features` / `/services`)
*Deep-dive into multi-currency accounts, biometric AI security, virtual Visa cards, and algorithmic analytics.*

<p align="center">
  <img src="./docs/screenshots/03_features_services.png" alt="Features & Services" width="100%" />
</p>

---

### 4. ⚙️ How It Works & Dual 3D Visa Cards (`/works` / `/how-it-works`)
*Interactive 3D stacked Platinum and Titanium Visa cards, 3-step account setup, and instant transfer breakdown.*

<p align="center">
  <img src="./docs/screenshots/04_how_it_works.png" alt="How It Works" width="100%" />
</p>

---

### 5. 💼 Careers Portal & Open FinTech Positions (`/careers` / `/career`)
*Global remote-first engineering, cryptography, security, and product design career opportunities.*

<p align="center">
  <img src="./docs/screenshots/05_careers_portal.png" alt="Careers Portal" width="100%" />
</p>

---

### 6. 🎧 24/7 Customer Help Desk & Live Support (`/support` / `/help`)
*Multi-channel concierge support, ticket dispatch form, and comprehensive interactive FAQs.*

<p align="center">
  <img src="./docs/screenshots/06_customer_support.png" alt="Customer Support" width="100%" />
</p>

---

### 7. 📦 Virtual & Physical Card Delivery Tiers (`/delivery-details`)
*Instant digital Apple/Google Pay card generation and worldwide expedited metal card logistics.*

<p align="center">
  <img src="./docs/screenshots/07_delivery_details.png" alt="Delivery Details" width="100%" />
</p>

---

### 8. 📜 Terms of Service & Regulatory Framework (`/terms`)
*FinTech compliance, user rights, electronic fund transfer disclosures, and dispute resolutions.*

<p align="center">
  <img src="./docs/screenshots/08_terms_conditions.png" alt="Terms of Service" width="100%" />
</p>

---

### 9. 🔐 Bank-Grade Privacy & Data Protection (`/privacy`)
*256-bit AES cryptographic encryption, zero-knowledge architecture, and GDPR/CCPA consumer rights.*

<p align="center">
  <img src="./docs/screenshots/09_privacy_policy.png" alt="Privacy Policy" width="100%" />
</p>

---

### 10. 📚 FinTech Publications & Research E-Books (`/ebooks`)
*Downloadable whitepapers, algorithmic wealth management guides, and modern decentralized banking reports.*

<p align="center">
  <img src="./docs/screenshots/10_free_ebooks.png" alt="Free Ebooks" width="100%" />
</p>

---

### 11. 💻 Developer API Tutorials & Webhook Docs (`/tutorials`)
*RESTful API specifications, SDK quickstarts, webhook integrations, and sandbox code examples.*

<p align="center">
  <img src="./docs/screenshots/11_dev_tutorials.png" alt="Developer Tutorials" width="100%" />
</p>

---

### 12. 📰 FinTech Insights, FX Currency Optimization & Blog (`/blog`)
*Editorial insights on automated liquidity management, currency hedges, and global market trends.*

<p align="center">
  <img src="./docs/screenshots/12_fintech_blog.png" alt="FinTech Blog" width="100%" />
</p>

---

### 13. 🎥 YouTube Masterclasses & Architecture Demos (`/youtube`)
*Interactive video gallery covering modern cloud microservices, payment flows, and security architectures.*

<p align="center">
  <img src="./docs/screenshots/13_youtube_playlist.png" alt="YouTube Masterclass" width="100%" />
</p>

---

### 14. 🔑 Secure Account Login Portal (`/login`)
*Fast authentication gateway with demo credentials quick-fill, remember-me toggle, and session sync.*

<p align="center">
  <img src="./docs/screenshots/14_login_page.png" alt="Login Page" width="100%" />
</p>

---

### 15. 📝 New Account Sign Up & Local Persistence (`/signup`)
*Instant account creation flow with automatic local profile synchronization and onboarding.*

<p align="center">
  <img src="./docs/screenshots/15_signup_page.png" alt="Sign Up Page" width="100%" />
</p>

---

### 16. ❓ Account Recovery & Password Reset Request (`/forgot-password`)
*Automated multi-factor recovery request interface with immediate visual confirmation.*

<p align="center">
  <img src="./docs/screenshots/16_forgot_password.png" alt="Forgot Password" width="100%" />
</p>

---

### 17. 🔄 Password Modification & Security Update (`/reset-password`)
*Encrypted credential updating form with live password strength validation.*

<p align="center">
  <img src="./docs/screenshots/17_reset_password.png" alt="Reset Password" width="100%" />
</p>

---

## 🌐 Routes Overview

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `LandingPage.jsx` | Main FinTech Banking Landing Page |
| `/about` | `AboutPage.jsx` | Company mission, metrics ($12.8B vol), and core principles |
| `/features` / `/services` | `FeaturesPage.jsx` | Deep dive into instant transfers, biometric security, virtual cards |
| `/works` / `/how-it-works` | `WorksPage.jsx` | Step-by-step account activation and global money operations |
| `/careers` / `/career` | `CareersPage.jsx` | Open FinTech engineering, product, security & design roles |
| `/support` / `/help` | `SupportPage.jsx` | 24/7 help desk, live support form, and interactive FAQs |
| `/delivery-details` | `DeliveryDetailsPage.jsx` | Virtual card generation speeds & physical Visa shipping tiers |
| `/terms` | `TermsPage.jsx` | Legal terms of service, compliance, and user rights |
| `/privacy` | `PrivacyPage.jsx` | Bank-grade security standards, GDPR/CCPA data protection |
| `/ebooks` | `EbooksPage.jsx` | Curated research publications & free PDF downloads |
| `/tutorials` | `TutorialsPage.jsx` | REST API, webhooks & developer SDK implementation guides |
| `/blog` | `BlogPage.jsx` | How-to articles, FX currency optimization & FinTech news |
| `/youtube` | `YoutubePage.jsx` | Video masterclasses, architecture demos & HD tutorials |
| `/login` | `Login.jsx` | User sign-in form with remember-me |
| `/signup` | `SignUp.jsx` | User registration with local storage sync |
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
