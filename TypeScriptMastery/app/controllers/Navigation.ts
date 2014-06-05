import scope = require('controllers/IControllerScope');

export interface Heading {
    text: string;
    url: string;
}

export class Controller {

    headings: Heading[];

    constructor($scope: scope.IControllerScope<Controller>) {
        $scope.vm = this;

        this.headings = [
            { text: 'Coin flip', url: '#/coinflip' },
            { text: 'Roulette', url: '#/roulette' },
            { text: 'Pick a card', url: '#/cardpick' }
        ];

    }

}