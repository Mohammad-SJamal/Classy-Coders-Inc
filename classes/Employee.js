class Employee {

    #salary;
    #isHired;

    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
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

    
}

module.exports = {
    Employee,
}
