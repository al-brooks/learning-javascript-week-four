'use strict';

class BankAccount {
  constructor(firstName, lastName, accountType, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = null;
    this.accountType = accountType;
    this.balance = balance;
    this.status = null;
  }

  open() {
    if (this.balance > 100) {
      this.status = 'Opened';
    } else {
      return 'Insufficient Funds for Opening Account';
    }
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient Funds');
      if (this.balance < 0) {
        console.log('You are overdrawn, and will incur a $35 fee');
        this.balance -= 35;
      }
    } else {
      this.balance -= amount;
    }
  }

  transfer(account, amount) {
    if (amount > this.balance) {
      return 'Insufficient Funds';
    } else {
      this.balance -= amount;
      account.balance += amount;
    }
  }
}
