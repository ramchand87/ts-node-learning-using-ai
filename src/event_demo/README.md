# Event Emitter Demo

This tutorial demonstrates the **Observer Pattern** in Node.js using the built-in `events` module.

## What is Covered?

1.  **Extending EventEmitter**: Creating a custom class (`TicketManager`) that inherits from `EventEmitter`.
2.  **Emitting Events**: Using `this.emit()` to broadcast signals when something happens (e.g., a ticket is bought or an error occurs).
3.  **Handling Events**: Using `.on()` to listen for specific events and execute callback functions.
4.  **Data Passing**: Sending data (arguments) along with the event to the listeners.

## Key Files

*   `TicketManager.ts`: The class that manages ticket supply and emits events.
*   `index.ts`: The consumer that instantiates the manager, registers listeners, and triggers actions.
*   `design.puml`: A sequence diagram visualizing the event flow.

## How to Run

```bash
npm run start:events
```
