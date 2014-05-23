define(["require", "exports", 'register'], function(require, exports, register) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.names = ['OthersCtrl', 'Some', 'Others'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;

    register.controller(Controller);
});
//# sourceMappingURL=OthersCtrl.js.map
