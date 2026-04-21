// import * as AuthService from '../services/authService.js';

// export const registerStudent = async (req, res) => {

//     const { firstName, lastName, dob, course, major, status, address } = req.body;

//     try{
//         const studentProfile = {  firstName, lastName, dob, course, major, status, address };

//         console.log(studentProfile);

//         const result = await AuthService.registerStudent(studentProfile);
//         res.status(201).json({
//             sucess: true,
//             message: result
//         });
//     } catch (error) {
//         res.status(500).json({
//             sucess: false,
//             message: "An error occurred while registering the student: " + error.message
//         });
//     }

// }

import * as AuthService from '../services/authService.js';

export const registerStudent = async (req, res) => {

    const {
        firstName,
        lastName,
        dob,
        course,
        major,
        status,
        address,
        email,
        password
    } = req.body;

    try {

        const studentProfile = {
            firstName,
            lastName,
            dob,
            course,
            major,
            status,
            address,
            email,
            password
        };

        console.log(studentProfile);

        const result = await AuthService.registerStudent(studentProfile);

        res.status(201).json({
            success: true,
            message: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
              "An error occurred while registering the student: "
              + error.message
        });

    }
}
