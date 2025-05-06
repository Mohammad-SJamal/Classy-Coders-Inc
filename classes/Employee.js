class Employee {

    #salary;
    #isHired;
    static #allEmployees = [];

    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#allEmployees.push(this);
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(cmd){

        try {
            if (cmd != "hire" && cmd != "fire"){
                throw "Incorrect command value";
            }
        } catch (e) {
            console.log(e) //Need to test if this is works.
        }

        this.#isHired = (cmd == "hire") ? true : false;
    }

    static getEmployees(){
        return this.#allEmployees;
    }

    static getTotalPayroll(){
        let sum = 0;
        for (let i of this.#allEmployees){
            sum += i.getSalary();
        }
        return sum;
    }

    
}

module.exports = {
    Employee,
}
