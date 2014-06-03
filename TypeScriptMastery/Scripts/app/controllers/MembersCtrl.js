define(["require", "exports"], function(require, exports) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            this.members = ['Ringo', 'Paul'];
            $scope.vm = this;
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;
});
//# sourceMappingURL=MembersCtrl.js.map
