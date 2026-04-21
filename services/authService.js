import * as AuthAdapter from '../adapters/authAdapter.js';

export const registerStudent = async (studentProfile) => {

    console.log("Received studentProfile: ", studentProfile);
    
    if (!studentProfile.firstName || studentProfile.firstName.trim() === '') throw new Error("First name is required");
    if (!studentProfile.lastName || studentProfile.lastName.trim() === '') throw new Error("Last name is required");
    if (!studentProfile.dob || studentProfile.dob.trim() === '') throw new Error("Date of birth is required");
    if (!studentProfile.course || studentProfile.course.trim() === '') throw new Error("Course is required");
    if (!studentProfile.major || studentProfile.major.trim() === '') throw new Error("Major is required");
    if (!studentProfile.status || studentProfile.status.trim() === '') throw new Error("Student status is required");
    if (!studentProfile.address || studentProfile.address.trim() === '') throw new Error("Address is required");

    console.log(studentProfile);

    return await AuthAdapter.create(studentProfile);
}