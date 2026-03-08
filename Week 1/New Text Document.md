---

# Accessibility & Semantics Notes
## 1. Navigation (`<nav>`)

* Use `<nav>` for site navigation.
* Add `aria-label` if multiple navs exist:

  ```html
  <nav aria-label="Main navigation">
  ```
* Dropdown buttons:

  * `aria-haspopup="true"` → indicates menu exists
  * `aria-expanded="false"` → toggled to `"true"` when open
* Links must have meaningful text.
* Keyboard behavior:

  * Tab moves through top-level links/buttons
  * Enter or Space activates buttons or links

---

## 2. Buttons (`<button>`)

* Default `<button>` is keyboard focusable.
* For expandable elements:

  * `aria-expanded="false"` → toggles to `"true"` when open
  * `aria-controls="id-of-menu"` → points to controlled element
* Always operable with **Enter** and **Space** keys

---

## 3. Links (`<a>`)

* Must have meaningful text (avoid “click here”).
* Navigate via Enter key.
* If link opens a new tab/page, optionally indicate for screen readers.

---

## 4. Forms / Inputs

* Always use `<label>` linked via `for` attribute.
* Inputs must be keyboard operable.
* Use `aria-required` / `aria-invalid` for validation states.
* Tab order should follow logical reading order.

---

## 5. Sections / Headings

* Use `<section>` for thematic blocks with headings `<h1>-<h6>`.
* Headings create **document outline** for screen readers.
* Ensure Tab order follows visual/reading order.
* Use skip links for accessibility:

  ```html
  <a href="#main" class="skip-link">Skip to main content</a>
  ```

---

## 6. Modals / Popups

* Trap focus inside modal while open.
* Esc closes modal.
* Return focus to triggering element after close.
* Use `role="dialog"` and `aria-modal="true"`.

---

## 7. Keyboard Accessibility General Rules

* All interactive elements must be reachable via **Tab**.
* Buttons: activated with **Enter/Space**
* Links: activated with **Enter**
* Avoid keyboard traps.
* Logical focus order matching reading order.
* Visual focus indicators (outline) — CSS later.

---

# Semantics Notes

## 1. `<header>`

* Represents **introductory content or site header**.
* Often contains **logo, navigation, and hero info**.

## 2. `<nav>`

* Contains **primary navigation links**.
* Landmark region for assistive tech.
* Multiple `<nav>` possible; use `aria-label` to distinguish.

## 3. `<main>`

* Represents **main content** of the page.
* Only one `<main>` per page.

## 4. `<section>`

* Thematic block of content with a **heading**.
* Should make sense independently in the document outline.

## 5. `<article>`

* Self-contained content, potentially distributable independently (blog post, news article).
* Should include heading, author, date, etc.

## 6. `<aside>`

* Tangentially related content (sidebar, related links).
* Useful for complementary info, not main flow.

## 7. `<footer>`

* Contains site-wide or section-specific footer content.
* Often has copyright, links, contact info.

## 8. `<div>`

* Generic container for **styling or layout**.
* No semantic meaning.
* Use only when no semantic element fits.

---

## Quick Rule of Thumb

| Element     | Semantic Meaning? | Needs Heading? | Use Case                  |
| ----------- | ----------------- | -------------- | ------------------------- |
| `<section>` | Yes               | Yes            | Thematic block            |
| `<div>`     | No                | No             | Layout / wrapper          |
| `<header>`  | Yes               | Optional       | Page or section header    |
| `<nav>`     | Yes               | No             | Navigation                |
| `<main>`    | Yes               | N/A            | Main content              |
| `<footer>`  | Yes               | Optional       | Footer content            |
| `<article>` | Yes               | Yes            | Self-contained content    |
| `<aside>`   | Yes               | Optional       | Related content / sidebar |

---

You can save this as `accessibility_semantics_notes.md` and refer to it while building any section.

---

If you want, I can also make a **mini “header/navbar specific” checklist** combining **semantics + keyboard/accessibility** — a one-page reference for when you’re coding headers.

Do you want me to make that too?
