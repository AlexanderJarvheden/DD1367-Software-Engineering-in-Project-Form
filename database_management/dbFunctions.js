import User from './dbModels/addUser'; //importera users sequelize models
import bcrypt from 'bcrypt';    //använder bcrypt för lösenordskryptering (se till att köra npm install bcrypt)
import { v4 as uuidv4 } from 'uuid'; // uuid för att generera unika userID

/**
 * Adds a user to the database with a hashed password.
 * @param {Object} userData - The user data, including plaintext password.
 * @returns {Promise<Object>} The created user object, with the password hashed.
 */
async function addUser(userData) { //async väntar på await för att köras vid rätt tid
    const { Name, Email, Password, Phonenumber, Company, UserAgreement } = userData; 

    //kolla om useragrmt är ifyllt 
    if (!UserAgreement) {
        throw new Error('User agreement must be accepted.');
    }

    const UserID = userData.UserID || uuidv4(); // generera unikt userID, antingen om existerande eller skapa nytt 

    try {
        // Hash lösenordning inkl saltning
        const saltRounds = 10; //10 är bra balans mellan säkerhet och prestanda 
        const hashedPassword = await bcrypt.hash(Password, saltRounds); //parametrar, lösenordet utan krypt. #saltrounds

        //lägger in i db, som matchar dbModels/Users.js
        const newUser = await User.create({
            UserID,
            Name,
            Email,
            Password: hashedPassword, // lagra det hashade lösenordet
            Phonenumber,
            Company,
            UserAgreement
        });
        console.log('User added successfully:', newUser.toJSON());
        return newUser; // retunera det skapade användar objektet
    } catch (error) {
        console.error('Error adding user:', error);
        throw error; //kasta error om fel
    }
}
// För att vi ska kunna kalla på den genom POST metoden i servers index.js
export { addUser };


/**
 * Verify a user by their email and password.
 * @param {string} email - User's email.
 * @param {string} password - User's plain-text password.
 * @returns {Promise<Object>} - The authenticated user object or an error message.
 */
async function login(email, password) {
    try {
        // hämta användaren genom email
        const user = await User.findOne({ where: { Email: email } });
        if (!user) {
            return { success: false, message: "User not found" };
        }

        //hasha input lösenord och jämför med det sparade i db
        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return { success: false, message: "Invalid password" };
        }

        // om rätt lösen retunera userdata, kan användas sen till att visa uppgifter till användaren samt att ge rätt access.
        return {
            success: true,
            user: {
                UserID: user.UserID,
                Name: user.Name,
                Email: user.Email,
                Phonenumber: user.Phonenumber,
                Company: user.Company
            }
        };
    } catch (error) {
        console.error('Login error:', error);
        throw new Error('Authentication process failed.');
    }
}

// För att vi ska kunna kalla på den genom POST metoden i servers index.js
export { login };

