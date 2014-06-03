define(["require", "exports"], function(require, exports) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            this.names = ['Some', 'Names'];
            $scope.vm = this;
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;
});
//# sourceMappingURL=OthersCtrl.js.map
