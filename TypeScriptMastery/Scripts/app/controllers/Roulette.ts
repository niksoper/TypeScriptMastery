/// <reference path="../reference.ts" />

module Controllers {

    export class RouletteController {

        members = ['Ringo', 'Paul'];

        static $inject = ['$scope'];
        constructor(private $scope: IControllerScope<RouletteController>) {
            $scope.vm = this;
        }
    }

}