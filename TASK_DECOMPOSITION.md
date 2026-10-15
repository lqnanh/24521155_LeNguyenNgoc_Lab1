## T-01: Semantic DOM landmarks
- Description: Build the page structure using semantic HTML elements.
- Contract:
  - Use 0 <div> elements
  - Use exactly one <h1> element.
  - The skip link must be the first focusable element, and its href must match the id of the <main> element.
  - Include the following landmarks: <header>, <nav>, <main>, and <footer>.
- Verify:
  - Open DevTools → Accessibility and verify that all required landmarks are present.
  - Press Tab to verify that the skip link receives focus first, then press Enter to navigate to the main content.
  - Search for "<div" in index.html and verify that there are zero results.
- Commit: feat(html): semantic landmark tree

## Exercise 2: Enterprise Developer Portfolio

### T-02A: Tokens & Reset
- Contract: reset box-sizing; all colors are CSS variables in :root; hex codes ONLY appear in the :root block
- Verify: DevTools > Computed shows variables; search for hex outside :root = 0
- Commit: feat(css): tokens & reset

### T-02B: 2D Grid Layout
- Contract: .project-grid uses repeat(auto-fit, minmax(...)); uses gap, no margin on children; no horizontal scroll at 375px
- VVerify: Device toolbar at 375px  
- Commit: feat(css): responsive grid

### T-02C: Theme Engine
- Contract: localStorage key 'theme' ('light' | 'dark'); #theme-btn button has aria-pressed; no inline onclick
- Verify: toggle multiple times + reload, Console shows 0 errors
- Commit: feat(js): dark mode engine

## Exercise 3: Component Architecture & State Modeling

### E3-1: Hero
- The img has explicit width and height attributes.
- The hero image must NOT be lazy-loaded.
- Exactly one headline (h2) and one pitch paragraph.

### E3-2: Theme switcher
- The label is fixed as "Dark mode".
- aria-pressed reports the current state.
- The icon is marked aria-hidden.

### E3-3: Skills matrix
- Each skill group is laid out with CSS Grid.
- Badges inside a group are laid out with Flexbox wrap.

### E3-4: Project cards
- Each card is an independent <article>.
- Each card contains tags, a description, and a link.
- Each link has a clear accessible name.

### E3-5: Contact form
- data-state is one of: idle, submitting, success, error.
- Double-submit is blocked.
- Output is rendered with textContent (innerHTML is forbidden).

### Global constraints
- 0 <div> elements.
- Exactly one <h1>.
- Headings are sequential.
- Zero hex values outside the token block.
- Zero inline handlers (onclick=).
- No added libraries.
- No horizontal scroll at 375px.

### Form state machine
- idle -> submitting
- submitting -> success
- submitting -> error
- success -> idle (when the user types again)
- error -> idle (when the user types again)