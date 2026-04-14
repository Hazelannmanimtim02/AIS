// import pool from "../config/db.js";
// import validator from "validator";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const createUser = async (userProfile, email, password) => {
//     if (email.trim() === '' || email.trim() === '' || password.trim() === '') {
//         const error = new TypeError('Name, Email and Password are required.');
//         error.statusCode = 400;
//         throw error;
//     }

//     if (!validator.isEmail(email)) {
//         const error = new TypeError('Invalid email address.');
//         error.statusCode = 400;
//         throw error;
//     }

//     if (!validator.isStrongPassword(password)) {
//         const error = new TypeError('Password is not strong enough.');
//         error.statusCode = 400;
//         throw error;
//     }

//     // Check if email already exists
//     const [user] = await pool.query(
//         "SELECT email FROM tbluser WHERE email = ?",
//         [email]
//     );

//     if (user.length === 1) {
//         const error = new Error(`The email ${email} is already used.`);
//         error.statusCode = 400;
//         throw error;
//     }

//     // Hash password
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     // Insert new user
//     const [newUser] = await pool.query(
//         "INSERT INTO tbluser (email, password) VALUES (?,?)",
//         [email, hashedPassword]

//     );

//     return newUser;
// };

// const response = await fetch(
//     `https://ais-simulated-legacy.onrender.com/api/students`,{
//         method: "POST",
//         headers:{
//             'content-Type' : 'application/json'
//         },
//         body: JSON.stringify(userProfile)
//     });
//     const result = await response.json();




// export const login = async (email, password) => {
//     if (email.trim() === '' || password.trim() === '') {
//         const error = new TypeError('Name, Email and Password are required.');
//         error.statusCode = 400;
//         throw error;
//     }


//     // Check if email already exists
//     const [user] = await pool.query(
//         "SELECT email FROM tbluser WHERE email = ?",
//         [email]);

//     if (user.length === 1) {
//         const error = new Error(`An account with the email: ${email} does not exist.`);
//         error.statusCode = 400;
//         console.log(user.email)
//         throw error;
//     }

//     if(!bcrypt.compareSync(password, user[0].password)){
//         const error = new Error('Incorrect passwrod.')
//         error.statusCode = 400;
//         throw error;
//     }

// //generate token
// const token = jwt.sign(
//     {id: user[0].id},
//     process.env.SECRET,
//     {expiresIn: '1d'});

    
//     return token;
// };

// export const getUser = async (id) =>{
//     if(parseInt(id)=== NaN){
//         throw new Error('Invalid id');
//     }

//     const [user] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
//     return user;
// }
// export default{ login, createUser }




import pool from "../config/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";

// CREATE USER
export const createUser = async (email, password) => {

    if (email.trim() === '' || password.trim() === '') {
        const error = new TypeError('Email and Password are required.');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isEmail(email)) {
        const error = new TypeError('Invalid email address.');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isStrongPassword(password)) {
        const error = new TypeError('Password is not strong enough.');
        error.statusCode = 400;
        throw error;
    }

    // Check if email already exists
    const [user] = await pool.query(
        "SELECT email FROM tbluser WHERE email = ?",
        [email]
    );

    if (user.length > 0) {
        const error = new Error(`Email ${email} is already used.`);
        error.statusCode = 400;
        throw error;
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Insert user
    const [newUser] = await pool.query(
        "INSERT INTO tbluser (email, password) VALUES (?, ?)",
        [email, hashedPassword]
    );
    const response = await fetch(
     `https://ais-simulated-legacy.onrender.com/api/students`,{
        method: "POST",
        headers:{
            'content-Type' : 'application/json'
        },
       body: JSON.stringify(userProfile)
    });
   const result = await response.json();


    return newUser;
};