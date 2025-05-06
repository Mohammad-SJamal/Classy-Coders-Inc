const Employee = require('./Employee.js').Employee;

class SoftwareEngineer extends Employee {
    #programmingLanguages;
    constructor(name, position, salary, programmingLanguages){
        super();
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(languages){
        this.#programmingLanguages.push(languages);
    }

}

module.exports = {
    SoftwareEngineer,
}