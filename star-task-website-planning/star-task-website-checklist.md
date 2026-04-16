# Star Task Website Execution Checklist

This checklist corresponds directly to the `star-task-website-implementation-plan.md` and will be used to ensure every detail is perfectly implemented.

- [ ] **1. Initialization**
  - [ ] Run `npx create-vite` to initialize the React + SWC stack.
  - [ ] Install Tailwind CSS, PostCSS, and Autoprefixer.
  - [ ] Install Framer Motion.
  - [ ] Install React Router DOM (for Hash Routing).

- [ ] **2. Configuration & GitHub Connection**
  - [ ] Configure `vite.config.js` (including base URL settings if required).
  - [ ] Set up `.github/workflows/deploy.yml` for automated GitHub Pages deployment.
  - [ ] Configure `tailwind.config.js` with exact hex tokens (`star-gold`: `#FFD200`, `star-dark`: `#1A1A1A`, `star-canvas`: `#FAFAFA`).
  - [ ] Inject `Inter` Google Fonts link into `index.html`.
  - [ ] Add OpenGraph (`og:`) SEO Meta Tags to `index.html`.

- [ ] **3. Core Neuro-Flow Styles**
  - [ ] Create `src/index.css` global styles and structural resets.
  - [ ] Build the `.glass-block` CSS utility class exactly to the iOS spec.

- [ ] **4. Routing Setup**
  - [ ] Create `App.jsx` with `HashRouter` setup mapping to `Home`, `Terms`, and `Privacy` pages.

- [ ] **5. Page Building**
  - [ ] **Home Page (`Home.jsx`)**
    - [ ] Hero Section with floating transparent iPhone placeholder.
    - [ ] "Unlock Full Power" Headline and Star Icon.
    - [ ] Apple "Download on the App Store" localized SVG button.
    - [ ] "North Star" Features grid utilizing Glassmorphism.
  - [ ] **Terms of Use (`Terms.jsx`)**
    - [ ] Clean, text-heavy layout complying with App Store requirements.
  - [ ] **Privacy Policy (`Privacy.jsx`)**
    - [ ] Simple and clear layout, fulfilling data collection explanations.
    
- [ ] **6. Quality Assurance & Testing**
  - [ ] Verify `npm run build` completely succeeds.
  - [ ] Verify `npm run preview` renders flawlessly.
  - [ ] Use Framer Motion to apply premium spring bounces to cards/buttons.
  - [ ] Check primary vs secondary text WCAG contrast.
  - [ ] Commit all code and push to trigger the new `deploy.yml` GitHub Action.
