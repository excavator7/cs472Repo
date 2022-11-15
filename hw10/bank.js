class bank{
    static count = 0;

    constructor(){
        this.account = [];
    }

addAccount(){
    const acc = new Account(bank.count++);
    acc.deposit(2000);
    this.account.push(acc);
    console.log('acc1: '+this.account)
    return bank.count;
}

addCheckingAccount(overdraft){
    const checking = new checkingAccount(bank.count++, overdraft);
    checking.deposit(500);
    checking.withdraw(600);
    console.log('check balance: '+checking._balance)
    this.account.push(checking);
    console.log('acc2: '+this.account)
    return bank.count;
}

addSavingsAccount(interest){
    const saving = new savingAccount(bank.count++, interest);
    saving.deposit(1000);
    this.account.push(saving);
    return bank.count;
}

closeAccount(number){
    const index = 3;//this.account.findIndex(i => i._number === number);
    console.log('index: '+index)
    if(index > -1)
        this.account.splice(index, 1);

    console.log('account length: '+this.account.length);
}

accountReport(){
    return this.account.reduce((result, x) => result + x.toString(), '');
}

endOfMonth(){
    return this.account.reduce((result, x) => result + x.endOfMonth(), '');
}

}