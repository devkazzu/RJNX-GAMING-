# RJNX — Personal Creator Website

The official website of **RJNX**, the personal brand of **Raju Mahato** — a Class 12 student from Assam, India, building his journey through **gaming, creativity and technology**. Creator behind the [rjnxgaming](https://www.youtube.com/@rjnxgaming) YouTube channel.

> Gaming • Creativity • Technology

## ✨ Features

- Premium dark gaming/tech aesthetic with neon glow accents and glassmorphism
- Animated particle background (auto-disabled for users who prefer reduced motion)
- Fully responsive, mobile-first layout — phones, tablets, laptops and desktops
- Accessible: semantic HTML, keyboard-friendly navigation, skip link, visible focus states
- SEO-ready metadata (Open Graph + Twitter cards)
- Sections: Hero, About, YouTube, Projects, Skills & Interests, Contact, Footer
- Single config file for all links and contact details

## 🛠️ Tech Stack

- [React](https://react.dev/) — UI components
- [Vite](https://vite.dev/) — dev server & production build
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Lucide](https://lucide.dev/) — lightweight icon library

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/devkazzu/Mio-File-Manager.git
cd Mio-File-Manager

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

## ⚙️ Configuration

All site-wide values live in **`src/config.js`**:

| Key                | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| `links.youtube`    | YouTube channel URL                                            |
| `links.github`     | GitHub profile URL                                             |
| `links.instagram`  | Instagram URL — the footer button only appears when this is set |
| `contactEmail`     | Replace `YOUR_EMAIL_HERE` with a real address to enable the contact form |

The contact form opens the visitor's email app with the message pre-filled (`mailto:`) once `contactEmail` is configured — no backend or API keys required, and no secrets live in the frontend.

## 📁 Project Structure

```
├── index.html              # Entry HTML + SEO metadata
├── public/
│   └── favicon.svg         # RJNX favicon
├── src/
│   ├── config.js           # ← Edit links & contact details here
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Page layout
│   ├── index.css           # Theme, utilities, global styles
│   ├── components/         # Navbar, Footer, ParticleField, Reveal, SectionHeading
│   └── sections/           # Hero, About, YouTube, Projects, Skills, Contact
└── vite.config.js
```

## 📌 Projects Featured

- **Mio File Manager** — [github.com/devkazzu/Mio-File-Manager](https://github.com/devkazzu/Mio-File-Manager)
- **RJNX Website** — this site

## 📬 Connect

- YouTube: [@rjnxgaming](https://www.youtube.com/@rjnxgaming)
- GitHub: [devkazzu](https://github.com/devkazzu)

---

© RJNX — Raju Mahato, Assam, India.
