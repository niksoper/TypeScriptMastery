/* Declaring these modules allows them to be imported using 
 *  . */

declare module 'angular' {
    export = angular;
} 

declare module 'angular-route' {
    export = angularRoute;
}

declare var angularRoute: ng.route.IRouteProvider;