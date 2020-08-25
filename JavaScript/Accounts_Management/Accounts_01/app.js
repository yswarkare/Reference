var accountsJson = require("./Accounts.json");
var fs = require("fs");

var accounts = JSON.parse(JSON.stringify(accountsJson))


// console.table(accounts)

const Account = class {
    constructor(data){
        this.account = data.account;
        this.emailId = data.emailId;
        this.username = data.username;
        this.password = data.password;
        this.mobileNo = data.mobileNo;
    }
}

var newAccount = new Account({
    account: "Google",
    emailId: "yogeshwarkare@gmail.com",
    password: "[Y_S_Warkare]+[226322]",
    mobileNo: "7020904227"
});
// newAccount.account = "google";
// newAccount.emailId = "yswarkare";
// newAccount.mobileNo = "7020904227";

console.log(newAccount);

add = (accounts, newAccount) => {
    for (let i = 0; i <= 1000; i++) {
        if (accounts[i]) {
            if (i === 1000) {
                console.log("1000 accounts filled");
                return "1000 accounts filled";
            }
            continue;
        } else {
            accounts[i] = newAccount;
            break;
        }
    }
}

// add(accounts, newAccount);

show = (accounts, input) => {
    array = []
    for (let i = 0; i <= 1000; i++){
        if (accounts[i]){
            if (accounts[i].account === input){
                array.push(accounts[i]);
            }
            continue;
        } else {
            break;
        }
    }
    // console.log(array);
    return array;
}

// console.log(accounts)

accounts_02 = JSON.stringify(accounts)

// console.log(accounts_02)

fs.writeFile("./Accounts.json", accounts_02, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Success");
    }
});

// show(accounts, "google");