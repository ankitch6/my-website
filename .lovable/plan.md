

# Plan: Vibrant Color Palette Refresh + Photo Shop Page

## 1. Vibrant Color Palette Update

Update `src/index.css` to replace the current muted pastel palette with a more vibrant, modern version while keeping the nature-inspired identity:

**Current palette** (muted sage, dusty rose, cream):
- Primary: `145 25% 45%` (dull sage)
- Secondary: `12 35% 85%` (faded rose)
- Accent: `20 50% 70%` (muted terracotta)

**New palette** (vibrant but still harmonious):
- Primary: `160 60% 40%` (vivid teal-green)
- Secondary: `340 55% 75%` (vibrant pink)
- Accent: `25 80% 60%` (rich coral/orange)
- Background: keep light cream base but slightly brighter
- Custom tokens updated accordingly (sage, terracotta, rose, gradients, shadows)

Dark mode tokens will also be updated to match the new vibrancy.

## 2. New "Photo Shop" Page

Create a new route `/shop` with a page showcasing photos available for purchase as prints. This will be a simple showcase with an inquiry/contact form -- no payment processing.

### Files to create/modify:

**New: `src/pages/Shop.tsx`**
- Reuses the Navigation and Footer components
- Hero banner for the shop ("Prints & Collections")
- Grid of photos displayed as product cards with:
  - Photo image
  - Title/description
  - Print sizes available (e.g., 8x10, 16x20, 24x36)
  - Starting price displayed
- Clicking a card opens a dialog with:
  - Larger photo preview
  - Size/format options
  - An inquiry form (name, email, message) to request a purchase
  - Links to Unsplash profile
- Uses existing design patterns (framer-motion animations, glass-card style, Dialog component)

**Modify: `src/App.tsx`**
- Add route: `<Route path="/shop" element={<Shop />} />`

**Modify: `src/components/Navigation.tsx`**
- Add "Shop" link pointing to `/shop` using react-router `Link`
- Add "Gallery" link pointing to `/#gallery`

**Modify: `src/components/Gallery.tsx`**
- Add a call-to-action button linking to `/shop` (e.g., "Browse Prints for Sale")

---

## Technical Details

- The Shop page will use the existing `Dialog` component for the inquiry popup
- Photo data will be a static array in `Shop.tsx` with fields: id, src, title, description, sizes (array of {label, price}), category
- The inquiry form will use `mailto:` or a toast confirmation (no backend needed)
- Navigation will use a mix of hash links (for same-page sections) and `react-router-dom` `Link` components (for the `/shop` route)
- All styling follows existing Tailwind + CSS variable patterns
- Framer Motion animations consistent with Gallery component

