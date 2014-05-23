define(["require", "exports", 'angular'], function(require, exports, angular) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.members = ['MembersCtrl', 'Chris'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;

    // register the MembersCtrl class as a controller on the app.controllers angular module
    angular.module('app.controllers').controller(Controller);
});
//# sourceMappingURL=MembersCtrl.js.map
