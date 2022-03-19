import { useEffect } from "react"
import { useWidth } from "../hooks"
import gsap, { Elastic } from "gsap"
import "../styles/navbar.css"

function Navbar() {
	const width = useWidth()

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.5,
			},
		})
		tl.from(".special-charactere", { y: -100, stagger: 0.2 }, "<")
		tl.from(
			".letter",
			{
				y: "200%",
				stagger: 0.1,
			},
			"<70%"
		)
		tl.from(
			".navbar-details",
			{
				opacity: 0,
				delay: 1,
				stagger: 0.2,
			},
			"<20%"
		)
	}, [])
	const firstName = "alek".split("")
	const secondName = "en".split("")
	const lastName = "ali".split("")

	return (
		<div className="navbar-container">
			<h1 className="navbar-name">
				<h1 className="special-charactere">M</h1>
				{firstName.map(caracter => (
					<span className="letter">{caracter}</span>
				))}
				<h1 className="special-charactere">B</h1>
				{secondName.map(caracter => (
					<span className="letter">{caracter}</span>
				))}
				<h1 className="special-charactere">D</h1>
				{lastName.map(caracter => (
					<span className="letter">{caracter}</span>
				))}
			</h1>
			<div className="navbar-content">
				<h2 className="navbar-details">Home</h2>
				<h2 className="navbar-details">Services</h2>
				<h2 className="navbar-details">Pojects</h2>
				<h2 className="navbar-details">About</h2>
			</div>
		</div>
	)
}

export default Navbar
