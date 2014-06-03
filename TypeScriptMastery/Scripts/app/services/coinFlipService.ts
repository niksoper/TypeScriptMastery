import app = require('app');
import bet = require('models/IBet');

export class CoinFlipService {
    flipCoin(): string {
        return Math.random() > 0.5 ? 'Heads' : 'Tails';
    }

    payout(bet: bet.IBet): number {
        return bet.stake * 1.5;
    }
}

app.service('coinFlipService', CoinFlipService);