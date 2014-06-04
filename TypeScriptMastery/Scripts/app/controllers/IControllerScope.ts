/// <reference path="../reference.ts" />

module Controllers {
    export interface IControllerScope<T> extends ng.IScope {
        vm: T;
    }
}