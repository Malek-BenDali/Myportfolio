import { useEffect } from "react"
import gsap from "gsap"

function DrawerMenu({ setOpenMenu, handleNavigation }) {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.3,
			},
		})
		tl.to(".drawer-menu-container", {
			height: "50vh",
		})
		tl.from(".drawer-content", {
			x: "-100%",
			opacity: 0,
			stagger: 0.4,
			//duration: 0.3,
		})
	}, [])

	const handleClose = async () => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.3,
			},
		})
		tl.to(".drawer-content", {
			x: "-100%",
			opacity: 0,
			stagger: 0.4,
			reversed: true,
		})
		await tl.to(".drawer-menu-container", { height: 0 })
		setOpenMenu(false)
	}

	const handleNavClick = async toSection => {
		handleNavigation(toSection)
		gsap.to(".drawer-content", { opacity: 0 })
		await gsap.to(".drawer-menu-container", { height: 0 })
		setOpenMenu(false)
	}

	return (
		<>
			<div className="drawer-menu-overlay" onClick={() => handleClose()} />
			<div className="drawer-menu-container">
				<h2
					className="drawer-content"
					onClick={() => handleNavClick("#service")}
				>
					Services
				</h2>
				<h2
					className="drawer-content"
					onClick={() => handleNavClick("#project")}
				>
					Pojects
				</h2>
				<h2 className="drawer-content" onClick={() => handleNavClick("#about")}>
					About
				</h2>
			</div>
		</>
	)
}

export default DrawerMenu
