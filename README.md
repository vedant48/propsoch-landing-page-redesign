# propsoch-landing-page-redesign

# Part 1 — Analysis

## 1. Current Lighthouse Scores

A Lighthouse navigation audit was performed on the current Propsoch website:

**Website:** https://www.propsoch.com/  
**Audit date:** 22 September 2026  
**Lighthouse version:** 13.4.1  
**Audit type:** Navigation  
**URL audited:** https://www.propsoch.com/

| Category | Score - Mobile | Score - Desktop |
|---|---:|---:|
| **Performance** | **41 / 100** | **91 / 100** |
| **Accessibility** | **84 / 100** | **80 / 100** |
| **Best Practices** | **100 / 100** | **100 / 100** |
| **SEO** | **92 / 100** | **83 / 100** |

![Lighthouse audit Mobile](<1FF34591-D5F1-4157-AB26-971E8691E66D>.png)
![Lighthouse audit Desktop](<C8CD18FF-7D9C-46FC-9317-0AB2C05F1369>.png)

The audit was performed against the production homepage.

### Key Lighthouse observations

The most significant performance issue is **Largest Contentful Paint (LCP)** at **5.9 seconds**, while First Contentful Paint is **1.6 seconds**.

Other notable performance findings include:

- **Speed Index:** 5.3 s
- **Time to Interactive:** 16.0 s
- **JavaScript execution time:** 7.1 s
- **Main-thread work:** 11.9 s
- **Unused JavaScript:** approximately 370 KiB estimated savings
- **Render-blocking resources:** approximately 290 ms estimated savings
- **Legacy JavaScript:** approximately 60 KiB estimated savings

The accessibility audit also identifies issues including insufficient color contrast, buttons without accessible names, invalid ARIA attribute values, and invalid list structure.

---

## 2. Five UX/UI Issues Observed

After reviewing the current Propsoch homepage and the Lighthouse audit, I identified five areas that could be improved.

### Issue 1 — Inconsistent Visual Hierarchy and Typography

The current page contains many different section treatments, with variations in heading sizes, supporting text, labels, card typography and spacing.

This makes individual sections visually distinct, but the page does not always feel like one unified design system.

The homepage moves through multiple content types including:

- Hero
- Trust/logos
- Comparison
- Statistics
- Customer stories
- Project/reality visualization
- 25-day home-buying journey
- Featured media
- Savings/value proposition
- FAQ
- Final CTA

These sections use different visual treatments, which can make the overall experience feel less cohesive.

#### How I would fix it

I would establish a **global typography and spacing system** before redesigning individual sections.

| Element | Proposed system |
|---|---|
| Eyebrow | 12–14px |
| H2 / Section heading | 40–48px desktop |
| H3 | 28–32px |
| Card heading | 20–24px |
| Section intro | 18–20px |
| Body | 16px |
| Small text | 14px |
| Section spacing | 80–120px |
| Card spacing | 24–32px |

The exact values can be adjusted responsively, but the same semantic styles should be reused throughout the page.

This creates consistency between:

**section → card → heading → description → body**

rather than styling each section independently.

---

### Issue 2 — Inconsistent Spacing and Section Rhythm

The relationship between:

**eyebrow → heading → description → content**

changes from one section to another.

The same issue appears inside cards, where padding and the distance between card title, description and supporting content vary.

This creates an inconsistent vertical rhythm when scrolling through a long landing page.

#### How I would fix it

I would introduce a shared spacing scale:

```text
4 → 8 → 12 → 16 → 24 → 32 → 48 → 64 → 80 → 96 → 120px
```

And define standard section patterns.

#### Standard section header

```text
Eyebrow
   ↓ 12px
Heading
   ↓ 16px
Description
   ↓ 40–48px
Content
```

#### Standard card

```text
Card padding
   ↓
Label / eyebrow
   ↓ 8px
Card heading
   ↓ 8px
Card description
   ↓ 16px
Supporting content / CTA
```

This would make the entire page feel designed as **one product rather than a collection of individually designed sections**.

---

### Issue 3 — Mobile Content Density and Interaction

The homepage contains a significant amount of information, including comparison content, statistics, customer stories, project intelligence, the 25-day journey, media, savings information and FAQs.

On desktop, much of this information can be presented side-by-side. On mobile, the same structures can become dense and require excessive scrolling or horizontal interpretation.

The comparison and customer-story areas are particularly important because they contain information that users need to understand rather than simply scan.

#### How I would fix it

I would design mobile layouts independently rather than simply stacking the desktop layout.

#### Comparison

**Desktop:**

```text
             Local Broker     Online Portal     Propsoch
Transparency      —               —                ✓
Research          —               —                ✓
...
```

**Mobile:**

```text
[ Propsoch ] [ Broker ] [ Portal ]

Transparency
✓ Independent guidance

Research
✓ In-depth project analysis
```

#### Customer stories

**Desktop:**

```text
Story information  |  Large video  |  Story selector
```

**Mobile:**

```text
Heading
↓
Video
↓
Quote
↓
Customer details
↓
Horizontal story selector
```

This keeps important information accessible without forcing users to understand a complex desktop composition on a small screen.

---

### Issue 4 — Accessibility Issues

The Lighthouse report identifies several concrete accessibility problems.

Most notably:

- Insufficient color contrast
- Buttons without accessible names
- Invalid ARIA attribute values
- Incorrect list structure

These issues matter because accessibility is not only about visual appearance; interactive elements also need to be understandable to users navigating with assistive technologies.

#### How I would fix it

I would address this at both the design-system and implementation levels.

**Visual accessibility**

- Ensure text/background combinations meet WCAG contrast requirements.
- Avoid using low-contrast muted text for important information.
- Ensure interactive states remain distinguishable.

**Interactive accessibility**

- Give every icon-only button an accessible name.
- Use semantic `<button>` elements for actions.
- Use meaningful `aria-label` values only where necessary.
- Correct invalid ARIA attributes.
- Ensure lists use appropriate `<ul>`, `<ol>` and `<li>` structures.

**Keyboard accessibility**

- Provide visible focus states.
- Ensure interactive elements can be reached using keyboard navigation.
- Maintain logical tab order.

This allows the visual redesign to improve accessibility rather than treating accessibility as a separate layer added later.

---

### Issue 5 — Heavy JavaScript and Media Impacting Performance

Performance is the most significant technical issue identified by the Lighthouse audit.

The current audit gives the website a **46/100 Performance score**. The largest issue is the **5.9-second LCP**, while Time to Interactive is **16 seconds**.

The report also identifies:

- 7.1 s JavaScript execution
- 11.9 s main-thread work
- 370 KiB estimated unused JavaScript
- 290 ms potential savings from render-blocking resources
- 350 KiB potential savings from cache lifetime improvements
- 46 KiB potential savings from image delivery
- 60 KiB potential savings from legacy JavaScript

#### How I would fix it

I would prioritize the **above-the-fold experience** first.

##### Images

- Use responsive image sizes.
- Serve WebP/AVIF where appropriate.
- Avoid loading oversized images.
- Add explicit width/height to reduce layout shifts.
- Lazy-load below-the-fold images.

##### Video

- Avoid loading full video resources immediately.
- Use lightweight poster images.
- Load video only when required.
- Consider interaction-based loading for testimonial videos.

##### JavaScript

- Remove unused dependencies.
- Code-split large sections.
- Lazy-load non-critical components.
- Defer third-party scripts.
- Reduce unnecessary client-side JavaScript.
- Keep the hero as lightweight as possible.

##### Caching

- Improve cache headers for static assets.
- Use immutable hashed assets where possible.
- Serve assets through an appropriate CDN.

The goal would be to improve the initial rendering experience without removing the content that makes Propsoch valuable.

---

## 3. Summary of the Analysis

The current Propsoch website already contains a strong amount of **content, social proof and product information**, but the analysis shows opportunities across three major areas.

### 1. Design consistency

Create a single visual system for:

**Typography → spacing → cards → buttons → section headers → responsive behavior**

### 2. User experience

Reorganize dense information into a clearer narrative:

> **Problem → Propsoch's approach → Why it's different → Proof → Customer stories → Intelligence → Guided journey → Value → FAQ → CTA**

### 3. Technical quality

Prioritize:

> **LCP → JavaScript execution → main-thread work → media optimization → accessibility → SEO metadata**

The Lighthouse audit establishes the following baseline:

**Performance: 46 | Accessibility: 84 | Best Practices: 100 | SEO: 92**

This baseline can be used to compare the redesigned implementation after deployment and optimization.
