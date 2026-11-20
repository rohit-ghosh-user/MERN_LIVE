class AccountHolder{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountBalance = 0;
    }

    static rateofInterest = 4;

    static getRateofInterest(){
        console.log(`The rate of interest is ${this.rateofInterest}%`);
    }

    debit(amount){
        this.accountBalance -= amount;
    }

    credit(amount){
        this.accountBalance += amount;
    }

    getAccountBalance(){
        console.log(` ${this.firstName+' '+this.lastName}'s account balance is ${this.accountBalance}`);
    }
}

let customer = new AccountHolder('Rohit','Ghosh');
customer.credit(15000);
customer.debit(2956);
customer.getAccountBalance();
// AccountHolder.getAccountBalance(); Error

AccountHolder.getRateofInterest();

// customer.getRateofInterest(); Error