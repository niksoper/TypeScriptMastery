/// <amd-dependency path="services/coinFlipService" />

import coinFlip = require('services/coinFlipService');
import scope = require('controllers/IControllerScope');

export class Controller {

    results: string[] = [];
    
    static $inject = ['$scope', 'coinFlipService'];
    constructor(private $scope: scope.IControllerScope<Controller>, private coinFlipService: coinFlip.CoinFlipService) {

        $scope.vm = this;
    }

    flipCoin(): void {
        this.results.splice(0, 0, this.coinFlipService.flipCoin());
    }
}