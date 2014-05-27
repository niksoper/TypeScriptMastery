export class CoinFlipService {
    flipCoin(): string {
        return Math.random() > 0.5 ? 'Heads' : 'Tails';
    }
}