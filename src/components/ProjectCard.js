import { useState } from "react";
import "../css/ProjectCard.css";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ link, imgUrl, title, description, info }) => {
    const [tapped, setTapped] = useState(false);

    const handleClick = (e) => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice && !tapped) {
            e.preventDefault();
            setTapped(true);
        }
    };

    return (
        <Col size={12} sm={6} md={6}>
            <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                onClick={handleClick}
                className={tapped ? "tapped" : ""}
            >
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
    );
};