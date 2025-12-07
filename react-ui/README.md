# React UI - AI Workspace

This is the Frontend project for the AI Workspace, built with the following stack (Phase 4):

## Tech Stack
- **React**: 18.2
- **Vite**: 4.4.5
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.3
- **Test Runner**: Vitest + @vitest/ui
- **Routing**: React Router DOM v6

## Project Structure
- `src/pages`: Main view routes (Home, Playground, etc.)
- `src/components`: Reusable UI blocks (Navigation, Buttons, etc.)

## Commands

### Development
Start the dev server:
```bash
npm run dev
```

### Testing
Run unit tests:
```bash
npm test
```
Run tests with UI:
```bash
npm run test:ui
```

### Building
Build for production:
```bash
npm run build
```

## Key Concepts & Learnings

### 1. Functions & Events
In React, we often use **Arrow Functions** for event handlers. We pass the *function definition* (not the result call) to the element.

```tsx
// 1. Define the function (Arrow Syntax)
const handleButtonClick = () => {
  alert("Clicked!");
};

// 2. Use it in JSX (Pass the function, don't call it)
// ✅ Correct: {handleButtonClick}
// ❌ Incorrect: {handleButtonClick()} <-- calling it immediately
<button onClick={handleButtonClick}>Click Me</button>
```

### 2. Client-Side Routing
Modern apps don't reload the page on every click. We use `react-router-dom` to handle this.

*   **`BrowserRouter`**: The main wrapper that watches the URL.
*   **`Routes` & `Route`**: The rules engine. "If URL is X, show Component Y".
    ```tsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
    ```
*   **`Link`**: The special component that replaces the standard HTML `<a>` tag.
    *   **Why?**: Standard `<a>` tags cause the browser to **refresh** the page (reloading all scripts).
    *   **How**: `<Link>` intercepts the click, updates the URL, and swaps the component *instantly* without a refresh (Single Page Application feel).
    ```tsx
    // ❌ OLD HTML: Causes full page reload
    <a href="/playground">Go to Playground</a>

    // ✅ REACT ROUTER: Instant swap, no reload
    <Link to="/playground">Go to Playground</Link>
    ```

### 3. Passing Arguments to Events
If you need to pass data (like an ID) to an event handler, you **must wrap it** in an arrow function.

```tsx
// ❌ WRONG: Calls deleteItem(5) immediately when page loads
<button onClick={deleteItem(5)}>Delete</button>

// ✅ CORRECT: Creates a function that calls deleteItem(5) ONLY when clicked
<button onClick={() => deleteItem(5)}>Delete</button>
```

### 4. Unit Testing Guide
We use **Vitest** (test runner) and **React Testing Library** (component rendering).

**To run tests:**
```bash
npm test
```

**Basic Test Structure:**
Tests live in files ending with `.test.tsx`.
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    // 1. Render Requirement
    it('renders correctly', () => {
        render(<MyComponent />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    // 2. Interaction Requirement
    it('handles clicks', () => {
        render(<MyComponent />);
        const btn = screen.getByText('Click Me');
        fireEvent.click(btn); // Simulate User Click
        expect(screen.getByText('Clicked!')).toBeInTheDocument();
    });
});
```
