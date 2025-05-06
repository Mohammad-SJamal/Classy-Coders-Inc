const Employee = require('./Employee.js').Employee;

class SoftwareEngineer extends Employee {
    #programmingLanguages;
    constructor(programmingLanguages){
        super();
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(languages){
        this.#programmingLanguages = languages;
    }

}

module.exports = {
    SoftwareEngineer,
}