// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email,officeNumber, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }
    getRole(){
        return "Manager";
    }
    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager