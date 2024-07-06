//Object Literal
const user = {
    username: "Tuhin",
    loginCount : 0,
    signedIn : true,

    getUserDetails: function(){
        console.log('Got user details from Database');
        console.log(`Username : ${this.username}`); //this refers to the user object
        console.log(this);
        //this will output:
        // {
        //     username: 'Tuhin',
        //     loginCount: 0,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
    //Whenever we talk about this keyword, we mean current context
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{}