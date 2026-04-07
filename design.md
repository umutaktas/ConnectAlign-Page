# Design System Document: Precision Atmosphere

## 1. Overview & Creative North Star: "The Kinetic Architect"
This design system moves away from the static, boxy layouts of traditional SaaS. Our Creative North Star is **The Kinetic Architect**. We treat the interface not as a flat screen, but as a structured environment of light, depth, and intentionality.

To achieve "Precision Atmosphere," we reject the "template" look. We favor asymmetric balance—where a heavy headline on the left is balanced by generous negative space on the right. We use overlapping elements and tonal layering to create a high-trust, editorial feel that suggests every pixel was placed with purpose.

---

## 2. Color & Tonal Depth
Our palette is anchored by the energy of `#FF6F00` (Orange), tempered by a sophisticated suite of cool greys and deep professional blues.

### The "No-Line" Rule
**Borders are a relic.** To maintain a premium feel, 1px solid borders for sectioning are prohibited. Boundaries must be defined through:
- **Background Shifts:** Use `surface-container-low` for a sidebar sitting against a `surface` background.
- **Tonal Transitions:** Define areas using soft shifts between `surface-container-lowest` and `surface-container-highest`.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine paper.
- **Base:** `surface` (#f9f9fc)
- **Primary Workspaces:** `surface-container-low` (#f3f3f6)
- **Elevated Interactive Cards:** `surface-container-lowest` (#ffffff)
- **Overlays/Modals:** `surface-bright` (#f9f9fc) with Glassmorphism.

### Signature Textures
For high-impact CTAs or Hero sections, avoid flat orange. Use a **Directional Glow**: a linear gradient from `primary` (#9e4200) at 0% to `primary-container` (#ff6f00) at 100%. This adds "soul" and prevents the orange from feeling "plastic."

---

## 3. Typography: Editorial Authority
We use **Inter** exclusively, but we utilize its full variable weight spectrum to create an "Editorial Hierarchy."

- **Display (Lg/Md/Sm):** Used for big data or hero statements. Set with tight letter-spacing (-0.02em) to feel "machined."
- **Headline (Lg/Md/Sm):** Your primary narrative voice. Use `headline-lg` for module headers to establish immediate trust.
- **Title & Body:** `title-md` for sub-sections; `body-md` for general content.
- **The Contrast Rule:** High-contrast pairing is key. Pair a `display-md` (bold) with a `body-sm` (regular) to create a sophisticated, modern layout rhythm.

---

## 4. Elevation & Depth: The Layering Principle
We convey importance through **Tonal Layering** rather than structural lines.

- **Stacking:** Place a `surface-container-lowest` card on top of a `surface-container-low` background. This creates a natural "lift" that feels light and professional.
- **Ambient Shadows:** For floating elements (menus/modals), use "The Atmospheric Shadow":
- **Blur:** 24px - 40px
- **Opacity:** 4%-6%
- **Color:** Tint the shadow with `on-surface` (#1a1c1e) to ensure it feels like a natural obstruction of light.
- **The "Ghost Border":** If accessibility requires a border (e.g., input fields), use `outline-variant` at **20% opacity**. Never use 100% opaque outlines.
- **Glassmorphism:** For floating navigation or tooltips, use `surface-container-lowest` at 80% opacity with a `backdrop-filter: blur(12px)`.

---

## 5. Components & Module Guidelines

### Primaries
- **Buttons:** All buttons use `rounded-lg` (8px).
- *Primary:* Gradient fill (Primary to Primary-Container), white text.
- *Secondary:* `secondary-container` background with `on-secondary-container` text. No border.
- **Input Fields:** Use `surface-container-highest` for the field body. On focus, transition to a `ghost border` using the `primary` color at 40% opacity.
- **Cards & Lists:** **Strictly forbid divider lines.** Use 16px or 24px of vertical white space to separate list items. For complex data, alternate background colors between `surface-container-low` and `surface-container-lowest`.

### Module: Internal Communication
- **Atmosphere:** Use `tertiary` (#00629f) accents to distinguish communication from "action" items.
- **The Feed:** Message bubbles should not have tails. Use `rounded-lg` for all corners except the "origin" corner to indicate directionality.

### Module: Surveys & Feedback
- **Precision Scale:** For rating scales, use `secondary-fixed-dim` for unselected states. Upon hover, use a "pulsing" `primary-container` glow.
- **Focus Mode:** When a user is answering a question, dim the rest of the UI using a `surface-dim` overlay at 30% to drive "Precision Focus."

### Module: Document Management
- **The "Folio" View:** Documents should be presented on `surface-container-lowest` with a subtle `outline-variant` (10% opacity) to mimic the edge of a physical page.
- **Action Anchors:** Floating Action Buttons (FABs) for "Upload" should use the Signature Texture gradient to stand out against the grey-blue workspace.

---

## 6. Do's and Don'ts

### Do
- **Do** use "Breathing Room." If you think there’s enough padding, add 8px more.
- **Do** use asymmetric layouts. Shift a module to the right and leave the left for high-level metadata.
- **Do** use `primary` orange sparingly as a "heat map" for where the user’s eye should go first.

### Don't
- **Don't** use 1px black or grey borders. They break the "Atmosphere."
- **Don't** use pure black (#000) for text. Use `on-surface` (#1a1c1e) for a softer, high-end feel.
- **Don't** use standard "drop shadows." If it doesn't look like ambient light, it's too heavy.
- **Don't** crowd the interface. If a screen feels "busy," move secondary actions into a `glassmorphism` overflow menu.