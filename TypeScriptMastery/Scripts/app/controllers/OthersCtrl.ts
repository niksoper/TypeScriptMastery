export interface IOtherScope extends ng.IScope {
    names: string[];
}

export class Controller {

    static $inject = ['$scope'];

    constructor(private $scope: IOtherScope) {
        $scope.names = ['OthersCtrl', 'Some', 'Others'];
    }
}