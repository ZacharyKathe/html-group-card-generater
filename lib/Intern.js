// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern