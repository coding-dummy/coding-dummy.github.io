import "../css/SkillCard.css";
import { Col } from "react-bootstrap";

export const SkillCard = ({ title, list, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="skill-txtx">
                <h3>{title}</h3>
                <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </Col>
    )
}
