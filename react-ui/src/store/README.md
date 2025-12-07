# Redux State Management

This directory contains the global state configuration for the application using **Redux Toolkit**.

## Key Concepts

### 1. The Store (`store.ts`)
The **Store** is the single container that holds the entire state of your application. Think of it as a global database for your frontend.
*   **Provider**: Wraps your app in `App.tsx` so every component can access the store.

### 2. Slices (`slices/*.ts`)
A **Slice** is a collection of logic for a specific feature. It contains:
*   **State**: The initial data (e.g., `count: 0`, `textList: []`).
*   **Reducers**: Functions that define *how* the state changes (e.g., `increment`, `addText`).
*   **Actions**: Signals dispatched by components to trigger a reducer.

### 3. Hooks (`hooks.ts`)
We created typed versions of standard Redux hooks (`useAppDispatch`, `useAppSelector`) to ensure TypeScript knows the shape of our state.

---

## cheat Sheet: Local State vs. Redux

Here is how the syntax compares between the old `useState` approach and the new Redux approach.

### Reading State (Get Data)
**Old (useState)**:
```tsx
const [count, setCount] = useState(0);
// specific to this component only
```

**New (Redux)**:
```tsx
const count = useAppSelector((state) => state.playground.count);
// accessible by ANY component
```

### Writing State (Update Data)
**Old (useState)**:
```tsx
const handleAdd = () => {
    setCount(count + 1);
};
```

**New (Redux)**:
```tsx
const dispatch = useAppDispatch();
const handleAdd = () => {
    dispatch(increment()); // We dispatch an "Action"
};
```
*   **Why?** In Redux, components don't change data directly. They ask the store to do it. This makes debugging easier because you can trace every action.


### Where is the Logic?
*   **Old**: Logic (e.g., `textList.filter(...)`) was inside the Component.
*   **New**: Logic is moved to the **Slice** (`playgroundSlice.ts`). The component just handles the UI events.

---

## Power Use Case: The "Disconnected" Scenario
What if **Component A** starts a process (like fetching data) and the user navigates to **Component B** before it finishes?

1.  **Without Redux**: Component A dies (unmounts). The fetch typically dies or the result is lost. Component B knows nothing.
2.  **With Redux**:
    *   **Component A** dispatches `FETCH_START`.
    *   **Redux Store** (which lives *outside* the components) handles the fetch.
    *   **Component A** is unmounted (User navigates away).
    *   Fetch completes. Store updates state to `SUCCESS`.
    *   **Component B** (connected to Store) sees `SUCCESS` and notifies the user.

**Key Takeaway**: The **Data** survives even if the **UI** that requested it is destroyed.
