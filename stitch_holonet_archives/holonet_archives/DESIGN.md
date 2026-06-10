---
name: HoloNet Archives
colors:
  surface: '#16130d'
  surface-dim: '#16130d'
  surface-bright: '#3d3931'
  surface-container-lowest: '#100e08'
  surface-container-low: '#1e1b15'
  surface-container: '#221f19'
  surface-container-high: '#2d2a23'
  surface-container-highest: '#38342d'
  on-surface: '#e9e1d7'
  on-surface-variant: '#d0c5b2'
  inverse-surface: '#e9e1d7'
  inverse-on-surface: '#343029'
  outline: '#99907e'
  outline-variant: '#4d4637'
  surface-tint: '#e6c364'
  primary: '#e6c364'
  on-primary: '#3d2e00'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#755b00'
  secondary: '#75d1ff'
  on-secondary: '#003548'
  secondary-container: '#009cce'
  on-secondary-container: '#002e3f'
  tertiary: '#ffb4ad'
  on-tertiary: '#690007'
  tertiary-container: '#ff8a80'
  on-tertiary-container: '#86000c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#75d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#93000e'
  background: '#16130d'
  on-background: '#e9e1d7'
  surface-variant: '#38342d'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-label:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  data-value:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style
The design system is an immersive, high-fidelity digital interface inspired by Galactic Empire terminals and Jedi Temple archives. It evokes the feeling of accessing a secure, authoritative databank located deep within a starship’s core or a planetary capital.

The aesthetic leans heavily into **High-Contrast Minimalist Futuring** with a hint of **Glassmorphism**. It is characterized by deep, near-void backgrounds, crisp data visualizations, and atmospheric "Holographic" overlays. The interface must feel like a functional tool—dense with information yet meticulously organized—to serve a target audience of dedicated lore enthusiasts and researchers. 

The emotional response should be one of "discovery through technology"—serious, intellectual, and slightly cinematic. To achieve the "HoloNet" feel, a subtle scan-line overlay (5% opacity) should be applied globally to the background, creating the illusion of a physical cathode-ray or holographic projection screen.

## Colors
The palette is rooted in the darkness of deep space, using a high-contrast relationship between the void-black background and the luminous gold of the "Classic" Star Wars era.

- **Primary (Gold):** Used for primary actions, headings, and high-importance data. It represents the "Old Republic" and "Imperial" prestige.
- **Secondary (Blue):** Used for information status, holographic links, and Jedi-related content.
- **Tertiary (Red):** Reserved for alerts, errors, and Sith-affiliated data profiles.
- **Surface Strategy:** Use `background_surface` for the main content panels and `background_elevated` for floating sidebars and navigation to create a sense of depth within the terminal.

## Typography
Typography in this design system functions as a hierarchy of data. 

- **Headings:** Utilize *Space Grotesk* (as a high-quality alternative to Orbitron for better digital rendering) in all caps with wide tracking. This creates the "Technical Terminal" look.
- **Body:** *DM Sans* provides a neutral, highly readable counterpoint to the aggressive headings, essential for long-form encyclopedia entries.
- **Data Readouts:** *Space Mono* is strictly for statistics, timestamps, and "encoded" terminal feedback. 

Always ensure uppercase transformation for H1 through H3 to maintain the "Official Archive" tone. Use the gold accent color specifically for data values to make them pop against the muted labels.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy to mimic a physical hardware display. 

- **Desktop:** A 12-column grid with a maximum width of 1440px. Gutters are fixed at 24px to maintain a dense, technical feel.
- **Mobile:** A 4-column grid with 16px margins. 
- **Spacing Rhythm:** All spacing should be increments of 4px. Use larger gaps (48px+) between major content sections to allow the dark background to provide visual breathing room.
- **Sidebars:** Persistent "System Trays" should be docked to the left or right, utilizing `background_elevated` to frame the main content area.

## Elevation & Depth
Elevation is not achieved through soft shadows, but through **Tonal Layering** and **Luminous Outlines**.

1. **Base Layer:** The `background_primary` acts as the "infinite void" behind the screen.
2. **Panel Layer:** `background_surface` with a 1px `border_subtle` outline.
3. **Active/Holographic Layer:** Elements that are "active" or "hovered" should utilize a soft, 4px-8px outer glow using the primary gold color (`#c9a84c`) at 20% opacity. 
4. **Interaction:** When a user interacts with a card, the border should transition from `border_subtle` to the primary gold color, creating a "powering up" effect.

## Shapes
The shape language is industrial and precise. Sharp corners are preferred to evoke the Brutalist architecture of the Empire. 

- **Default:** Use a 0px radius for most containers.
- **Softened Elements:** A maximum of 4px (`rounded-lg`) is permitted for interactive components like buttons and input fields to ensure they are distinct from layout containers.
- **Decorative:** Use "clipped corner" shapes (45-degree angles) on large container headers to reinforce the sci-fi aesthetic.

## Components
- **Buttons:** 
    - **Primary:** Solid Gold (`#c9a84c`) background, black text, 4px radius, all-caps Space Grotesk.
    - **Secondary:** Transparent background, 1px Gold border, Gold text. On hover, fill with 10% Gold opacity.
- **Cards:** Use `background_surface`. Borders are `border_subtle`. On hover, the border changes to Gold and a very subtle Gold glow is applied.
- **Input Fields:** Dark background (`background_primary`), 1px `border_subtle` bottom-border only (terminal style). Focus state changes border to Blue (`#4fc3f7`).
- **Chips/Tags:** Monospace font, 1px border, no background fill. Use Blue for "Jedi/Light" and Red for "Sith/Dark" tags.
- **Scan-lines:** A global CSS overlay using a linear gradient to create 1px dark lines every 4px, set to `pointer-events: none`.
- **Data Lists:** Use alternating row highlights (zebra striping) using `background_elevated` at 30% opacity to assist with readability in dense tables.