// Import the necessary React module.
import React from "react";

// Import the 'render' function from '@testing-library/react' to render components in a test environment.
import { fireEvent, render } from "@testing-library/react";

// Import the Jest DOM extension to add custom matchers like 'toBeInTheDocument'.
import '@testing-library/jest-dom/extend-expect';

// Import the 'LoginPage' component that will be tested.
import LoginPage from "./LoginPage";

// Describe block to group related tests for the 'LoginPage' component.
describe(LoginPage, () => {

    // Test to check if the login button is rendered on the login page.
    it("Check that login page has login button", () => {
        // Render the 'LoginPage' component and extract the 'getByText' utility function.
        const {getByText} = render(<LoginPage/>);
        
        // Use 'getByText' to find the element with 'Login' as 'buttonText'.
        const loginButton = getByText("Login");

        // Assert that the button element is in the document (i.e., it has been rendered).
        expect(loginButton).toBeInTheDocument();
    });

    // Test to check if the User ID input field is rendered on the login page.
    it("Check that login page has user ID input field", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);
        
        // Use 'getByTestId' to find the element with the 'data-testid' of 'userIDField'.
        const userIDField = getByTestId("userIDField");

        // Assert that the input field for User ID is in the document.
        expect(userIDField).toBeInTheDocument();
    });

    // Test to check if the User ID input field behaves correctly.
    it ("Should update the userID field on input", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);

        // Use 'getByTestId' to find the element with the 'data-testid' of 'userIDField'.
        const userIDField = getByTestId("userIDField");

        // Changes the value of userIDField using fireEvent
        fireEvent.change(userIDField, {target: {value: "2584925"}});

        // Assert that the input field for User ID contains the correct value
        expect(userIDField.value).toBe("2584925");
    });

    // Test to check if the User ID label is rendered on the login page.
    it ("Check that login page has user ID label", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);
        
        // Use 'getByTestId' to find the element with the 'data-testid' of 'userIDLabel'.
        const userIDLabel = getByTestId("userIDLabel");

        // Assert that the label for User ID is in the document.
        expect(userIDLabel).toBeInTheDocument();
    });

    // Test to check if the password input field is rendered on the login page.
    it("Check that login page has password input field", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);
        
        // Use 'getByTestId' to find the element with the 'data-testid' of 'passwordField'.
        const passwordField = getByTestId("passwordField");

        // Assert that the input field for the password is in the document.
        expect(passwordField).toBeInTheDocument();
    });

    // Test to check if the Password input field behaves correctly.
    it ("Should update the userID field on input", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);

        // Use 'getByTestId' to find the element with the 'data-testid' of 'passwordField'.
        const passwordField = getByTestId("passwordField");

        // Changes the value of passwordField using fireEvent
        fireEvent.change(passwordField, {target: {value: "password1234"}});

        // Assert that the input field for password contains the correct value
        expect(passwordField.value).toBe("password1234");
    });

    // Test to check if the password label is rendered on the login page.
    it ("Check that login page has password label", () => {
        // Render the 'LoginPage' component and extract the 'getByTestId' utility function.
        const {getByTestId} = render(<LoginPage/>);
        
        // Use 'getByTestId' to find the element with the 'data-testid' of 'passwordLabel'.
        const passwordLabel = getByTestId("passwordLabel");

        // Assert that the label for the password is in the document.
        expect(passwordLabel).toBeInTheDocument();
    });
});
