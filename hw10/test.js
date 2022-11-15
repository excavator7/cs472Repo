describe("Testing Saving Account:", function(){
    let saving = new savingAccount(1234, 5);
    saving.deposit(500);

    it("Testing balance after deposit in saving account", function () {
        assert.equal("500", saving.getBalance());
    });

    it("Testing saving account number", function () {
        assert.equal("1234", saving.getNumber());
    });

    it("Testing saving account interest", function () {
        assert.equal("5", saving.getInterest());
    });

    it("Testing interest in saving account", function () {
        saving.addInterest();
        assert.equal("Account 1234: balance 525: interest 5", saving.toString());
    });

});

describe("Testing Checking Account:", function(){
    let checking = new checkingAccount(12345, 100);
    it("Testing checking account number", function(){
        assert.equal("12345", checking.getNumber())
    });
      
    it("Testing checking account overdraft limit", function(){
        assert.equal("100", checking.getOverdraftLimit());
    });

    it("Testing checking account overdraft limit withdraw", function(){
        checking.withdraw(100);
        assert.equal("Account 12345: balance -100", checking.toString());
    });
});

describe("Testing Bank Account:", function(){
    const bnk = new bank();

    it("Testing add account", function(){
        bnk.addAccount();
        assert.equal("Account 0: balance 2000", bnk.accountReport());
    });

    it("Testing add checking account", function(){
        const acctNumber = bnk.addCheckingAccount(100);
        assert.equal("Account 0: balance 2000Account 1: balance -100", bnk.accountReport());
    });

    it("Testing add saving account", function(){
        bnk.addSavingsAccount(10);
        assert.equal("Account 0: balance 2000Account 1: balance -100Account 2: balance 1000: interest 10", bnk.accountReport());
    });

    it("Testing close account", function(){
        const acctNbr = bnk.addAccount();
        bnk.closeAccount(acctNbr);
        assert.equal("Account 0: balance 2000Account 1: balance -100Account 2: balance 1000: interest 10", bnk.accountReport());
    });     
});

describe("Testing End of Month Report:", function(){
    const bnk = new bank();

    it("Testing Report", function(){
        bnk.addAccount();
        bnk.addSavingsAccount(5);
        bnk.addCheckingAccount(1000);
        assert.equal("Interest added SavingAccount 5: balance: 1050interest: 5Warning, low balance CheckingAccount 6: balance: -100overdraft limit: 1000", bnk.endOfMonth()); 
    });
});