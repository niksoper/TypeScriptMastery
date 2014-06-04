/// <reference path="./reference.ts" />
var theApp = angular.module('app');

theApp.config([
    '$routeProvider',
    function ($routeProvider) {
        // configure the routing for the module called 'app'
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
    }]);
//# sourceMappingURL=routes.js.map
