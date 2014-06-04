/// <reference path="../reference.ts" />

module Controllers {

    export class CoinFlipController {

        private wallet: number;

        results: string[] = [];
        bet: Models.IBet;
        message: string;

        static $inject = ['$scope', 'coinFlipService', 'accountService'];
        constructor(
            private $scope: IControllerScope<CoinFlipController>,
            private coinFlipService: Services.CoinFlipService,
            private accountService: Services.AccountService) {

            this.wallet = this.accountService.reportBalance();
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
}