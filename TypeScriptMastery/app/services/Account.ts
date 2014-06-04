﻿/// <reference path="../reference.ts" />

module Services {
    export class AccountService {

        private balance: number = 20;

        credit(amount: number): number {
            this.balance += amount;
            return this.balance;
        }

        debit(amount: number): number {
            // allow the player to go into debt
            this.balance -= amount;
            return this.balance;
        }

        reportBalance(): number {
            return this.balance;
        }
    }
}

angular.module('services').service('accountService', Services.AccountService);