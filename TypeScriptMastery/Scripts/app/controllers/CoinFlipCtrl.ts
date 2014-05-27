import coinFlip = require('services/coinFlipService');

export interface ICoinFlipScope extends ng.IScope {
    flipCoin: Function;
    results: string[];
}

export class Controller {

    static $inject = ['$scope', 'coinFlipService'];

    constructor(private $scope: ICoinFlipScope, private coinFlipService: coinFlip.CoinFlipService) {

        $scope.results = ['None'];

        $scope.flipCoin = () => {

            $scope.results.push(coinFlipService.flipCoin());

        }
    }
}