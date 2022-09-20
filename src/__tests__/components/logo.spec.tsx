import { render, screen } from "@testing-library/react";
import Logo from "../../components/logo"

describe("Logo Component", () => {
	test("should be able to render a Logo component", () => {
        
		render(<Logo animated={false}/>)
		
		const h1Element = screen.getByText("YouTube")		
        const spanElement = screen.getByText("API")
        
        expect(h1Element).toBeInTheDocument()               
        expect(spanElement).toBeInTheDocument()                
	})
})