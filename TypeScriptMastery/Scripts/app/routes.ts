/// <reference path="./reference.ts" />

var theApp = angular.module('app');

theApp.controller('NavigationController', Controllers.NavigationController);

theApp.config(['$routeProvider',
    function ($routeProvider: ng.route.IRouteProvider) {

        // configure the routing for the module called 'app'
        $routeProvider
            .when('/', {
                templateUrl: 'Scripts/app/views/coinflip.html',
                controller: Controllers.CoinFlipController
            })
            .when('/roulette', {
                templateUrl: 'Scripts/app/views/roulette.html',
                controller: Controllers.RouletteController
            })
            .when('/cardpick', {
                templateUrl: 'Scripts/app/views/cardpick.html',
                controller: Controllers.CardPickContorller
            })
            .otherwise({ redirectTo: '/' });
    }]);