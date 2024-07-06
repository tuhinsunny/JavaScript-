class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }   

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@mail","1245") ;
chai.addCourse()//A new course was added by chai
const masalaChai = new User("masala chai")
// masalaChai.addCourse()// Will give error as it does not have the access to this function

masalaChai.logMe()//User masala chai

console.log(chai === masalaChai); //false
console.log(chai === Teacher); //false . as it is only an instance
console.log(chai instanceof Teacher); //true
console.log(Teacher instanceof User); //false
console.log(chai instanceof User); //true