import app = require('app');
import member = require('controllers/MembersCtrl');
import others = require('controllers/OthersCtrl');

app.config(['$routeProvider',
    function ($routeProvider: ng.route.IRouteProvider) {

        // configure the routing for the module called 'app'
        $routeProvider
            .when('/', {
                templateUrl: 'Scripts/app/views/listmembers.html',
                controller: member.Controller
            })
            .when('/other', {
                templateUrl: 'Scripts/app/views/listothers.html',
                controller: others.Controller
            })
            .otherwise({ redirectTo: '/' });
    }]);