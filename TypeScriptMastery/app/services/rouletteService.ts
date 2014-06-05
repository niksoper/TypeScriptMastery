import app = require('app');
import gamble = require('services/IGambleService');

export class RouletteService implements gamble.IGambleService {
    play(): number {
        return Math.random() * 50;
    }
}

app.service('rouletteService', RouletteService);