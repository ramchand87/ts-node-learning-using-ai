import { EventEmitter } from 'events';

export class TicketManager extends EventEmitter {
    private supply: number;

    constructor(supply: number) {
        super();
        this.supply = supply;
    }

    buy(email: string, price: number) {
        if (this.supply > 0) {
            this.supply--;
            this.emit('buy', email, price, Date.now());
            console.log(`[TicketManager] Ticket processed for ${email}. Remaining: ${this.supply}`);
        } else {
            this.emit('error', new Error('There are no more tickets left to purchase'));
        }
    }
}
