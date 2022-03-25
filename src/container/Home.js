import { useState, useEffect } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { useWidth } from "../hooks"
import "../styles/home.css"
import { Contact } from "../Components"

function Home() {
	gsap.registerPlugin(TextPlugin)
	const [openContact, setOpenContact] = useState(false)

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.5,
			},
		})
		tl.to(".text1", 0.5, { text: "Hello,", delay: 2.7 })
		tl.to(".text2", 0.5, { text: "My Name Is" })
		tl.to(".text3", 0.5, { text: "Malek" })
		tl.from(".contact-button", {
			width: "0vw",
			opacity: 0,
		})
		tl.to(".contact-button", 1, { text: "Contact me" })
		gsap.set(".arrow-down", { marginTop: "1rem" })
		tl.from(".home-explore", { opacity: 0 })
		tl.from(".arrow-down", {
			y: 10,
			yoyo: true,
			repeat: -1,
			duration: 0.5,
		})
	}, [])

	return (
		<div id="home" className="home-container">
			<h2 className="text1"></h2>
			<h2 className="text2"></h2>
			<h2 className="color-primary text3"></h2>
			<div className="hid">
				<div
					className="contact-button"
					onClick={() => setOpenContact(true)}
				></div>
			</div>
			<div className="home-explore">
				<p> scroll to explore </p>
				<svg
					className="arrow-down"
					width="24"
					height="27"
					viewBox="0 0 24 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.9393 26.0607C11.5251 26.6464 12.4749 26.6464 13.0607 26.0607L22.6066 16.5147C23.1924 15.9289 23.1924 14.9792 22.6066 14.3934C22.0208 13.8076 21.0711 13.8076 20.4853 14.3934L12 22.8787L3.51472 14.3934C2.92893 13.8076 1.97918 13.8076 1.3934 14.3934C0.807612 14.9792 0.807612 15.9289 1.3934 16.5147L10.9393 26.0607ZM10.5 0L10.5 25H13.5L13.5 0L10.5 0Z"
						fill="#EEEEEE"
					/>
				</svg>
			</div>
			{openContact && <Contact setOpenContact={setOpenContact} />}
		</div>
	)
}

export default Home
