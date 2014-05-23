define(["require", "exports", 'register'], function(require, exports, register) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.members = ['MembersCtrl', 'Chris'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;

    register.controller(Controller);
});
//# sourceMappingURL=MembersCtrl.js.map
