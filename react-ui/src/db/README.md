# IndexedDB Persistence Layer

This folder contains the logic for saving our application state to the browser's **IndexedDB**.

## Key Concepts

### 1. What is `idb`?
[idb](https://www.npmjs.com/package/idb) is a tiny **npm package** (~2kb).
*   **Problem**: The native browser API for IndexedDB is old and "event-based" (callback hell).
*   **Solution**: `idb` wraps it in **Promises**, allowing us to use modern `async/await` syntax.
*   We installed it via `npm install idb`.

### 2. `MyReduxDB` Interface
In `database.ts`, you see:
```typescript
interface MyReduxDB extends DBSchema {
    'redux-state': {
        key: string;
        value: any;
    };
}
```
*   **Arbitrary Name?**: Yes, `MyReduxDB` is just a TypeScript name we chose.
*   **Purpose**: It tells TypeScript exactly what our database looks like.
    *   It has one store named `'redux-state'`.
    *   The data inside has a string key (e.g., `'playground'`) and any value.
*   Without this, TypeScript wouldn't know that `db.get('redux-state', ...)` is valid.

### 3. Wiring: How it Works
The `Playground` component **does not know** about the database. It only talks to Redux.
The magic happens in `App.tsx` via the `<DB_Syncer />` component.

#### Flow A: Loading (Hydration)
1.  **App Starts**: `<DB_Syncer>` mounts.
2.  **Read DB**: It calls `loadState()`.
3.  **Dispatch**: If data exists, it dispatches `setLoadedState(data)` to Redux.
4.  **UI Updates**: Redux updates, and `Playground` re-renders with the saved data.

#### Flow B: Saving (Subscription)
1.  **User Acts**: User clicks "Count" in `Playground`.
2.  **Redux Updates**: Store state changes.
3.  **App Listens**: `store.subscribe(...)` in `App.tsx` fires.
4.  **Write DB**: We take the *new* state and call `saveState(state)`.

### 4. Special Action: `setLoadedState`
You asked: *"Where is `setLoadedState` used?"*

It is used **Redux Integration Flow A (Loading)**.
*   **Definition**: It is a reducer in `playgroundSlice.ts`.
*   **Purpose**: It is the "Restore Point" action. It tells Redux: *"Ignore whatever default state you have (count=0). Here is the data I found on the hard drive. Use this instead!"*
*   **Trigger**: It is only dispatched once, inside `App.tsx`, immediately after the app launches and reads from the database.

### 5. DB_NAME vs STORE_NAME
You asked: *"What is the difference?"*

*   **`DB_NAME` ('react-ui-db')**:
    *   Think of this as the **Excel File** (`my_data.xlsx`).
    *   It is the container for the entire application.

*   **`STORE_NAME` ('redux-state')**:
    *   Think of this as a **Sheet** inside that Excel file (`Sheet1`, `Sheet2`).
    *   IndexedDB allows multiple stores (tables) inside one database.
    *   We currently only use one store to keep all Redux data.

---

## FAQ: Advanced Concepts

### Q1: Can I use multiple Stores ("Sheets")?
**YES.** This is very common.
**Example**: An E-commerce App.
*   **Database**: `shop-db`
*   **Store 1 (`products`)**: Holds 10,000 cached products.
*   **Store 2 (`cart`)**: Holds the user's current valid session cart.
*   **Store 3 (`audit-logs`)**: Holds user clicks to sync later.
*   **Why?** You might want to clear `cart` on logout but keep `products` cached. Segregating them makes this easy.

### Q2: Can I use multiple Databases?
**YES**, but it's less common.
*   **Use Case**: You host two completely different apps on the same domain (e.g., `myapp.com/admin` and `myapp.com/shop`). You might give them separate DBs (`admin-db` and `shop-db`) to avoid naming conflicts.

### Q3: How do I see this in the Browser?
1.  Open **Developer Tools** (F12 or Right Click -> Inspect).
2.  Go to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox).
3.  Expand **IndexedDB** in the left sidebar.
4.  You will see `react-ui-db`. Click it to see the `redux-state` store and your data!
