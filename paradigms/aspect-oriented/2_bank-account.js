class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error('Insufficient balance');
    }
    this.balance -= amount;
  }
}

const log = {
  info: console.log,
  error: console.error
};

const around = (fn, before, after) => {
  return (...args) => {
    before && before(...args);
    const result = fn(...args);
    after && after(result);
    return result;
  };
};

const account = new BankAccount(100);

account.deposit = around(account.deposit, (amount) => log.info(`Depositing ${amount}`), (result) => log.info(`New balance: ${result}`));
account.withdraw = around(account.withdraw, (amount) => log.info(`Withdrawing ${amount}`), (result) => log.info(`New balance: ${result}`));

account.deposit(50);   // Depositing 50, New balance: 150
account.withdraw(200); // Withdrawing 200, Insufficient balance

/*
around function is used to wrap the deposit and withdraw methods of the BankAccount class with logging functionality. The before and after arguments of the around function are callback functions that are executed before and after the wrapped method is called. This allows the logging functionality to be separated from the main logic of the BankAccount class and applied to multiple methods without duplicating code.
*/

