import React from "react"
import { GDE, satoripop, tracker } from "../assets"

function Projects() {
	return (
		<div id="project">
			<h1 className="primary-color title-section">Recent projects</h1>
			<div className="projects-container">
				<div className="project-content">
					<div className="left-content text-side">
						<h2 className="primary-color">GDE</h2>
						<p>
							<span className="description">description :</span>I created this
							web app while freelancing with a french company called{" "}
							<a href="https://www.tadyx.fr/" target="_blank">
								TADYX group
							</a>
							, We used React and Redux to create the client side and AWS as a
							backend (baas)
						</p>
						<p>
							<span className="link">link</span> :{" "}
							<a href="https://www.globaldigitaleco.fr/" target="_blank">
								https://www.globaldigitaleco.fr/
							</a>
						</p>
					</div>
					<img className="right-content" src={GDE}></img>
				</div>
				<div className="project-content">
					<img className="left-content" src={satoripop}></img>
					<div className="right-content text-side">
						<h2 className="primary-color">Rooms</h2>
						<p>
							<span className="description">description :</span>I created a
							mobile while my internship in a Tunisian company called{" "}
							<a href="https://www.satoripop.com/" target="_blank">
								SATORIPOP
							</a>
							, I used React native and Redux to create an Android/Ios mobile
							and Firebase as backend (baas)
						</p>
						<p>
							<span className="link">Git repo</span> :{" "}
							<a
								href="https://github.com/Malek-BenDali/audio-uploader"
								target="_blank"
							>
								https://github.com/Malek-BenDali/audio-uploader
							</a>
						</p>
					</div>
				</div>
				<div className="project-content">
					<div className="left-content text-side">
						<h2 className="primary-color">Covid tracker</h2>
						<p>
							<span className="description">description :</span>I created this
							project to improve my React and css skills also to use Chart js
							and react leaflet library. I used{" "}
							<a href="https://disease.sh" target="_blank">
								https://disease.sh
							</a>{" "}
							as a backend
						</p>
						<p>
							<span className="link">link</span> :{" "}
							<a href="https://traqueur-covid.netlify.app/" target="_blank">
								https://traqueur-covid.netlify.app/
							</a>
							<br />
							<span className="link">Git repo</span> :{" "}
							<a
								href="https://github.com/Malek-BenDali/Traqueur-du-covid"
								target="_blank"
							>
								https://github.com/Malek-BenDali/Traqueur-du-covid
							</a>
						</p>
					</div>
					<img className="right-content" src={tracker}></img>
				</div>
			</div>
		</div>
	)
}

export default Projects
