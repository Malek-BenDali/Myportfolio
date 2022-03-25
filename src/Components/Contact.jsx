import { useState, useEffect } from "react"
import gsap, { Power2, Elastic } from "gsap"
import { useWidth } from "../hooks"
import "../styles/contact.css"

function Contact({ setOpenContact }) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const width = useWidth()
	const start =
		"M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
	const end =
		"M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512"

	const handleNameFocus = (ref, property, placeholder) => {
		const tl = gsap.timeline({ defaults: { duration: 1 } })
		if (!property) {
			tl.fromTo(
				ref,
				{ attr: { d: start } },
				{ attr: { d: end }, ease: Power2.easeOut, duration: 0.75 }
			)
			tl.to(
				ref,
				{ attr: { d: start }, ease: Elastic.easeOut.config(3, 0.5) },
				"<50%"
			)
			//placeholder shift
			tl.to(
				placeholder,
				{
					top: "-1em",
					transformOrigin: "left",
					scale: 0.7,
					duration: 0.5,
					ease: Power2.easeOut,
				},
				"<"
			)
		}
	}
	const handleBlur = (property, placeholder) => {
		const tl = gsap.timeline({ defaults: { duration: 1 } })
		if (!property) {
			//placeholder shift
			tl.to(placeholder, {
				top: "20%",
				//left: 0,
				scale: 1,
				duration: 0.5,
				ease: Power2.easeOut,
			})
		}
	}
	const validateEmail = () => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	}
	const handleEmailChange = (newEmail, line, placeHolder) => {
		setEmail(newEmail)
		if (validateEmail()) {
			colorize("#378cf3", line, placeHolder)
		} else {
			colorize("#FE8C99", line, placeHolder)
		}
	}
	const colorize = (color, line, placeHolder) => {
		gsap.to(line, { stroke: color, duration: 0.7 })
		gsap.to(placeHolder, { color, duration: 0.75 })
	}
	const handleNameChange = (newName, line, placeHolder) => {
		setName(newName)
		if (newName.length > 2) {
			colorize("#378cf3", line, placeHolder)
		} else {
			colorize("#FE8C99", line, placeHolder)
		}
	}
	useEffect(() => {
		gsap.from(".contact-container", {
			top: -100,
			ease: Elastic.easeOut.config(1.5, 1),
			duration: 1,
		})
	}, [])
	const handleClose = async () => {
		await gsap.to(".contact-container", {
			top: "-60%",
			ease: Power2.easeOut,
		})
		setOpenContact(false)
	}

	return (
		<>
			<div className="overlay" onClick={() => handleClose()} />
			<div className="contact-container">
				<div className="contact-left">
					<h1>Contact Me</h1>
					<p>
						Let's stay in touch.
						<br />
						For more information
					</p>
				</div>
				<form className="form-container">
					<div className="input-container">
						<p className="placeholder name-placeholder">Your Name</p>
						<input
							onFocus={() =>
								handleNameFocus(".name-line", name, ".name-placeholder")
							}
							onBlur={() => {
								handleBlur(name, ".name-placeholder")
							}}
							value={name}
							onChange={e =>
								handleNameChange(
									e.target.value,
									".name-line",
									".name-placeholder"
								)
							}
							type="text"
							autoComplete="false"
							className="input-name input"
						/>
						<svg
							className="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="elastic-line name-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="input-container">
						<p className="placeholder email-placeholder">Your Email</p>
						<input
							type="email"
							autoComplete="nope"
							className="input-email input"
							onFocus={() =>
								handleNameFocus(".email-line", email, ".email-placeholder")
							}
							onBlur={() => {
								handleBlur(email, ".email-placeholder")
							}}
							onChange={e =>
								handleEmailChange(
									e.target.value,
									".email-line",
									".email-placeholder"
								)
							}
						/>
						<svg
							className="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="elastic-line email-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="center-content">
						<p className="text-area-placeholder">Content</p>
						<textarea id="" cols="30" rows="10"></textarea>
					</div>
				</form>
			</div>
		</>
	)
}

export default Contact
