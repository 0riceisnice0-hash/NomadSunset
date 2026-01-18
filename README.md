# Nomads Sunset

A complete, production-ready static website for a spiritual counsellor and Master Reiki practitioner. Built with plain HTML, CSS, and vanilla JavaScript for optimal performance and accessibility.

## Overview

This website presents spiritual counselling services, energy balancing sessions, guided meditations, and eBooklets with a calm, refined, and quietly mystical aesthetic.

## Features

- **Static HTML/CSS/JS**: No frameworks, deployable on GitHub Pages
- **Mobile-first responsive design**: Optimized for all screen sizes
- **Full accessibility**: Semantic HTML, keyboard navigation, ARIA labels, skip links, high contrast
- **SEO optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD schema, sitemap.xml
- **Performance**: Lazy loaded images, minimal JavaScript, clean CSS
- **Modern design**: Refined serif headings, clean sans-serif body, generous spacing

## Site Structure

```
/
├── index.html              # Home page with hero and offerings preview
├── offerings.html          # Energy balancing and breathwork services
├── meditations.html        # Downloadable meditation tracks
├── ebooklets.html          # Kindle eBooklets catalog
├── about.html              # Practitioner credentials and philosophy
├── contact.html            # Contact form with mailto fallback
├── privacy.html            # Booking policy and privacy information
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── site.webmanifest        # PWA manifest
├── favicon.svg             # Site favicon
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling with CSS variables
│   ├── js/
│   │   └── main.js         # Navigation, form handling, utilities
│   └── img/
│       ├── hero.jpg        # Hero image (placeholder - replace)
│       ├── about.jpg       # About page image (placeholder - replace)
│       └── iphm-logo.png   # IPHM accreditation logo (placeholder - replace)
└── README.md               # This file
```

## Getting Started

### Preview Locally

The simplest way to preview the site locally:

1. **Using Python** (if installed):
   ```bash
   python -m http.server 8000
   ```
   Then visit http://localhost:8000

2. **Using Node.js** (if installed):
   ```bash
   npx http-server -p 8000
   ```
   Then visit http://localhost:8000

3. **Using VS Code Live Server extension**:
   - Install the "Live Server" extension
   - Right-click on index.html
   - Select "Open with Live Server"

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Under "Source", select the branch (usually `main`)
4. Click Save
5. Your site will be available at: `https://[username].github.io/[repository-name]/`

## Customization Guide

### Replace Placeholder Images

The following placeholder images need to be replaced with actual photos:

1. **`assets/img/hero.jpg`** (1920x1080 recommended)
   - Should be a serene, calm landscape with spiritual/mystical feel
   - Use modern formats like WebP with JPG fallback for best performance
   - Ensure text overlay remains readable (dark overlay applied via CSS)

2. **`assets/img/about.jpg`** (800x600 recommended)
   - Professional practitioner photo or relevant serene image
   - Should maintain the calm, refined aesthetic

3. **`assets/img/iphm-logo.png`** (300x150 recommended)
   - Official IPHM accreditation logo
   - Transparent background PNG format preferred

**How to replace:**
- Simply replace the files with your actual images
- Keep the same filenames
- No HTML changes needed

### Insert PayPal Payment Buttons

PayPal.me links are already in place. To add embedded PayPal buttons:

1. Log in to your PayPal account
2. Go to PayPal.com > Tools > PayPal Buttons
3. Create a button for your service
4. Copy the generated HTML code
5. Find sections marked with:
   ```html
   <div class="paypal-placeholder">
     <strong>Insert PayPal Payment Button Here</strong>
   ```
6. Replace the entire `paypal-placeholder` div with your PayPal button code

**Button locations:**
- `offerings.html` - Two sections (Energy Balancing, Breathwork)
- `meditations.html` - General payment section

### Update Meta Tags

Meta tags are in the `<head>` section of each HTML file. Update these:

1. **URLs**: Change `https://0riceisnice0-hash.github.io/NomadSunset/` to your actual domain
2. **Images**: Update Open Graph image paths when you replace placeholder images
3. **Descriptions**: Already optimized but can be refined if needed

**Files to update:**
- index.html
- offerings.html
- meditations.html
- ebooklets.html
- about.html
- contact.html
- privacy.html
- sitemap.xml

### Customize Colors and Typography

All design tokens are in CSS variables at the top of `assets/css/styles.css`:

```css
:root {
  /* Colors */
  --color-background: #fafaf8;
  --color-text: #2d2d2d;
  --color-accent: #7a6f5d;
  
  /* Typography */
  --font-serif: 'Iowan Old Style', ...;
  --font-sans: -apple-system, ...;
  
  /* Spacing */
  --space-md: 2rem;
  ...
}
```

Change these values to customize the entire site's appearance.

## Technical Details

### Accessibility Features

- Semantic HTML5 elements
- Skip link for keyboard navigation
- Proper heading hierarchy (one H1 per page)
- ARIA labels where appropriate
- High contrast ratios (WCAG AA compliant)
- Focus states on all interactive elements
- `prefers-reduced-motion` media query support
- Alt text on all images

### SEO Features

- Unique title tags and meta descriptions per page
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data (Person and ProfessionalService schemas)
- Canonical URLs on all pages
- Sitemap.xml for search engines
- Robots.txt allowing crawling
- Clean semantic HTML structure
- Internal linking strategy

### Performance Features

- No external dependencies or frameworks
- Minimal JavaScript (< 6KB)
- CSS with modern layout (Grid and Flexbox)
- Lazy loading images with native `loading="lazy"`
- SVG favicon for crisp display at any size
- Mobile-first responsive design

### Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

Email: nomadssunset888@gmail.com

## License

Copyright © 2026 Nomads Sunset. All rights reserved.

---

**Built with care for spiritual seekers on their journey of evolution.**