import { front, mobile, server } from "../assets"
//import gsap from "gsap"
//import { ScrollTrigger } from "gsap/all"

function Services() {
	//gsap.registerPlugin(ScrollTrigger)

	//useEffect(() => {
	//	const animation = gsap.timeline({
	//		scrollTrigger: {
	//			trigger: ".service-container",
	//			start: "50%",
	//			end: "60%",
	//			markers: {
	//				startColor: "red",
	//				endColor: "red",
	//			},
	//		},
	//	})
	//	//animation.from(".service-container", {
	//	//	opacity: 0,
	//	//})
	//}, [])

	return (
		<div id="service" className="service-container">
			<h1 className="primary-color">SERVICES</h1>
			<div className="card-container">
				<div className="service-card">
					<img className="card-image" src={front} alt="frontend" />
					<h2> Frontend </h2>
					<p>
						To build a responsive dynamic web app, I use React library or Next
						js Framework, Redux to manage the data and finally CSS/tailwind to
						improve the styling of the app
					</p>
					<h3>1.5 year experience </h3>
				</div>
				<div className="service-card ">
					<img className="card-image" src={server} alt="server" />
					<h2> Backend </h2>
					<p>
						To build a server side app, I usually use Node js as a runtime
						environement , Express js as As backend framework, Mongo db/Postgres
						sql as a database
					</p>
					<h3>1 year experience </h3>
				</div>
				<div className="service-card ">
					<img className="card-image" src={mobile} alt="frontend" />
					<h2> Mobile dev </h2>
					<p>
						I use React Native Framework to build native mobile apps and Redux
						to handle the data inside the app{" "}
					</p>
					<h3>1 year experience </h3>
				</div>
				{/*<div className="service-card ">
					<img className="card-image" src={mobile} />
					<h2> Cloud Computing </h2>
					<p>
						I used AWS and Google cloud to build serverless backend for few apps
						since its faster and easier to build, and they provides a lot of
						flexibility
					</p>
					<h3>4 months experience </h3>
				</div>*/}
			</div>
		</div>
	)
}

export default Services
