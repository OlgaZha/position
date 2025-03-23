const users = [
    { name: "Alice", activity: [30, 45, 50, 60, 20, 10, 0] }, 
    { name: "Bob", activity: [15, 30, 25, 10, 0, 40, 50] },
    { name: "Charlie", activity: [0, 0, 0, 0, 0, 0, 0] },
    { name: "David", activity: [10, 20, 30, 40, 50, 60, 70] },
    { name: "Eve", activity: [5, 10, 15, 20, 25, 30, 35] }
];

function totalActivityPerWeek(users) {
    users.forEach((user)=> {
        let sum = user.activity.reduce((accum, value) => accum + value, 0)
        console.log(user.name + ': ' + sum)
    })
}
totalActivityPerWeek(users);

function findMaxActivity(users) {
    let sumOfActivity = users.map((user)=> {
        let sum = user.activity.reduce((accum, value) => accum + value, 0)
        return sum
    })
    let max = Math.max(...sumOfActivity)
    console.log('Max activity of user is ' + max)

}
findMaxActivity(users);

function filterOfInactive(users) {
    users.map((user) => {
        let sum = user.activity.reduce((accum, value) => accum + value, 0)
        if(sum > 0) {
            console.log(user.name + ': ' + sum)
        }
    })
}
filterOfInactive(users)

function averageActivity(users) {
    users.map((user) => {
        let sum = Math.floor(user.activity.reduce((accum, value) => accum + value, 0) / user.activity.length)
        console.log("Average activity of " + user.name + ": " + sum)
    })
}
averageActivity(users)

function sortUsers(users) {
    let sumOfActivity = users.map((user)=> {
        let sum = user.activity.reduce((accum, value) => accum + value, 0)
        return sum
    })
        let sortedValue = sumOfActivity.sort(function(a,b) {return b-a})
        console.log(sortedValue)
}
sortUsers(users)




////class
class BankAccount {
    constructor(accountHolder, balance, accountNumber) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    deposit(amount) {
        if(amount > 0) {
            this.balance += amount;
        } else {
            console.log('Invalid value')
        }
    }

    withDraw(value) {
        if(value <= this.balance) {
            this.balance -= value;
        } else {
            console.log('There is no money')
        }
    }

    get balance() {
        return this.balance;
    }

    get accountInfo() {
        console.log(`${this.accountHolder} have ${this.balance} in account ${this.accountNumber}`)
    }
}