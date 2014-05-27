define(["require", "exports"], function(require, exports) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.members = ['MembersCtrl', 'Chris'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;
});
//# sourceMappingURL=MembersCtrl.js.map
