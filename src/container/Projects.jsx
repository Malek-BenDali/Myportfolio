import React from "react"
import { api, GDE, satoripop, tracker } from "../assets"
import { useWidth } from "../hooks"

function Projects() {
	const width = useWidth()
	return (
		<div id="project">
			<h1 className="primary-color title-section">Recent projects</h1>
			<div className="projects-container">
				<div className="project-content">
					<div className="left-content text-side">
						<h2 className="primary-color">GDE</h2>
						<p>
							<span className="description">description :</span>I developed this
							web app while freelancing with a french company called{" "}
							<a href="https://www.tadyx.fr/" target="_blank" rel="noreferrer">
								TADYX group
							</a>
							, We used React and Redux to create the client side and AWS as a
							backend (baas)
						</p>
						<p>
							<span className="link">link</span> :{" "}
							<a
								href="https://www.globaldigitaleco.fr/"
								target="_blank"
								rel="noreferrer"
							>
								https://www.globaldigitaleco.fr/
							</a>
						</p>
					</div>
					<img className="right-content" src={GDE} alt="tracker website" />
				</div>
				<div className="project-content">
					{width > 1000 && (
						<img className="left-content" src={satoripop} alt="company"></img>
					)}
					<div className="right-content text-side">
						<h2 className="primary-color">Rooms</h2>
						<p>
							<span className="description">description :</span>I developed an
							Android/Ios app during my internship at a Tunisian company called{" "}
							<a
								href="https://www.satoripop.com/"
								target="_blank"
								rel="noreferrer"
							>
								SATORIPOP
							</a>
							, hereby I used React native and Redux to create the mobile app
							and Firebase as backend (baas)
						</p>
						<p>
							<span className="link">Git repo</span> :{" "}
							<a
								href="https://github.com/Malek-BenDali/audio-uploader"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/Malek-BenDali/audio-uploader
							</a>
						</p>
					</div>
					{width < 1000 && (
						<img className="left-content" src={satoripop} alt="company" />
					)}
				</div>
				<div className="project-content">
					<div className="left-content text-side">
						<h2 className="primary-color">Malek Films</h2>
						<p>
							<span className="description">description :</span>I created this
							project to improve my skills in Node, Express and Mongodb while
							programming an api with the purpose to buy and rent books.
						</p>
						<p>
							<span className="link">Git repo</span> :{" "}
							<a
								href="https://github.com/Malek-BenDali/Maleks-films"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/Malek-BenDali/Maleks-films
							</a>
						</p>
					</div>
					<img className="right-content" src={api} alt="api" />
				</div>
				<div className="project-content">
					{width > 1000 && (
						<img
							className="left-content no-border"
							src={tracker}
							alt="tracker website"
						/>
					)}
					<div className="right-content text-side no-border">
						<h2 className="primary-color">Covid tracker</h2>
						<p>
							<span className="description">description :</span>I created this
							project to improve my React and css skills as well as getting to
							know Chart js and react leaflet library. The data of this project
							was provided by{" "}
							<a href="https://disease.sh" target="_blank" rel="noreferrer">
								disease.sh
							</a>{" "}
							api
						</p>
						<p>
							<span className="link">link</span> :{" "}
							<a
								href="https://traqueur-covid.netlify.app/"
								rel="noreferrer"
								target="_blank"
							>
								https://traqueur-covid.netlify.app/
							</a>
							<br />
							<span className="link">Git repo</span> :{" "}
							<a
								href="https://github.com/Malek-BenDali/Traqueur-du-covid"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/Malek-BenDali/Traqueur-du-covid
							</a>
						</p>
					</div>
					{width < 1000 && (
						<img
							className="left-content no-border"
							src={tracker}
							alt="tracker website"
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Projects
