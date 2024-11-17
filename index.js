class Account {
    constructor(balance){

        this.balance = balance;

    }

    getBalanceInfo (){

        console.log(`Your current balance : ${this.balance} $`)
    }
}

class  bankAccount extends Account {

    constructor(balance , name){

        super(balance);
        this.name = name ; 

    }


    cashIn( amount ){

        this.balance += amount;
        console.log(`After cashIn your current balance : ${this.balance}`)

    }

    cashOut(amount){
        this.balance -= amount; 
        console.log(`After cashOut your current balance : ${this.balance}`)


    }
}

const obj  = new bankAccount (1000 , "Taleh") ;
obj.cashIn(200) ;
obj.cashOut(100);
obj.getBalanceInfo;