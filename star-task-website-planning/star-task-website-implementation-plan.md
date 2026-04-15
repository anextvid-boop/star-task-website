# Star Task Website Implementation Plan

The objective is to build the Star Task marketing website according to our "Ultra-Minimalist Glassmorphic Design System" and host it directly on **GitHub Pages** (no Vercel, Netlify, etc.) using a static client-side build. This site serves as the main marketing portal and the hub for App Store Connect requirements (Terms, Privacy Policy, Support).

## User Review Required
> [!IMPORTANT]
> - **Deployment Location**: The site will be strictly hosted on GitHub Pages. Any frontend setup (Vite + React or Vanilla) will use static site generation (SSG) / static exports.
> - **Brand Aesthetic**: Adhere strictly to the ultra-minimal design, generous padding, and off-white canvas background with "Neon Gold" actions (`#FFD200`).
> - **Legal Pages**: We will create `/terms-and-conditions` and `/privacy-policy` to ensure the App Store review process succeeds.
> - **Does this structure correctly cover everything you require before we begin execution?**

## Proposed Changes

### Tech Stack Foundation & Routing Strategy
We propose using **Vite + React + Tailwind CSS + Framer Motion**. React makes componentizing the glass blocks and routing extremely fast. 
- **GitHub Pages Routing Fix:** Because GitHub Pages natively struggles with standard URL routing (e.g. going directly to `/privacy-policy` throws a 404), we must explicitly use **Hash Routing** (`/#/privacy-policy`) or include a custom `404.html` file that perfectly mimics `index.html` to intercept the routes.
- **Framer Motion:** Replaces manual CSS spring physics to perfectly mirror the native iOS "bouncy" animations dynamically.

#### [NEW] `index.html` & `vite.config.js`
- Base structure for a fast, static Next/Vite build tuned for GitHub Pages.
- **SEO & Meta Tags Setup:** Add explicit OpenGraph tags (`og:title`, `og:description`, `og:image`) to `index.html` so you get a beautiful preview card when sharing the marketing link on Twitter or iMessage.

#### [NEW] `src/index.css` (Core Star Task Styles)
- CSS Variables (`#FFD200`, `#1A1A1A`, `#FAFAFA`).
- Glassmorphism utility `.glass-block`.
- Smooth scrolling and structural resets.

#### [NEW] `src/pages/Home.jsx`, `src/pages/Terms.jsx`, `src/pages/Privacy.jsx`
- **Home**: Contains the Hero Section (Floating iPhone mockup, "Unlock Full Power"), The "North Star" System layout (Features) detailing *why* the app works, and the App Store CTA. 
- **Terms & Privacy**: Straightforward content pages required for App Store compliance, linked securely in the Footer.

### Asset & Accessibility Requirements
- **App Store SVGs:** We will use the official localized Apple "Download on the App Store" vector SVG badge (not a generic text button).
- **Icons & Screens:** All custom UI icons MUST be SVG. Mockups must be alpha-channel PNGs dynamically floating over the CSS glass blocks.
- **Accessibility:** Ensure the secondary text explicitly passes WCAG color contrast checks against the off-white background.

### Execution Addendums (Critical for Build)
1. **GitHub Actions Deployment Workflow:** Create `.github/workflows/deploy.yml` to handle `npm run build` and deploy the static app to GitHub Pages automatically.
2. **Explicit Tailwind Configuration:** Update `tailwind.config.js` with specific theme color map (`star-gold`: `#FFD200`, `star-dark`: `#1A1A1A`, `star-canvas`: `#FAFAFA`) to avoid inline styles.
3. **Font Setup:** Inject the `<link>` for Google Fonts (`Inter:wght@400;500;800;900`) directly into `index.html` and map it as the primary Tailwind sans font.

## Answers to Open Questions
> [!NOTE]
> 1. **Framework Confirmation:** Yes! **Vite + React + Tailwind CSS + Framer Motion** works perfectly for me. It is the ideal modern stack for this exact premium design.
> 2. **Mockup Assets:** Since we want to move fast, I will use placeholder images exactly sized for the hero that you can easily swap out with the actual transparent PNGs and SVGs later.

## Verification Plan

### Automated/Local Tests
- Run `npm run build` to ensure the project bundles entirely into static HTML/JS/CSS.
- Run `npm run preview` to locally test the production bundle before deploying.

### Manual Verification
- Render accuracy of the Glass-block CSS physics and Framer Motion spring bounces.
- Typographic and vertical rhythm (checking for proper `64px`-`120px` spacing breathability).
- Validate direct URL routing to terms and privacy policies (testing the GitHub Pages 404 failsafe).
- Verify OpenGraph meta tags via SEO checkers.
