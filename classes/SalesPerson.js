const { Employee } = require("./Employee");

Employee;

class SalesPerson extends Employee {
  // Private properties
  #totalSales;
  constructor(name, position, salary, clients) {
    super(name, position, salary);
    this.clients = clients;
    this.#totalSales = 0;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
}

module.exports = {
  SalesPerson,
};
