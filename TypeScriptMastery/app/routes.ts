import app = require('app');
import navigation = require('controllers/Navigation');
import cardpick = require('controllers/CardPick');
import roulette = require('controllers/Roulette');
import coinflip = require('controllers/CoinFlip');

'use strict';

app.controller('NavigationController', navigation.Controller);

app.config(['$routeProvider',
    function ($routeProvider: ng.route.IRouteProvider) {

        // configure the routing for the module called 'app'
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/coinflip.html',
                controller: coinflip.Controller
            })
            .when('/roulette', {
                templateUrl: 'app/views/roulette.html',
                controller: roulette.Controller
            })
            .when('/cardpick', {
                templateUrl: 'app/views/cardpick.html',
                controller: cardpick.Controller
            })
            .otherwise({ redirectTo: '/' });
    }]);