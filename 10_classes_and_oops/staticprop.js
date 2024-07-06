class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return "123"
    }
}

const tuhin = new User("tuhin")
// console.log(tuhin.createId()); // will show error as createId is static function and cannot be accessed by instance

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@mail")
iphone.logMe() //Username : iphone
// iphone.createId() // error message as createId is static function and cannot be accessed by instance
console.log(User.createId()); //123 . Can be accessed by the User class but not by any instance

//In JavaScript, the static keyword is used to define static methods or properties on a class. Static methods or properties are those that belong to the class itself, rather than to instances of the class. This means that static methods or properties can be called without creating an instance of the class.

//In the provided code snippet, the createId method is defined as a static method within the User class. This means it can be called directly on the User class itself, like User.createId(), rather than on an instance of the User class. However, the attempt to call tuhin.createId() at the end of the snippet will result in an error because createId is not available on the instance tuhin; it is only available on the User class itself.