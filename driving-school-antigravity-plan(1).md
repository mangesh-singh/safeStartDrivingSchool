# Driving School Website — Antigravity Build Plan

## 1. Project goal

Build a clean, professional, responsive website for a local car driving school.

Primary business goal:

> Turn website visitors into phone calls, WhatsApp conversations, and enquiries.

The website must work well on:
- Desktop
- Laptop
- Tablet
- Mobile

The first version should be intentionally simple and inexpensive to operate.

---

## 2. Recommended stack

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router only if separate pages are actually needed
- Lucide React for icons
- Git/GitHub
- Cloudflare Pages for initial hosting

Do NOT introduce a backend/database in V1 unless required by the enquiry-form implementation.

Avoid:
- WordPress
- Heavy UI frameworks
- Large animation libraries
- Unnecessary APIs
- Authentication/admin dashboard in V1

---

## 3. Initial site structure

Start as a responsive single-page website.

Sections:

1. Header / Navigation
2. Hero
3. About / Why Choose Us
4. Driving Courses
5. How It Works
6. Gallery
7. Student Reviews
8. Video Testimonials
9. Enquiry CTA
10. Contact / Location
11. Social Media
12. Footer

Optional separate pages can be added later:

- About
- Courses
- Gallery
- Contact

Do not split the site into many pages initially unless there is a clear content/SEO reason.

---

# 4. Design direction

Visual style:

- Modern
- Professional
- Trustworthy
- Automotive
- Friendly
- Clean
- Local-business focused

Avoid:
- Overly corporate styling
- Excessive gradients
- Excessive animations
- Generic stock-template appearance
- Huge carousels
- Crowded layouts

Use generous whitespace, strong typography, high-quality vehicle/instructor imagery, clear CTA buttons, and subtle automotive visual cues.

Suggested visual palette:

- Dark charcoal/navy as the primary dark color
- White/light background
- One strong accent color for CTA buttons
- Neutral gray for secondary text

The final colors should be configurable from one theme/config file.

---

# 5. Responsive behavior

Design for all screen sizes.

Desktop:
- Full navigation
- Large hero
- Two-column content where appropriate
- 3-column course cards
- 3–4 column gallery

Tablet:
- Condensed navigation
- 2-column cards
- 2-column gallery

Mobile:
- Hamburger menu
- Single-column content
- Full-width CTA buttons
- 2-column compact gallery where appropriate
- Sticky bottom Call / WhatsApp bar

Important:

Do not simply shrink the desktop layout.

Each section should have intentional responsive behavior.

---

# 6. Header

Desktop:

Logo / business name on left.

Navigation:

- Home
- About
- Courses
- Gallery
- Reviews
- Contact

Right side:

- Call button
- WhatsApp button

Mobile:

- Logo/name
- Hamburger menu
- Call icon

Navigation should remain sticky or become sticky after scrolling if it improves usability.

---

# 7. Hero section

Hero should immediately communicate:

- What the business is
- Where it operates
- Main benefit
- How to contact the business

Example content:

"Learn to Drive With Confidence"

"Professional car driving lessons for beginners, refresher learners and test preparation."

Location:

"Driving School in [CITY]"

Primary CTA:

"Book a Driving Lesson"

Secondary CTA:

"WhatsApp Us"

Hero imagery should show a clean driving-school/car-training context.

Do not use an overly busy slider.

Prefer one strong hero image.

---

# 8. Why Choose Us

Use 4–6 simple feature cards.

Examples:

- Experienced Instructors
- Beginner Friendly
- Safety First
- Flexible Timings
- Practical Road Training
- Test Preparation

Each card:
- Icon
- Short title
- One-sentence explanation

Keep copy short.

---

# 9. Courses

Create reusable course cards.

Example:

### Beginner Driving Course

Learn the fundamentals of car control, traffic awareness, parking, road confidence and practical driving.

CTA:
"Enquire Now"

### Refresher Course

For drivers who already have a license but want additional confidence and practice.

### Test Preparation

Focused practice for learners preparing for their driving test.

The actual course names, pricing, duration and details should come from configuration data rather than being hardcoded throughout components.

Example TypeScript structure:

```ts
type Course = {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  features: string[];
  image?: string;
};
```

---

# 10. How It Works

Simple 3 or 4 step section:

1. Contact Us
2. Choose Your Course
3. Schedule Your Lessons
4. Start Driving

Use a clean horizontal layout on desktop and vertical layout on mobile.

---

# 11. Gallery

Create a responsive image grid.

Categories:

- Training
- Cars
- Students
- Driving Sessions

Optional filtering can be implemented client-side.

Images should:
- Use optimized formats such as WebP where possible
- Have meaningful alt text
- Open in a lightbox/modal when clicked

Do not load unnecessarily huge original images.

---

# 12. Student reviews

Initial version can use manually configured reviews.

Example data:

```ts
type Review = {
  name: string;
  rating: number;
  text: string;
  date?: string;
};
```

Display:
- 5-star rating
- Review text
- Student name

Do not invent real reviews.

Use placeholders during development and clearly mark them for replacement.

Later, consider integration with Google Business Profile/reviews if technically and legally appropriate.

---

# 13. Video testimonials

Videos may initially be hosted in Google Drive.

Create a Video Testimonials section with:
- Thumbnail
- Play button
- Student name
- Short description

Use Google Drive share/embed URLs supplied by the owner.

Important:
- Do not expose private Drive files.
- Do not embed an entire public Drive folder.
- Use only individual videos intended for public viewing.
- Confirm the owner has permission to publish the videos.

Create a reusable component:

```ts
type VideoTestimonial = {
  title: string;
  studentName: string;
  description?: string;
  embedUrl: string;
  thumbnail?: string;
};
```

If Google Drive embedding becomes unreliable later, the component should be replaceable with YouTube/Vimeo/object storage without changing the page architecture.

---

# 14. Enquiry system

V1 should avoid a custom backend.

Preferred options, in order:

### Option A
WhatsApp enquiry CTA.

Generate a prefilled message such as:

"Hi, I am interested in driving lessons.

Name:
Course:
Preferred timing:"

### Option B
Simple hosted form service/free form endpoint.

The UI should be independent from the form provider.

Create:

```ts
type Enquiry = {
  name: string;
  phone: string;
  course?: string;
  preferredTime?: string;
  message?: string;
};
```

Never store sensitive personal data unnecessarily.

Add basic client-side validation.

---

# 15. Contact section

Display:

- Business name
- Phone
- WhatsApp
- Address
- Opening hours
- Google Maps link
- Social links

Use click-to-call:

```html
<a href="tel:+91XXXXXXXXXX">
```

WhatsApp:

```text
https://wa.me/91XXXXXXXXXX
```

Do not hardcode real contact information in components.

Keep it in configuration.

---

# 16. Social media

Configuration:

```ts
const socialLinks = {
  instagram: "",
  facebook: "",
  youtube: "",
};
```

Only render icons when a real URL exists.

Do not embed entire social feeds in V1.

Simple links are faster and more reliable.

---

# 17. Business configuration

Create one central configuration file.

Example:

```ts
export const business = {
  name: "YOUR DRIVING SCHOOL",
  tagline: "Learn to Drive With Confidence",
  city: "YOUR CITY",
  phone: "+91XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  address: "YOUR ADDRESS",

  hours: {
    monday: "8:00 AM – 7:00 PM",
    tuesday: "8:00 AM – 7:00 PM",
  },

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  mapsUrl: "",
};
```

The site should be easy to customize for another driving school by editing configuration/data rather than components.

---

# 18. Recommended component structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── MobileMenu.tsx
│   ├── Hero.tsx
│   ├── SectionHeading.tsx
│   ├── WhyChooseUs.tsx
│   ├── CourseCard.tsx
│   ├── Courses.tsx
│   ├── HowItWorks.tsx
│   ├── Gallery.tsx
│   ├── Lightbox.tsx
│   ├── Reviews.tsx
│   ├── VideoTestimonials.tsx
│   ├── EnquiryForm.tsx
│   ├── Contact.tsx
│   ├── SocialLinks.tsx
│   ├── Footer.tsx
│   └── MobileContactBar.tsx
│
├── data/
│   ├── courses.ts
│   ├── reviews.ts
│   ├── gallery.ts
│   └── videos.ts
│
├── config/
│   └── business.ts
│
├── assets/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 19. UX rules

Every major section should have a clear purpose.

Primary conversion actions:

1. Call
2. WhatsApp
3. Enquiry

Use these consistently.

Examples:

Hero:
[Book a Lesson] [WhatsApp]

Course:
[Enquire Now]

After reviews:
[Start Learning]

Contact:
[Call Now] [WhatsApp]

Mobile:
Sticky bottom:
[Call] [WhatsApp]

---

# 20. Performance

Target:

- Fast initial load
- Minimal JavaScript
- Optimized images
- Lazy-load gallery images
- Lazy-load video embeds where possible
- Avoid autoplay video
- Avoid heavy background video
- Avoid unnecessary third-party scripts

Target Lighthouse goals:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

These are targets, not reasons to over-engineer the project.

---

# 21. SEO

Add:

- Unique page title
- Meta description
- Proper H1/H2 structure
- Descriptive image alt text
- Open Graph metadata
- Favicon
- robots.txt
- sitemap.xml
- Canonical URL after the custom domain is available

Example title:

"ABC Driving School | Driving Classes in Rudrapur"

Example description:

"Professional car driving lessons in Rudrapur for beginners, refresher learners and driving test preparation."

Do not claim services, locations or qualifications that the business does not actually provide.

---

# 22. Local SEO

Prepare the site for local search.

Include:
- Business name
- Service area
- Address
- Phone
- Opening hours
- Google Maps
- Links to social profiles

Later add appropriate LocalBusiness structured data once the real business information is available.

Also create/optimize the business's Google Business Profile separately.

---

# 23. Accessibility

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels for form fields
- Sufficient color contrast
- Alt text
- Buttons must be actual buttons
- Links must be actual links
- Do not rely only on color to communicate status

Mobile menu must be keyboard accessible.

---

# 24. Security/privacy

Do not collect unnecessary personal information.

For forms:
- Validate phone numbers
- Validate required fields
- Add spam protection if the selected form service supports it
- Never put private API keys in frontend code
- Do not expose Google Drive credentials
- Only use public/embed-safe video URLs

---

# 25. Free deployment plan

Initial deployment:

```text
Developer
   |
   v
GitHub repository
   |
   v
Cloudflare Pages
   |
   v
Free *.pages.dev URL
```

No paid server required.

Videos:
Google Drive initially.

Enquiries:
WhatsApp and/or free hosted form service.

Images:
Repository initially, optimized.

After the site proves useful:

```text
Free hosting
     +
Custom domain
     +
Professional email
```

There is no need to migrate the frontend just because a custom domain is purchased.

---

# 26. Git workflow

Use:

```text
main
develop
feature/*
```

For a small project, a simpler workflow is also acceptable:

```text
main
feature/*
```

Every meaningful change should be committed.

Example commits:

```text
feat: add responsive hero section
feat: add driving course cards
feat: add gallery lightbox
feat: add video testimonials
feat: add enquiry form
feat: add mobile contact bar
fix: improve mobile navigation
perf: optimize gallery images
seo: add metadata and sitemap
```

---

# 27. Development phases

## Phase 1 — Foundation

- Create Vite React TypeScript project
- Install Tailwind
- Configure linting/formatting if needed
- Create base layout
- Create theme variables
- Create business config
- Create responsive header/footer

## Phase 2 — Core website

Build:

- Hero
- Why Choose Us
- Courses
- How It Works
- Contact

## Phase 3 — Trust/content

Build:

- Gallery
- Reviews
- Video testimonials
- Social links

## Phase 4 — Conversion

Build:

- WhatsApp CTA
- Call CTA
- Enquiry form
- Mobile sticky contact bar

## Phase 5 — SEO/performance

- Metadata
- Sitemap
- robots.txt
- Image optimization
- Lazy loading
- Accessibility pass
- Lighthouse testing

## Phase 6 — Deployment

- GitHub
- Cloudflare Pages
- Production build
- Test production URL
- Configure custom domain later

---

# 28. Antigravity implementation instructions

Use the following development behavior:

1. Inspect the existing project before changing anything.
2. If the project does not exist, initialize the React + TypeScript + Vite project.
3. Build the site incrementally.
4. Do not create a backend unless required.
5. Keep business content separate from UI components.
6. Use reusable components.
7. Keep the design responsive from the beginning.
8. Do not use placeholder lorem ipsum.
9. Use clearly marked placeholder business information where real information is unavailable.
10. Do not invent reviews, addresses, qualifications, prices or business claims.
11. Keep external dependencies to a minimum.
12. Run the production build after major implementation stages.
13. Fix TypeScript and build errors before moving to the next phase.
14. Test desktop and mobile breakpoints.
15. Test keyboard navigation.
16. Test all phone, WhatsApp, map and social links.
17. Test the enquiry flow.
18. Do not add unnecessary features simply because they are technically possible.

---

# 29. Suggested breakpoint behavior

Use sensible responsive breakpoints.

Desktop:
- 1200px+
- Full navigation
- Multi-column sections

Tablet:
- ~768–1199px
- Reduced spacing
- 2-column grids

Mobile:
- <768px
- Hamburger navigation
- Single-column sections
- Sticky contact bar

Do not design around a single specific device width.

---

# 30. V1 acceptance criteria

The website is ready for initial launch when:

- [ ] Loads correctly on desktop
- [ ] Loads correctly on mobile
- [ ] Navigation works
- [ ] Hero CTA works
- [ ] Phone link works
- [ ] WhatsApp link works
- [ ] Courses display correctly
- [ ] Gallery works
- [ ] Reviews display correctly
- [ ] Public Google Drive video embeds work
- [ ] Enquiry form works
- [ ] Google Maps link works
- [ ] Social links work
- [ ] Mobile sticky CTA works
- [ ] Images have alt text
- [ ] No TypeScript errors
- [ ] Production build succeeds
- [ ] No broken links
- [ ] No invented business information
- [ ] Lighthouse/performance issues have been reviewed

---

# 31. Important V1 scope boundary

Do NOT build these yet:

- User accounts
- Admin dashboard
- Booking engine
- Online payments
- Database
- CMS
- Automated WhatsApp API
- CRM
- Instructor scheduling
- Student portal
- Complex analytics

These can be added after the business has used the website for a while and there is a demonstrated need.

---

# 32. Future roadmap

### V1 — Free

Website + WhatsApp + enquiry form + Google Drive videos.

### V2 — Paid domain

Custom domain + professional email + improved SEO.

### V3 — Business tools

Admin panel + enquiry management + gallery/review management.

### V4 — Booking

Lesson scheduling + availability + reminders.

### V5 — Payments

Online booking/payment if the business actually needs it.

The architecture should allow these additions without rebuilding the public website.

---

# 33. First Antigravity task

Do not build everything in one generation.

Start with:

1. Initialize the project.
2. Set up React + TypeScript + Vite + Tailwind.
3. Create the responsive design system.
4. Create the business configuration.
5. Build Header + Hero + Why Choose Us + Courses + Contact + Footer.
6. Make the desktop and mobile versions polished.
7. Run the build.
8. Show the result before proceeding to Gallery, Reviews and Video Testimonials.

After the first stage is visually approved, continue section-by-section.

## Final product principle

The website should feel like a real local business website, not an AI-generated template.

Prioritize:

**Trust → clarity → speed → mobile usability → enquiry conversion.**
