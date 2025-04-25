class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class Author {
    constructor(name) {
        this.name = name;
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author; 
    }

    printInfo() {
        console.log(`${this.title} by ${this.author.name}`);
    }
}

class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}, Salary: ${this.getSalary()}`);
    }
}