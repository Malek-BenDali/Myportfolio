import { useEffect, useState } from "react"
import { useWidth } from "../hooks"
import gsap from "gsap"
import "../styles/navbar.css"
import { DrawerMenu } from "../Components"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/all"

function Navbar() {
	gsap.registerPlugin(ScrollToPlugin)
	gsap.registerPlugin(ScrollTrigger)
	const width = useWidth()
	const [openMenu, setOpenMenu] = useState(false)
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
	useEffect(() => {
		const tlSplit = gsap.timeline({
			scrollTrigger: {
				trigger: ".home-container",
				start: "0%",
				end: "20%",
				scrub: true,
				//markers: {
				//	startColor: "red",
				//	endColor: "red",
				//},
			},
		})
		tlSplit.to(".navbar-container", {
			backgroundColor: "rgba(0,0,0,0.7)",
		})
	}, [])

	const firstName = "alek".split("")
	const secondName = "en".split("")
	const lastName = "ali".split("")
	const handleNavigation = scrollTo => {
		gsap.to(window, { duration: 0.75, scrollTo })
	}

	return (
		<div className="navbar-container">
			<div className="navbar-name">
				<h1 className="special-charactere">M</h1>
				{firstName.map((caracter, i) => (
					<span className="letter" key={i}>
						{caracter}
					</span>
				))}
				<h1 className="special-charactere">B</h1>
				{secondName.map(caracter => (
					<span className="letter">{caracter}</span>
				))}
				<h1 className="special-charactere">D</h1>
				{lastName.map(caracter => (
					<span className="letter">{caracter}</span>
				))}
			</div>
			{width > 1000 ? (
				<div className="navbar-content">
					<h2
						onClick={() => handleNavigation("#home")}
						className="navbar-details"
					>
						Home
					</h2>
					<h2
						onClick={() => handleNavigation("#service")}
						className="navbar-details"
					>
						Services
					</h2>
					<h2
						onClick={() => handleNavigation("#project")}
						className="navbar-details"
					>
						Pojects
					</h2>
					{/*<h2
						onClick={() => handleNavigation("#about")}
						className="navbar-details"
					>
						About
					</h2>*/}
				</div>
			) : (
				<>
					<div onClick={() => setOpenMenu(true)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="24"
							viewBox="0 0 24 24"
							className="navbar-details"
							fill="#eee"
						>
							<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
						</svg>
					</div>
					{openMenu && (
						<DrawerMenu
							setOpenMenu={setOpenMenu}
							handleNavigation={handleNavigation}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default Navbar
