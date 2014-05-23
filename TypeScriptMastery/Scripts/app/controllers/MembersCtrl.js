define(["require", "exports", 'angular'], function(require, exports, angular) {
    var app;
    (function (app) {
        (function (controllers) {
            var MembersCtrl = (function () {
                function MembersCtrl($scope) {
                    this.$scope = $scope;
                    $scope.members = ['MembersCtrl', 'Chris'];
                }
                MembersCtrl.$inject = ['$scope'];
                return MembersCtrl;
            })();
            controllers.MembersCtrl = MembersCtrl;

            // register an angular module named 'homepage.controllers' and add the membersCtrl to the module
            angular.module('app.controllers').controller('MembersCtrl', MembersCtrl);
        })(app.controllers || (app.controllers = {}));
        var controllers = app.controllers;
    })(app || (app = {}));
});
//# sourceMappingURL=MembersCtrl.js.map
