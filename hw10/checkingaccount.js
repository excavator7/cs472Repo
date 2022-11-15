class checkingAccount extends Account{
    constructor(number, overdraftLimit){
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

getOverdraftLimit(){
    return this._overdraftLimit;
}

setOverdraftLimit(limit){
    this._overdraftLimit = limit;
}

withdraw(amount){
    if(this._balance - amount >= -this._overdraftLimit ){       
        this._balance -= amount;
    }
}

toString(){
    return "Account " + this._number + ": balance " + this._balance;
}

endOfMonth() {
    if(this._balance < 0)
        return 'Warning, low balance CheckingAccount ' + this._number + ': balance: ' + this._balance + 'overdraft limit: ' + this._overdraftLimit;
}

}