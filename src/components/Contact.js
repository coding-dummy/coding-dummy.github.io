import "../css/Contact.css";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                <h2>Contact</h2>
                <p>I am currently looking for work in customer service and all things IT!</p>
                    <Col className="align-items-center">
                        <div>
                            <h3>You can send me an email at <a target="_blank" rel="noreferrer noopener" href="mailto:tavissinclair@live.co.uk"><h3>tavissinclair@live.co.uk</h3></a></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}