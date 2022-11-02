import { HasFormatter } from "../interfaces/HasFormatter"

export class Payments implements HasFormatter {
    constructor(
        readonly recipient: string,
        public details: string,
        private amount: number
    ) {

    }

    format() {
        return `${this.recipient} is owed ${this.amount}Rwf for ${this.details}`
    }
} 
