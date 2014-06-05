/// <amd-dependency path="services/CoinFlip" />
/// <amd-dependency path="services/Account" />

import coinFlip = require('services/CoinFlip');
import account = require('services/Account');
import scope = require('controllers/IControllerScope');
import bet = require('models/IBet');

export class Controller {

    private wallet: number;

    results: string[] = [];
    bet: bet.IBet;
    message: string;
    
    static $inject = ['$scope', 'coinFlipService', 'accountService'];
    constructor(
        private $scope: scope.IControllerScope<Controller>,
        private coinFlipService: coinFlip.CoinFlipService,
        private accountService: account.AccountService) {

        this.wallet = this.accountService.credit(100);
        this.bet = { choice: 'Heads', stake: 5 };

        $scope.vm = this;
    }

    flipCoin(): void {

        this.wallet = this.accountService.debit(this.bet.stake);

        var result: string = this.coinFlipService.flipCoin();

        if (result === this.bet.choice) {

            var payout: number = this.coinFlipService.payout(this.bet);
            this.wallet = this.accountService.credit(payout);

            var profit = payout - this.bet.stake;

            this.message = this.bet.stake ? 'You made $' + profit + '!' : '';
        }
        else {
            this.message = this.bet.stake ? 'You lost $' + this.bet.stake + ' :-(' : '';
        }

        this.results.splice(0, 0, result + ' - $' + this.wallet);
    }
}