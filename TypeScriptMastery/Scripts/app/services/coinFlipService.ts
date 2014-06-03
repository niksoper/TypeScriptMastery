import app = require('app');

export class CoinFlipService {
    flipCoin(): string {
        return Math.random() > 0.5 ? 'Heads' : 'Tails';
    }
}

app.service('coinFlipService', CoinFlipService);