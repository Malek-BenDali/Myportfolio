import { useState, useEffect, useRef } from "react"
import gsap, { Power2, Elastic } from "gsap"
//import { useWidth } from "../hooks"
import "../styles/contact.css"
import emailjs from "@emailjs/browser"

function Contact({ setOpenContact }) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const form = useRef()

	useEffect(() => {
		document.body.style.overflow = "hidden"

		return () => {
			document.body.style.overflow = "unset"
		}
	}, [])

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
			duration: 1.5,
		})
	}, [])
	const handleClose = async () => {
		await gsap.to(".contact-container", {
			top: "-60%",
			ease: Power2.easeOut,
			duration: 0.5,
		})
		setOpenContact(false)
	}
	const validForm = () => {
		if (!validateEmail()) return false
		if (name < 3) return false
		if (message < 10) return false
		return true
	}
	const handleMessageChange = newMessage => {
		setMessage(newMessage)
		if (newMessage.length > 10) {
			gsap.to(".textarea", {
				borderColor: "#378cf3",
				duration: 0.75,
			})
			gsap.to(".text-area-placeholder", {
				color: "#378cf3",
				duration: 0.75,
			})
		} else {
			gsap.to(".textarea", {
				borderColor: "#FE8C99",
				duration: 0.75,
			})
			gsap.to(".text-area-placeholder", {
				color: "#FE8C99",
				duration: 0.75,
			})
		}
	}
	const handleSubmit = e => {
		e.preventDefault()
		if (validForm()) {
			//send email
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_EMAIL_ID
				)
				.then(
					result => {
						console.log(result.text)
					},
					error => {
						console.log(error.text)
					}
				)
			setEmail("")
			setName("")
			setMessage("")
		} else {
			handleEmailChange(email, ".email-line", ".email-placeholder")
			handleNameChange(name, ".name-line", ".name-placeholder")
			handleMessageChange(message)
		}
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
				<form
					className="form-container"
					ref={form}
					onSubmit={e => handleSubmit(e)}
				>
					<div className="input-container">
						<p className="placeholder email-placeholder">Your Email</p>
						<input
							type="email"
							name="email"
							value={email}
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
					<div className="input-container">
						<p className="placeholder name-placeholder">Object</p>
						<input
							onFocus={() =>
								handleNameFocus(".name-line", name, ".name-placeholder")
							}
							onBlur={() => {
								handleBlur(name, ".name-placeholder")
							}}
							name="object"
							value={name}
							onChange={e =>
								handleNameChange(
									e.target.value,
									".name-line",
									".name-placeholder"
								)
							}
							type="text"
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
					<div className="center-content">
						<p className="text-area-placeholder">Message</p>
						<textarea
							className="textarea"
							name="message"
							value={message}
							onChange={e => handleMessageChange(e.target.value)}
							cols="30"
							rows="10"
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</form>
			</div>
		</>
	)
}

export default Contact
