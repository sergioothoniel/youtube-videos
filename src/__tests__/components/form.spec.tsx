import { render, screen } from "@testing-library/react";
import Form from "../../components/form";

describe("Form Component", () => {
	test("should be able to render a Form component", () => {
        
		render(<Form validFunction={console.log} animated={false}/>)
		
		const formElement = screen.getByRole("form")
		const inputElement = screen.getByPlaceholderText("Pesquisar")
        const buttonElement = screen.getByText("Buscar")
        
        expect(formElement).toBeInTheDocument()               
        expect(inputElement).toBeInTheDocument()          
        expect(buttonElement).toBeInTheDocument()              
	})
})