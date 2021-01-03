import validator from 'validator';
import { formatDate } from './converter';
// Document : https://www.npmjs.com/package/validator

export const validateEmail = (email = "") => {
    return validator.isEmail(email);
}

export const validateUsername = (username = "") => {
    return validator.isAlphanumeric(username,['en-US']) && validator.isLength(username,{ min:3, max:32 });
}

export const validateDisplayName = (displayName = "") => {
    return validator.isLength(displayName, {max:32});
}

export const validateDateOfBirth = (dateOfBirth = "") => {
    let currentDate = formatDate(new Date(), "YYYY-MM-DD");
    
    return validator.isDate(dateOfBirth, "YYYY-MM-DD") && (new Date(dateOfBirth) < new Date(currentDate)); 
}