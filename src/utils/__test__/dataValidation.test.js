// Import the necessary functions to be tested from the dataValidation module.
// These functions are likely responsible for validating a user's password and checking if a user exists.
import { isValidPassword, isUserExists } from "../dataValidation";

// Start a test suite for the `isValidPassword` function.
// The `describe` function is used to group related tests together.
describe(isValidPassword, () => {

    // Define a test case that checks if the password validation function properly handles passwords that are too short.
    // The `it` function describes what the test case should do.
    it("Should have length longer than 8", () => {
        // The test expects the `isValidPassword` function to return a specific result when passed a password that is too short.
        // In this case, the password "000000" (6 characters long) should trigger a validation failure.
        // The expected return value is an object indicating the password is invalid, with a message explaining that the password must be at least 8 characters long.
        expect(isValidPassword("000000")).toStrictEqual({
            valid: false, // Indicates that the password is not valid.
            message: "Password must be at least 8 characters long." // Provides a message explaining why the password is invalid.
        });
    });
});

// Start a test suite for the `isUserExists` function.
describe(isUserExists, () => {

    // Define a test case to check if the function correctly identifies an existing user.
    it ("Check validation for existing user passes", () => {
        // The test expects the `isUserExists` function to return a success message when the user ID "2584925" exists.
        // The expected return value is an object indicating the user exists and is logged in, with a success message.
        expect(isUserExists("2584925")).toStrictEqual({
            valid: true, // Indicates that the user exists and the validation passed.
            message: "Logged In \(O_O)/." // Provides a success message.
        });
    });

    // Define a test case to check if the function correctly identifies a non-existing user.
    it ("Check validation for existing user fails", () => {
        // The test expects the `isUserExists` function to return something different from a success message when the user ID "2584926" does not exist.
        // The expected outcome is that the returned value does not strictly equal the success object, indicating a failure in validation.
        expect(isUserExists("2584926")).not.toStrictEqual({
            valid: true, // This part of the object should not match, indicating the user does not exist.
            message: "Logged In \(O_O)/." // The message should be different from this, signaling a failed validation.
        });
    });
});
