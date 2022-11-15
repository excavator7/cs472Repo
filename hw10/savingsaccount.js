class savingAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    addInterest(){
        const amount = this._balance * this._interest/100; 
        super.deposit(amount);
    }

    toString(){
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return 'Interest added SavingAccount ' + this._number +': balance: ' + this._balance + 'interest: ' + this._interest;
    }
}