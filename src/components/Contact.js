import "../css/Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.png";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                <h2>Contact</h2>
                <p>If you wish to get in touch with me for any reason, feel free to!</p>
                    <Col className="align-items-center">
                        <div>
                            <img src={me} alt="me"></img>
                        </div>
                    </Col>
                    <Col className="align-items-center">
                        <div>
                            <h3>You can send me an email at <a target="_blank" rel="noreferrer noopener" href="mailto:codingdummy@outlook.com"><h3>codingdummy@outlook.com</h3></a></h3>
                            <p>OR</p>
                            <h3>You can send me a message on Discord, at Tavis#2028</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}