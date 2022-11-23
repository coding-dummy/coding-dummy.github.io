import "../css/ProjectCard.css";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ link, imgUrl, title, description, info }) => {
  return (
      <Col size={12} sm={6} md={6}>
          <div className="proj-imgbx">
              <img src={imgUrl} alt="Project"/>
              <div className="proj-txtx">
              <a href={link} target="_blank" rel="noreferrer noopener"><h4>{title}</h4></a>
                  <p>{description}</p>
                  <span>{info}</span>
              </div>
          </div>
      </Col>
  )
}
