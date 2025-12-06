# Java vs Node.js: Event-Driven Programming

This guide compares the built-in Node.js Event Emitter with Java's event mechanisms (specifically Spring Events).

## Comparison Table

| Feature | Node.js (EventEmitter) | Spring Boot (ApplicationEvent) |
| :--- | :--- | :--- |
| **Definiton** | `class MyClass extends EventEmitter` | `class MyEvent extends ApplicationEvent` |
| **Publishing** | `this.emit('eventName', data)` | `applicationEventPublisher.publishEvent(event)` |
| **Listening** | `myObj.on('eventName', callback)` | `@EventListener` method annotation |
| **Mechanism** | In-memory, synchronous (default) | In-memory, synchronous (default) |

## Key Differences

### 1. String vs Types
- **Node.js**: Events are typically identified by **strings** (`'ticketBought'`, `'userLogin'`). This is dynamic but lacks type safety without strict constants.
- **Java (Spring)**: Events are typically **Classes** (`TicketBoughtEvent`). Listeners listen for the specific *Type* of the event.

### 2. Scope
- **Node.js**: The `EventEmitter` is usually local to a specific object instance. You listen to *that specific object*.
- **Spring**: The `ApplicationEventPublisher` is global to the Application Context. An event published anywhere can be caught by an `@EventListener` anywhere (unless scoped).
