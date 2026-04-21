// export const create = async (userProfile) => {
//     const transformedProfile = {
//         name: userProfile.firstName + " " + userProfile.lastName,
//         birthdate: userProfile.dob,
//         address: userProfile.address,
//         "program": userProfile.course + " " + userProfile.major,
//         "studentStatus": userProfile.status
//     }

//     console.log(transformedProfile); 

//     const response = await fetch(`https://ais-simulated-legacy.onrender.com/api/students`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(transformedProfile)
//     });

//     return await response.json();
// }

import connect from "../config/db.js";
import bcrypt from "bcryptjs";

export const create = async (userProfile) => {

    let conn;

    try {
        conn = await connect();

        const hashedPassword = await bcrypt.hash(userProfile.password, 10);

        // Insert into XAMPP MySQL
        await conn.execute(
            `INSERT INTO tblusers (email, password)
             VALUES (?, ?)`,
            [
                userProfile.email,
                hashedPassword
            ]
        );

        // Send to legacy API
        const transformedProfile = {
            name: userProfile.firstName + " " + userProfile.lastName,
            birthdate: userProfile.dob,
            address: userProfile.address,
            program: userProfile.course + " " + userProfile.major,
            studentStatus: userProfile.status
        };

        const response = await fetch(
            "https://ais-simulated-legacy.onrender.com/api/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transformedProfile)
            }
        );

        return await response.json();

    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};