import { v4 as uuidv4 } from 'uuid';

// dummy users, for final version set it to the empty list [], 'let' is used to show that it is dynamic and changeable instead of a constant
let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
];

// Adds users to the database
export const createUser = (req, res) => {
    const user = req.body; // the data entered to create the user, stores the object as a whole
    
    const userId = uuidv4(); // unique id

    const userWithID = {...user, id:userId} // A new object with the content of user, and having added the ID

    users.push(userWithID); // pushes to user to our current array
    // users.push({...user, id: uuidv4()}); alternative way

    res.send(`User with the name ${user.firstName} to the database`);
};

export const getUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    // each user, search for if the user.id is equal to the id from params, then we are getting the right user
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    // iterates over all users and the filter removes the users for those that the function returned false 
    // (when id = id it is true but we coded != so it becomes false instead)
    users = users.filter((user) => user.id != id);

    res.send(`User with the name ${id} was deleted from the database`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastName;
    }

    if(age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated`);
};

