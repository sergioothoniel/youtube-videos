import { render, screen } from "@testing-library/react";
import CardVideo from "../../components/cardVideo"

describe("CardVideo Component", () => {
	test("should be able to render a CardVideo component", () => {
        
		render(<CardVideo description="test description" thumbnailURL="test" title="test title" videoId="test" />)
		
		const imgElement = screen.getByRole("img")		
        const descriptionElement = screen.getByText("test description")
        const titleElement = screen.getByText("test title")
        
        expect(imgElement).toBeInTheDocument()               
        expect(descriptionElement).toBeInTheDocument()  
        expect(titleElement).toBeInTheDocument()               
	})
})