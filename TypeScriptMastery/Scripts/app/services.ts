import app = require('app');
import coinFlip = require('services/coinFlipService');

'use strict;'

app.service('coinFlipService', coinFlip.CoinFlipService); 