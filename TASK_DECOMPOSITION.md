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