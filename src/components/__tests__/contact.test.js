import { screen , render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// grouping test cases

describe("Test cases for contact", () => {

    test("Should load contact us component", () =>{

        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load button component", () => {
        render(<Contact/>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load button using text", () => {
    
        render(<Contact />)
    
        const buttonText = screen.getByText("Submit");
    
        expect(buttonText).toBeInTheDocument();
    })
    
    //multiple input boxes
    
    it("Should load 2 input boxes", () => {
    
        render(<Contact/>)
    
        const inputBox = screen.getAllByRole("textbox");
    
        expect(inputBox.length).not.toBe(3)
    })

})

