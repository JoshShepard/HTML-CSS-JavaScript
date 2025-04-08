// Objects - Data Structure that lets you store multiple properties in a single variable
// syntax - {*properties: *value,}
// This example is going through users on a website. The user variable is storing an array of user objects
let users = [
    {
        email: "testemail@gmail.com",
        password: "test123",
        name: "John Doe",
        userDiscord: "exampleDiscord",
        userSubscription: "VIP+",
        lessonsCompleted: [1, 2, 3],
    },
    {
        email: "joshua_shepard@yahoo.com",
        password: "password123",
        name: "Joshua Shepard",
        userDiscord: "Shep34",
        userSubscription: "VIP+",
        lessonsCompleted: [1, 2],
    }
]

// Console log users properties
// console.log(users.email);
// console.log(users.password);
// console.log(users.name);
// console.log(users.userDiscord);
// console.log(users.userSubscription);
// console.log(users.lessonsCompleted);

console.log(users);

// Access objects through array
// console.log(users[0].email);

/*
    Sign Up User Challenge
        Create a function that accepts the parameters
            - email
            - password
            - name
            - discord
            - subscription
            - lessonsCompleted

        Inside the Sign up function:
            - Use those parameters to create a user object
            - Push that object onto the users array
*/

// Not the best practice to have a function with 6 parameters => add one object
// let signupUser = (email, password, name, userDiscord, subscription, lessonsCompleted) => {
//     let newUser = {
//         email: email, 
//         password: password, 
//         name: name,
//         userDiscord: userDiscord, 
//         userSubscription: subscription,
//         lessonsCompleted: lessonsCompleted,
//     }

//     users.push(newUser);
// }

// signupUser("EricaShepler@yahoo.com", "Password12345", "Erica Shepler", "EricaDiscord", "VIP++", [1, 2, 3, 4, 5]);

// // Users after function
// console.log(users);

// Better Practice is by adding one object
let signupUser = (user) => {
    users.push(user);
}

signupUser({
    email: "EricaShepler@yahoo.com",
    password: "Password12345", 
    name: "Erica Shepler",
    userDiscord: "EricaDiscord", 
    userSubscription: "VIP++",
    lessonsCompleted: [1, 2, 3, 4, 5],
})