import { TicketManager } from './TicketManager';

const ticketManager = new TicketManager(2); // Only 2 tickets available

// 1. Listen for the 'buy' event
ticketManager.on('buy', (email: string, price: number, timestamp: number) => {
    console.log(`[Listener] EMAIL SENT to ${email}`);
    console.log(`[Listener] Details: Price $${price} at ${new Date(timestamp)}`);
});

// 2. Listen for the 'error' event
ticketManager.on('error', (error: Error) => {
    console.error(`[Listener] ERROR: ${error.message}`);
});

console.log('--- Event Emitter Demo Started ---');

// 3. Trigger events
console.log('\nBuying Ticket 1...');
ticketManager.buy('alice@example.com', 20);

console.log('\nBuying Ticket 2...');
ticketManager.buy('bob@example.com', 20);

console.log('\nBuying Ticket 3 (Should fail)...');
ticketManager.buy('charlie@example.com', 20);

console.log('\n--- Demo Finished ---');
