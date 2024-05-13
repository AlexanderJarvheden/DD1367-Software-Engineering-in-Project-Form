import pg from 'pg';
const { Pool } = pg;
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const pool = new Pool({
    database: "pvkbox",
    user: "falu",
    password: "Xcz9oGvg",
    host: "psql-dd1368-ht23.sys.kth.se",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const saltRounds = 10; // bra värde mellan prestanda och säkerhet

async function addUser(userData) {
    console.log("Connecting to database...");
    const client = await pool.connect();
    console.log("Database connection successful, starting transaction...");
    try {
        // OBS MÅSTE FIXAS AV FRONTEND kolla om gdpr är i kryssat annars retunera direkt 
        // if (!userData.agreeGDPR) {
        //     console.error('User agreement not accepted');
        //     return { success: false, message: "User must accept the terms and conditions." };
        // }
        await client.query('BEGIN');

        const { name, email, password, phonenumber, company } = userData;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userId = uuidv4();  // generera unik userid

        console.log("Inserting user data...");
        await client.query(
            'INSERT INTO Users (UserID, Name, Password, CompanyName) VALUES ($1, $2, $3, $4)',
            [userId, name, hashedPassword, company]
        );

        console.log("Handling phone number...");
        if (phonenumber) {
            await client.query(
                'INSERT INTO User_Phonenumber (Phonenumber, UserID) VALUES ($1, $2)',
                [phonenumber, userId]
            );
        }

        console.log("Handling email address...");
        await client.query(
            'INSERT INTO User_Mailaddress (Mailaddress, UserID) VALUES ($1, $2)',
            [email, userId]
        );

        await client.query('COMMIT');
        console.log("User added successfully");
        return { success: true, userId: userId };
    } catch (error) {
        console.error('Transaction failed:', error);
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

export { addUser };

async function loginUser(email, password) {
    const client = await pool.connect();
    try {
        const query = `
        SELECT u.UserID, u.Name, u.Password 
        FROM users u 
        JOIN User_Mailaddress m ON u.UserID = m.UserID
        WHERE m.Mailaddress = $1`;
        const { rows } = await client.query(query, [email]);
        
        if(rows.length == 1) {
            const user = rows[0];
            const match = await bcrypt.compare(password, user.password); //kryptera input och jämför med db
            if (match) {
                return {success: true, user: {userID: user.userid, name: user.name}};
            }
            console.log("User verified");
        }
        return {success: false, message: "Wrong password or email"};
    } catch (error) {
        console.error('Error occured: ', error);
        return { success: false, message: "Error with DB"};
    } finally {
        client.release();
    }
}

export { loginUser };