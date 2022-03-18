import { useEffect } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import "../styles/home.css"

function Home() {
	gsap.registerPlugin(TextPlugin)
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.5,
			},
		})
		tl.to(".text1", 1, { text: "Hello,", delay: 2.7 })
		tl.to(".text2", 1, { text: "My Name Is" })
		tl.to(".text3", 1, { text: "Malek" })
	}, [])

	return (
		<div className="home-container">
			<h2 className="text1"></h2>
			<h2 className="text2"></h2>
			<h2 className="color-primary text3"></h2>
		</div>
	)
}

export default Home
