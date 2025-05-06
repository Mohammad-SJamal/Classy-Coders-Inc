const Employee = require('./Employee.js').Employee;

class Manager extends Employee {
    #employeesManaged
    constructor(department){
        this.department = department;
        this.#employeesManaged = [];
    }

    getEmployeesManaged(){
        return this.#employeesManaged;
    }

    addEmployeeManaged(employee){
        this.#employeesManaged.push(employee);
    }
    
}

module.exports = {
    Manager,
}