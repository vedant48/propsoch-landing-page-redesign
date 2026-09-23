# Propsoch Landing Page — Part 1 Analysis

## 1. Current Lighthouse Scores

A Lighthouse navigation audit was performed on the current Propsoch website.

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

![Lighthouse audit Mobile](./public/audit/lighthouse-audit-mobile.png)

*Caption: Lighthouse audit of the current Propsoch production homepage on mobile.*

![Lighthouse audit Desktop](./public/audit/lighthouse-audit-desktop.png)

*Caption: Lighthouse audit of the current Propsoch production homepage on desktop.*

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

# 2. UX/UI Issues and Redesign Improvements

## Issue 1 — Hero: Unclear Value Proposition

### Problem

The current homepage opens with:

> “Blindly trusting a broker's Sales Pitch? Fake Claims? Sales Pitch? Fake Claims? Half Info?”

The messaging focuses heavily on the problems with traditional property buying before clearly explaining what Propsoch does. The primary CTA, **“Propsoch Kar”**, is also brand-specific and requires the user to understand what action it represents.

On desktop, the hero has enough space for the message, but the fragmented headline still creates multiple competing ideas.

On mobile, the headline wraps into more lines, increasing the amount of text users need to process before reaching the CTA.

### Impact

The first viewport should quickly communicate:

1. What Propsoch offers
2. Why it is useful
3. What the user should do next

The original hero makes the user process the problem statement before getting to the solution.

### Solution

The redesign changes the hero to a direct value proposition:

> **“Make a smarter home-buying decision.”**

It is supported by:

- **“INDEPENDENT. UNBIASED. ON YOUR SIDE.”**
- Supporting explanation of the service
- Clear city selection
- **“Book a free call”** CTA
- Trust indicators such as **1000+ families guided**
- Supporting proof around independent advice and better buying decisions

This moves the communication from **problem-first** to **value-first**.

### Images

![Issue 1 — Current hero desktop](./public/analysis/issue-1-current-desktop.png)

*Caption: Current Propsoch hero on desktop — problem-focused messaging and unclear primary action.*

![Issue 1 — Current hero mobile](./public/analysis/issue-1-current-mobile.png)

*Caption: Current Propsoch hero on mobile — headline wrapping increases the amount of information users must process.*

![Issue 1 — Redesigned hero](./public/analysis/issue-1-solution.png)

*Caption: Redesigned hero — direct value proposition, supporting explanation, clear CTA and trust indicators.*

---

## Issue 2 — Comparison Section: High Information Density

### Problem

The original **“How are we different?”** section presents a large comparison table covering multiple dimensions, including:

- Sales Practices
- Transparency
- Project Curation
- Spam
- Post-sales support
- Site Visits
- Negotiation
- In-Depth Reports
- Advisor

On desktop, the table can be read horizontally, but it presents many rows and competing pieces of information at once.

On mobile, the same information requires more vertical scanning and scrolling, making it harder to understand the core differentiation quickly.

### Impact

The user needs to read through the comparison before understanding the main product difference.

The section therefore communicates a lot of information, but the hierarchy between the **main message**, **supporting evidence**, and **individual comparison points** is weak.

### Solution

The redesign reframes the section around a clearer statement:

> **“Same home search. A completely different experience.”**

Instead of presenting the comparison as one large dense table, the redesign uses stronger visual grouping and separates the Propsoch experience from the traditional broker experience.

This makes the section easier to scan on desktop and allows the information to translate into a more natural vertical flow on mobile.

### Images

![Issue 2 — Current comparison desktop](./public/analysis/issue-2-current-desktop.png)

*Caption: Current comparison section on desktop — multiple comparison rows compete for attention.*

![Issue 2 — Current comparison mobile](./public/analysis/issue-2-current-mobile.png)

*Caption: Current comparison section on mobile — dense comparison content requires extended vertical scanning.*

![Issue 2 — Redesigned comparison](./public/analysis/issue-2-solution.png)

*Caption: Redesigned comparison — stronger hierarchy and grouped information make the difference easier to scan.*

---

## Issue 3 — Customer Stories: Video Dominates the Viewport

### Problem

The original Customer Stories section is heavily video-led. The video presentation can occupy most of the available viewport while the customer's context — such as who they are, where they are from, and their experience — is not always visible at the same time.

The original presentation also starts the video experience without requiring an explicit user action.

On mobile, the available viewport is significantly smaller, so the video can push the speaker information further below the fold.

### Impact

The user may encounter the media before understanding:

- Who the customer is
- What their story is about
- Why the story is relevant

Auto-playing media can also compete with the user's attention before they have intentionally chosen to watch it.

### Solution

The redesign uses a **poster-first video experience**:

- The story is represented by a static poster initially.
- Video playback begins only after user interaction.
- The selected story displays the customer's name, location, role and quote alongside the media.
- Desktop uses a structured story layout with a story selector.
- Mobile presents the story content in a vertical sequence followed by the story selector.

This keeps the context and the media connected instead of making the user discover the context after interacting with the video.

### Images

![Issue 3 — Current customer stories desktop](./public/analysis/issue-3-current-desktop.png)

*Caption: Current Customer Stories section on desktop — video-led presentation dominates the available viewport.*

![Issue 3 — Current customer stories mobile](./public/analysis/issue-3-current-mobile.png)

*Caption: Current Customer Stories section on mobile — limited viewport height makes the speaker context easier to push below the fold.*

![Issue 3 — Redesigned customer stories](./public/analysis/issue-3-solution.png)

*Caption: Redesigned Customer Stories — poster-first media with customer context and story navigation kept together.*

---

## Issue 4 — 25-Day Journey: Long, Dense Timeline

### Problem

The original **25-day home-buying journey** contains several stages:

- Today
- Week 1 — Discovery / Longlist
- Week 2 — Site Visits
- Week 3 — Deep Dive
- Last Week — Negotiation / Closure

The content is useful, but the timeline creates a long vertical sequence of information.

A specific desktop interaction issue is that the **right-hand timeline section needed to be independently scrolled** to reveal more weeks while the left section remained visible separately.

On mobile, the same sequence becomes an even longer vertical scroll because the two-column desktop structure collapses into a single-column flow.

### Impact

The user has to spend more effort navigating the timeline rather than understanding the overall journey.

On desktop, independently scrolling the right section adds interaction complexity because the user must discover that more timeline content exists inside that area.

On mobile, the same amount of information increases page length and pushes later stages further down the page.

### Solution

The redesign keeps the journey structure but changes the interaction model.

The **left section is fixed at the top**, keeping the main heading, CTA and testimonial visible as the user progresses through the journey.

The **right section becomes the scrollable timeline**. As the user scrolls, only the right-side journey content progresses through the remaining weeks and reveals all the week cards.

This creates a focused interaction:

**Fixed context on the left → progressive journey on the right**

The redesign also makes the five stages visually clearer:

1. **Start**
2. **Week 1 — Discovery & shortlisting**
3. **Week 2 — Site visits**
4. **Week 3 — Deep dive**
5. **Last week — Negotiation & closure**

This preserves the original 25-day proposition while reducing the need for the user to navigate two independent page areas.

### Images

![Issue 4 — Current 25-day journey](./public/analysis/issue-4-current.png)

*Caption: Current 25-day journey — the right-side timeline requires additional scrolling to reveal later weeks.*

![Issue 4 — Redesigned 25-day journey](./public/analysis/issue-4-solution.png)

*Caption: Redesigned 25-day journey — the left context remains fixed while the right timeline scrolls through all journey stages.*

![Issue 4 — Redesigned 25-day journey mobile](./public/analysis/issue-4-solution-mobile.png)

*Caption: Redesigned 25-day journey on mobile — the journey is converted into a single responsive sequence while preserving the stage hierarchy.*

---

## Issue 5 — Inconsistent Visual Hierarchy and Typography

### Problem

Across the original homepage, headings, eyebrow text, descriptions, card content and supporting text do not always follow a consistent typographic hierarchy.

Different sections can therefore feel like separate visual systems rather than parts of one product experience.

On desktop, the larger viewport makes these differences less restrictive, but inconsistent heading scale and supporting text still reduce visual continuity between sections.

On mobile, typography becomes more important because limited width causes headings and supporting content to wrap. Inconsistent sizing and line-height can make some sections feel disproportionately dense while others feel too sparse.

### Impact

Inconsistent typography makes it harder to identify:

- Section hierarchy
- Primary versus secondary information
- Important actions
- Supporting content

This increases cognitive load and reduces the feeling of a cohesive product experience.

### Solution

The redesign establishes a consistent typographic system across the page:

- Consistent eyebrow treatment
- Consistent section heading scale
- Controlled heading line-height
- Consistent body text sizing
- Clear card heading / subheading / body hierarchy
- Responsive typography for smaller screens
- Consistent emphasis for important phrases and metrics

The result is a clearer visual hierarchy that remains consistent from the hero through the supporting sections.

### Images

![Issue 5 — Current typography](./public/analysis/issue-5-current.png)

*Caption: Current homepage typography — heading and supporting-text hierarchy varies between sections.*

![Issue 5 — Redesigned typography](./public/analysis/issue-5-solution.png)

*Caption: Redesigned typography — consistent type hierarchy creates a more unified visual system.*

---

## Issue 6 — Inconsistent Spacing and Section Rhythm

### Problem

The original homepage uses different amounts of padding, gaps and whitespace between sections and content groups.

On desktop, large screen space can make these differences less noticeable, but some sections have significantly different vertical density.

On mobile, inconsistent spacing becomes more visible because every additional gap contributes directly to page length.

### Impact

Inconsistent spacing affects the perceived rhythm of the page.

Users should be able to visually distinguish:

**Section → heading → supporting text → content → CTA → next section**

When spacing changes unpredictably, sections can feel disconnected and the page becomes harder to scan.

### Solution

The redesign introduces a more systematic spacing approach:

- Consistent section padding
- Consistent spacing between eyebrow, heading and description
- Standardized card gaps
- Consistent CTA spacing
- Controlled mobile spacing
- Clear separation between major sections

This creates a predictable vertical rhythm across the entire landing page.

### Images

![Issue 6 — Current spacing](./public/analysis/issue-6-current.png)

*Caption: Current homepage spacing — section density and vertical gaps vary across the page.*

![Issue 6 — Redesigned spacing](./public/analysis/issue-6-solution.png)

*Caption: Redesigned spacing — standardized section padding and content gaps create a consistent page rhythm.*

---

# 3. Design Decisions Summary

The redesign focuses on reducing friction rather than simply removing content.

| Original Experience | Redesign Approach |
|---|---|
| Problem-heavy hero | Direct value proposition |
| Dense comparison table | Grouped visual comparison |
| Video-first customer stories | Poster-first, user-initiated video |
| Long 25-day timeline | Fixed context + scrollable journey |
| Inconsistent typography | Unified type hierarchy |
| Inconsistent spacing | Systematic spacing scale |
| Media-heavy production page | Performance-aware media and asset loading |

The overall approach was to preserve the important information from the original Propsoch homepage while improving **hierarchy, scanability, responsive behavior, interaction clarity and perceived performance**.

---

# 4. Implementation Notes

The redesigned landing page was implemented using:

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- Responsive layouts for desktop and mobile
- Optimized responsive images
- User-initiated video playback
- Reusable section and card patterns
- Consistent typography and spacing tokens

The redesign is deployed at:

**https://propsoch-landing-page-redesign.vercel.app/**

---

# 5. Conclusion

The redesign does not attempt to replace the information architecture of Propsoch's existing homepage. Instead, it reorganizes the same core information around a clearer user journey:

**Understand the value → See the difference → Build trust → Understand the process → Take action**

The main design goal was to reduce cognitive load while keeping the depth of information expected from a home-buying advisory product.
