define(["require", "exports"], function(require, exports) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.names = ['OthersCtrl', 'Some', 'Others'];
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    exports.Controller = Controller;
});
//# sourceMappingURL=OthersCtrl.js.map
