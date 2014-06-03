/// <amd-dependency path="services/coinFlipService" />

import coinFlip = require('services/coinFlipService');

export interface IControllerScope<T> extends ng.IScope {
    vm: T;
}

export class Controller {

    results: string[] = [];
    
    static $inject = ['$scope', 'coinFlipService'];
    constructor(private $scope: IControllerScope<Controller>, private coinFlipService: coinFlip.CoinFlipService) {

        $scope.vm = this;
    }

    flipCoin() {
        this.results.splice(0, 0, this.coinFlipService.flipCoin());
    }
}