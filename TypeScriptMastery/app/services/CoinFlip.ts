/// <reference path="../reference.ts" />

module Services {
    export class CoinFlipService {
        flipCoin(): string {
            return Math.random() > 0.5 ? 'Heads' : 'Tails';
        }

        payout(bet: Models.IBet): number {
            return bet.stake * 1.5;
        }
    }
}

angular.module('services').service('coinFlipService', Services.CoinFlipService);