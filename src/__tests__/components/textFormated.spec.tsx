import { render, screen } from "@testing-library/react";
import TextFormated from "../../components/textFormated"

describe("VideoPlayer Component", () => {
	test("should be able to render a VideoPlayer component", async () => {
        
		render(<TextFormated text="test"></TextFormated>)
		
		const articleElement = screen.getByRole('article')
        const pElement = screen.getByText('test')
        const spanElement = screen.getByText('...ver mais')
        
        expect(articleElement).toBeInTheDocument()
        expect(pElement).toBeInTheDocument()  
        expect(spanElement).toBeInTheDocument()            
                      
	})
})