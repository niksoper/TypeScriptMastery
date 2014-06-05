import scope = require('controllers/IControllerScope');


export class Controller {

    names = ['Some', 'Names'];

    static $inject = ['$scope'];
    constructor(private $scope: scope.IControllerScope<Controller>) {
        $scope.vm = this;
    }
}