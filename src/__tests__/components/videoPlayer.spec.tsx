import { render, screen } from "@testing-library/react";
import VideoPlayer from "../../components/videoPlayer"

describe("VideoPlayer Component", () => {
	test("should be able to render a VideoPlayer component", () => {
        
		render(<VideoPlayer playerWidth={800} videoId={'LXb3EKWsInQ'}></VideoPlayer>)
		
		const iframeElement = screen.getByTitle('YouTube video player')
        
        expect(iframeElement).toBeInTheDocument()              
                      
	})
})