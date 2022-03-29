import React from "react"
import { photo } from "../assets"
import "../styles/home.css"
function About() {
	return (
		<div id="about">
			<img src={photo} alt="malek ben dali" className="about-img" />
			<div>
				<h1>
					About <span className="primary-color">Me</span>
				</h1>
				<h2 className="about-subtitle">Full stack developer</h2>
				<p>I am a full stack developer w</p>
				<h2 className="about-subtitle">Interest</h2>
				<p>I am passionate about mangas, sport and new Technologies</p>
				<button className="about-button">Download Resume</button>
			</div>
		</div>
	)
}

export default About
