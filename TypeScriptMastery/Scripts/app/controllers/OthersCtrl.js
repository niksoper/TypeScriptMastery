define(["require", "exports", 'angular'], function(require, exports, angular) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.names = ['OthersCtrl', 'Some', 'Others'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;

    angular.module('app.controllers').controller(Controller);
});
//# sourceMappingURL=OthersCtrl.js.map
