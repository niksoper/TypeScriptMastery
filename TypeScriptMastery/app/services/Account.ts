import app = require('app');

export class AccountService {

    private balance: number = 0;

    credit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }

    debit(amount: number): number {
        // allow the player to go into debt
        this.balance -= amount;
        return this.balance;
    }

    reportBalance(): number {
        return this.balance;
    }
}

app.service('accountService', AccountService);