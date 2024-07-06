function SetUsername(username){
    //complex DB calls
    this.username= username
    console.log('Called');
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
//the SetUsername function will use the 'this' of createUser function
//.call passes the current execution context to another function

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }



// The current execution context in JavaScript refers to the environment in which the currently running code is executed. It determines the value of this, the scope of variables, and how code is evaluated and executed. In JavaScript, execution contexts can be global, function, or eval contexts, depending on where the code is running.


//In the provided code snippet, when SetUsername.call(this, username) is called within the createUser function, the current execution context refers to the createUser function's context. This means that the this inside SetUsername.call(this, username) is the same this that createUser function has. Since createUser is being used as a constructor function (indicated by the new keyword when creating chai), this within createUser (and thus within SetUsername due to .call()) refers to the new object being created by createUser.