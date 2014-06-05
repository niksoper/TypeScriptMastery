export interface IGambleController {
    play(): void;
}

export interface IGambleScope<T extends IGambleController> extends ng.IScope {
    vm: T;
}