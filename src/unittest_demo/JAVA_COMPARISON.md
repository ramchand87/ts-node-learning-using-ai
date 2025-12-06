# Java vs Node.js: Unit Testing

This guide compares unit testing in Java (JUnit + Mockito) with Node.js (Jest).

## Comparison Table

| Feature | Jest (Node.js) | JUnit + Mockito (Java) |
| :--- | :--- | :--- |
| **Test Runner** | Jest (Built-in) | JUnit 5 |
| **Assertions** | `expect(actual).toBe(expected)` | `Assertions.assertEquals(expected, actual)` |
| **Mocking** | `jest.fn()`, `jest.spyOn()` | `@Mock`, `Mockito.when()` |
| **Setup/Teardown** | `beforeEach()`, `afterAll()` | `@BeforeEach`, `@AfterAll` |
| **Async Testing** | `async/await` in test function | `CompletableFuture` / `Flux.test()` / `CountDownLatch` |

## Key Differences

### 1. Mocking Philosophy
- **Java (Mockito)**: You typically create a specific mock object (`@Mock`) and define its behavior accurately.
- **Jest**: You can "spy" on existing imports or object methods easily with `jest.spyOn(object, 'method')`. Mocking entire modules (`jest.mock('./module')`) is a unique feature of Jest not easily found in Java.

### 2. All-in-One
- **Java**: You often need multiple libraries: JUnit (runner), AssertJ (assertions), Mockito (mocking).
- **Jest**: It is an "all-in-one" framework. Runner, assertions, mocks, and coverage are all included by default.
