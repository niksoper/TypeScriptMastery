/// <reference path="../reference.ts" />

module Controllers {

    export interface Heading {
        text: string;
        url: string;
    }

    export class NavigationController {

        headings: Heading[];

        constructor($scope: IControllerScope<NavigationController>) {
            $scope.vm = this;

            this.headings = [
                { text: 'Coin flip', url: '#/coinflip' },
                { text: 'Roulette', url: '#/roulette' },
                { text: 'Pick a card', url: '#/cardpick' }
            ];

        }

    }
}