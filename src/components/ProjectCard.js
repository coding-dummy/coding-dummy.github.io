import "../css/ProjectCard.css";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ link, imgUrl, title, description, info }) => {
    return (
        <Col size={12} sm={6} md={6}>
            <a href={link} target="_blank" rel="noreferrer noopener">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="Project" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <span>{info}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}
