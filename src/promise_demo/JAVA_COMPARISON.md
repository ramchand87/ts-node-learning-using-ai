# Java vs Node.js: Asynchronous Programming

This guide compares asynchronous programming in Java (CompletableFuture) with Node.js (Promises).

## Comparison Table

| Feature | Node.js (Promise) | Java (CompletableFuture) |
| :--- | :--- | :--- |
| **Creation** | `new Promise((resolve, reject) => ...)` | `CompletableFuture.supplyAsync(...)` |
| **Chaining** | `.then(value => ...)` | `.thenApply(...)` / `.thenCompose(...)` |
| **Error Handling** | `.catch(err => ...)` | `.exceptionally(...)` |
| **Parallel Execution** | `Promise.all([p1, p2])` | `CompletableFuture.allOf(cf1, cf2)` |
| **Async/Wait** | `await promise` (Native syntax) | `.join()` or `.get()` (Blocking or semi-blocking) |

## Key Differences

### 1. Syntax Sugar (Async/Await)
- **Node.js**: `async/await` is first-class syntax. It makes asynchronous code look synchronous but **non-blocking** (it yields the Event Loop).
- **Java**: Java doesn't have `await`. You usually chain calls or use `.join()` (which blocks the thread, unless in a Virtual Thread context).

### 2. Threading
- **Java**: `CompletableFuture` runs tasks on a `ForkJoinPool` (multi-threaded).
- **Node.js**: Promises run on the **Task Queue** (Microtask Queue) of the single-threaded Event Loop.
