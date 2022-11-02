import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        public details: string,
        private amount: number
    ) {

    }

    format() {
        return `${this.client} owes ${this.amount}Rwf for ${this.details}`
    }
} 
