/// <reference path="../reference.ts" />

module Controllers {
    export class CardPickContorller {

        names = ['Some', 'Names'];

        static $inject = ['$scope'];
        constructor(private $scope: IControllerScope<CardPickContorller>) {
            $scope.vm = this;
        }
    }
}