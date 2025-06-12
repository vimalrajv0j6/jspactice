let user1 = {
    name :"vimal",
    age: 19,
    login(){
        console.log('hii', this.name);
        console.log("you logged in");
    },
    logout(){
        console.log("you logged out");
    }
}
let user2 = {
    name :"siva",
    age: 21,
    login(){
        console.log('hii',this.name);
        console.log('you logged in');
    },
    logout(){
        console.log("you logged out");
    }
}
let user3 = {
    name :"kishore",
    age: 19,
    login(){
        console.log("you logged in");
    },
    logout(){
        console.log("you logged out");
    }
}

user1.login()
user2.login()

// parent class
class User{
    static numberOfUser = 0;
    constructor(name , age){
        this.name = name;
        this.age = age;
        User.numberOfUser++;

    }
    login(){
        console.log("you logged in");
        return this
    }
    logout(){
        console.log("you logged out");
        return this
    }
    static displayTotalUser(){
        console.log('total number of user ' + User.numberOfUser);
        
    
    }
}

let userOne = new User('sachiin',19)
let userTwo = new User('nithish',19)
let userThree = new User('muthu',19)
let userFour = new User('vignesh',19)

console.log(userOne);
console.log(User.numberOfUser);
User.displayTotalUser(); 

// child class
class Paiduser extends User{

    constructor(name,age,fees){
        super(name,age);
        this.fees = fees;
    }
    message(){
        console.log('you have extra stoage');
        return this
    }
}
let userFive = new Paiduser('praveen',20,200)

let userSix = new Paiduser('vikash',19,3000)
console.log(userFive);
userFive.message();


userSix.login().message().logout();

