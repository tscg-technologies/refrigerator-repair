# Refrigerator Repair & Maintenance Services
**TSCG Technologies Portfolio Demonstration Website**

A modern, responsive, high-performance static website showcasing refrigerator repair, fridge installation, preventive maintenance, and cooling system diagnostic services.

---

## 1. Project Overview
- **Website Identity:** REFRIGERATOR REPAIR SERVICES
- **Business Category:** Refrigerator Repair, Fridge Installation, Maintenance, and Cooling System Services.
- **Purpose:** Portfolio demonstration for TSCG Technologies to illustrate modern service website architecture, symptom-oriented diagnostic guides, interactive project filtering, and accessible booking workflows.
- **Demonstration Disclosures:** This is a frontend demonstration website. In accordance with ethical guidelines, no real operating companies, fake technician names, false manufacturer accreditations, or fabricated customer reviews are represented.

---

## 2. Technology Stack & Compliance
This website was built adhering strictly to the **zero external dependency** restriction:
- **HTML5:** Semantic, accessible markup with OpenGraph and SEO metadata.
- **CSS3:** Custom properties (design tokens), flexbox, grid, glassmorphism, responsive breakpoints, smooth animations, and `prefers-reduced-motion` compliance.
- **Vanilla JavaScript (ES6+):** Modular, lightweight code powering sticky navigation, mobile drawer menu, accessible FAQ accordions, project category filtering, project detail modals, and client-side form validation.
- **Zero Frameworks:** No React, Next.js, Vue, Angular, Bootstrap, Tailwind, jQuery, GSAP, PHP, or Node backends. Runs natively in any modern web browser.

---

## 3. Directory Structure
```
refrigerator-repair/
├── index.html                    # Homepage (Hero, highlights, 8 services, 8 problems, dual panels, process, projects)
├── about.html                    # About Us (Diagnostic approach, 6 architecture configurations, team representation)
├── services.html                 # Dedicated Services (Sections A–H: Repair, Installation, Maintenance, Freezer, etc. + FAQ)
├── problems.html                 # Symptom Guide (10 problem breakdowns, safe observations, safety alert, enquiry form)
├── projects.html                 # Projects Gallery (6 category filters, 8 illustrative showcases with interactive modals)
├── contact.html                  # Contact & Booking (Dummy contact info, full validated booking form, demo photo picker)
│
├── images/                       # Website images directory (30 images including generated photos)
│
├── assets/
│   ├── css/
│   │   └── style.css             # Unified modern cooling design system & responsive styling
│   ├── js/
│   │   └── main.js               # Pure Vanilla JS interactions (nav, modals, filters, forms)
│   ├── images/
│   │   ├── logo.svg              # Custom abstract cooling & refrigerator logo
│   │   └── placeholders/         # Blueprint placeholders backup
│   └── icons/                    # Vector iconography
│
├── generate_placeholders.py      # Python script that generated blueprint placeholders
├── IMAGE-GENERATION-GUIDE.md     # Complete Google Flow / Imagen 3 generation guide (30 copy-ready prompts)
└── README.md                     # Documentation & Hostinger deployment instructions
```

---

## 4. Color Palette
- **Deep Navy:** `#10243A`
- **Dark Charcoal:** `#172534`
- **Ice Blue:** `#2589D6`
- **Cyan:** `#43C9E8`
- **Pale Ice:** `#EAF6FC`
- **Cool Grey:** `#F2F6F9`
- **White:** `#FFFFFF`
- **Accent Orange:** `#FF9D52`

---

## 5. Local Preview Instructions

You can run this project locally without installing any build tools or packages.

### Option A: Direct Browser File
Double-click any `.html` file (e.g., `index.html`) in Windows File Explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option B: Python HTTP Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000` in your web browser.

### Option C: VS Code Live Server
1. Open this folder in VS Code.
2. Right click `index.html` and click **"Open with Live Server"**.

---

## 6. Hostinger Static Hosting Deployment

This site is 100% static and directly compatible with Hostinger Web Hosting, Cloud Hosting, or VPS.

### Method 1: Hostinger hPanel File Manager (Simplest)
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** → Select your domain → Click **File Manager**.
3. Open the `public_html` directory.
4. Upload all files from this project (`index.html`, `about.html`, `services.html`, `problems.html`, `projects.html`, `contact.html`, and the `assets/` folder) directly into `public_html/`.
5. Your website is immediately live!

### Method 2: Git Auto-Deployment on Hostinger
1. In Hostinger hPanel, go to **Advanced** → **Git**.
2. Connect your Git repository containing this code.
3. Set the branch to `main` and directory to `/public_html`.
4. Click **Deploy**.

---

## 7. Image Status: 100% Fully Generated
All 30 professional images have been generated and integrated across the entire website.
- Location: `images/` (and backup in `assets/images/placeholders/`)
- All files are available in both `.jpg` and `.jpeg` formats for maximum compatibility.
- Refer to [`IMAGE-GENERATION-GUIDE.md`](./IMAGE-GENERATION-GUIDE.md) for the archival prompt documentation and technical image specifications.

---

## 8. License & Portfolio Credits
Designed and engineered for **TSCG Technologies Portfolio Demonstrations**. All mock data, dummy phone numbers (`0000000000`), and simulated forms are for testing and demonstration only.
