// Import the React library, which is required to use JSX and create React components.
import React from "react";

// Import the `jest-dom` extended matchers for use with Jest. This allows you to use custom matchers
// like `toBeInTheDocument` in your tests.
import '@testing-library/jest-dom/extend-expect';

// Import necessary functions from `@testing-library/react`. 
// `cleanup` is used to unmount components and clear the DOM after each test, 
// and `render` is used to render React components in a test environment.
import { cleanup, render } from "@testing-library/react";

// Import the `Button` component that is being tested.
import Button from "./Button";

// `afterEach` is a Jest hook that runs after each test. 
// Here, it calls `cleanup()` to unmount any components rendered in the previous test and clean up the DOM.
// This helps prevent potential side effects between tests.
afterEach(() => {
    cleanup();
});

// `describe` is a Jest function used to group related tests together.
// The first argument is the name of the test suite (here, it's the `Button` component).
// The second argument is a callback function containing the actual tests.
describe(Button, () => {

    // The first test case: "Button should render text component".
    // This test checks if the `Button` component correctly renders an element with a `data-testid` of "buttonText".
    it("Button should render text component", () => {
        // `render` renders the `Button` component with the prop `text` set to "Placeholder".
        // It returns utility functions like `getByTestId` to query the rendered output.
        const { getByTestId } = render(<Button text="Placeholder" />);

        // `getByTestId` is used to find the element with `data-testid="buttonText"` in the rendered output.
        const textElement = getByTestId("buttonText");

        // `expect` is a Jest assertion function that checks if the `textElement` is present in the document.
        // `toBeInTheDocument` is a matcher from `@testing-library/jest-dom` that verifies the element is in the DOM.
        expect(textElement).toBeInTheDocument();
    });

    // The second test case: "Button displays correct text".
    // This test checks if the `Button` component displays the correct text passed via the `text` prop.
    it("Button displays correct text", () => {
        // Again, `render` is used to render the `Button` component with the `text` prop set to "Placeholder".
        const { getByTestId } = render(<Button text="Placeholder" />);

        // `getByTestId` retrieves the element with `data-testid="buttonText"`.
        const textElement = getByTestId("buttonText");

        // `textContent` retrieves the text content of the `textElement`.
        const textValue = textElement.textContent;

        // `expect` checks that the `textValue` matches the string "Placeholder".
        expect(textValue).toEqual("Placeholder");
    });
});
