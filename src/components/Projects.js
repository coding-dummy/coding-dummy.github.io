import "../css/Projects.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import cliche from "../assets/img/cliche-idle.png";
import hermes from "../assets/img/hermes.png";
import ene from "../assets/img/ene.png";
import atk from "../assets/img/atk-store.png";

export const Projects = () => {

	const projects = [
		{
			link: "https://urn.fi/URN:NBN:fi:amk-2024051311166",
			title: "ENE Mapping App",
			description: "My thesis documenting the development process of a web-based mapping application aimed at facilitating user-generated markers for location-specific information sharing, themed around the usage of an energy supplier company.",
			imgUrl: ene,
			info: "Created with JavaScript in React.",
		},
		{
			link: "https://github.com/Cliche-Studio/Cliche-Idle-App",
			title: "Cliché Idle",
			description: "A group project, where we are created a basic idle mobile game using Unity.",
			imgUrl: cliche,
			info: "Created with C# in Unity.",
		},
		{
			link: "https://github.com/AWAProject29",
			title: "Hermes",
			description: "A 2nd year group project where we created a food delivery application. I was largly in charge of the frontend with UI design and assets.",
			imgUrl: hermes,
			info: "Created with JavaScript in React.",
		},
		{
			link: "https://github.com/coding-dummy/Old-portfolio-page/tree/master/Year%201/OOBP%20Exercise1",
			title: "Clothing Store",
			description: "A 1st year assignment where I was tasked to create an online clothing store. It was my first time using JavaScript extensively.",
			imgUrl: atk,
			info: "Created with JavaScript.",
		}, 
	];

	return (
		<section className="projects" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Projects</h2>
									<p>A showcase of some of the personal work that I have done over the years.</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
											<Tab.Pane eventKey="first">
												<Row>
													{
														projects.map((project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															)
														})
													}
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
