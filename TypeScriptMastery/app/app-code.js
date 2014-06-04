angular.module('services', []);
var Services;
(function (Services) {
    var AccountService = (function () {
        function AccountService() {
            this.balance = 20;
        }
        AccountService.prototype.credit = function (amount) {
            this.balance += amount;
            return this.balance;
        };

        AccountService.prototype.debit = function (amount) {
            this.balance -= amount;
            return this.balance;
        };

        AccountService.prototype.reportBalance = function () {
            return this.balance;
        };
        return AccountService;
    })();
    Services.AccountService = AccountService;
})(Services || (Services = {}));

angular.module('services').service('accountService', Services.AccountService);
var Services;
(function (Services) {
    var CoinFlipService = (function () {
        function CoinFlipService() {
        }
        CoinFlipService.prototype.flipCoin = function () {
            return Math.random() > 0.5 ? 'Heads' : 'Tails';
        };

        CoinFlipService.prototype.payout = function (bet) {
            return bet.stake * 1.5;
        };
        return CoinFlipService;
    })();
    Services.CoinFlipService = CoinFlipService;
})(Services || (Services = {}));

angular.module('services').service('coinFlipService', Services.CoinFlipService);
angular.module('app', ['ngRoute', 'controllers', 'services']);
var app;
(function (app) {
    (function (models) {
        var Member = (function () {
            function Member(name) {
                this.name = name;
            }
            return Member;
        })();
        models.Member = Member;
    })(app.models || (app.models = {}));
    var models = app.models;
})(app || (app = {}));
var Controllers;
(function (Controllers) {
    var CardPickContorller = (function () {
        function CardPickContorller($scope) {
            this.$scope = $scope;
            this.names = ['Some', 'Names'];
            $scope.vm = this;
        }
        CardPickContorller.$inject = ['$scope'];
        return CardPickContorller;
    })();
    Controllers.CardPickContorller = CardPickContorller;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var CoinFlipController = (function () {
        function CoinFlipController($scope, coinFlipService, accountService) {
            this.$scope = $scope;
            this.coinFlipService = coinFlipService;
            this.accountService = accountService;
            this.results = [];
            this.wallet = this.accountService.reportBalance();
            this.bet = { choice: 'Heads', stake: 5 };

            $scope.vm = this;
        }
        CoinFlipController.prototype.flipCoin = function () {
            this.wallet = this.accountService.debit(this.bet.stake);

            var result = this.coinFlipService.flipCoin();

            if (result === this.bet.choice) {
                var payout = this.coinFlipService.payout(this.bet);
                this.wallet = this.accountService.credit(payout);

                var profit = payout - this.bet.stake;

                this.message = this.bet.stake ? 'You made $' + profit + '!' : '';
            } else {
                this.message = this.bet.stake ? 'You lost $' + this.bet.stake + ' :-(' : '';
            }

            this.results.splice(0, 0, result + ' - $' + this.wallet);
        };
        CoinFlipController.$inject = ['$scope', 'coinFlipService', 'accountService'];
        return CoinFlipController;
    })();
    Controllers.CoinFlipController = CoinFlipController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var NavigationController = (function () {
        function NavigationController($scope) {
            $scope.vm = this;

            this.headings = [
                { text: 'Coin flip', url: '#/coinflip' },
                { text: 'Roulette', url: '#/roulette' },
                { text: 'Pick a card', url: '#/cardpick' }
            ];
        }
        return NavigationController;
    })();
    Controllers.NavigationController = NavigationController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var RouletteController = (function () {
        function RouletteController($scope) {
            this.$scope = $scope;
            this.members = ['Ringo', 'Paul'];
            $scope.vm = this;
        }
        RouletteController.$inject = ['$scope'];
        return RouletteController;
    })();
    Controllers.RouletteController = RouletteController;
})(Controllers || (Controllers = {}));
var theApp = angular.module('app');

theApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/coinflip.html',
            controller: Controllers.CoinFlipController
        }).when('/roulette', {
            templateUrl: 'app/views/roulette.html',
            controller: Controllers.RouletteController
        }).when('/cardpick', {
            templateUrl: 'app/views/cardpick.html',
            controller: Controllers.CardPickContorller
        }).otherwise({ redirectTo: '/' });
    }
]);
angular.module('controllers', []);
//# sourceMappingURL=app-code.js.map
