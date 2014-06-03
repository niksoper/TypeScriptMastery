/// <amd-dependency path="services/coinFlipService" />

import coinFlip = require('services/coinFlipService');
import scope = require('controllers/IControllerScope');
import bet = require('models/IBet');

export class Controller {

    results: string[] = [];
    bet: bet.IBet;
    wallet: number;
    message: string;
    
    static $inject = ['$scope', 'coinFlipService'];
    constructor(private $scope: scope.IControllerScope<Controller>, private coinFlipService: coinFlip.CoinFlipService) {

        this.wallet = 100;
        this.bet = { choice: 'Heads', stake: 5 };

        $scope.vm = this;
    }

    flipCoin(): void {

        this.wallet -= this.bet.stake;

        var result: string = this.coinFlipService.flipCoin();

        if (result === this.bet.choice) {

            var payout: number = this.coinFlipService.payout(this.bet);
            this.wallet += payout;

            var profit = payout - this.bet.stake;

            this.message = this.bet.stake ? 'You made $' + profit + '!' : '';
        }
        else {
            this.message = this.bet.stake ? 'You lost $' + this.bet.stake + ' :-(' : '';
        }

        this.results.splice(0, 0, result + ' - $' + this.wallet);
    }
}