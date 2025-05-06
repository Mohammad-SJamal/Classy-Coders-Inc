class Manager {
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