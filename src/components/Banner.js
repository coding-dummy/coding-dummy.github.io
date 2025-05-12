import "../css/Banner.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/meIrl.png";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isRemoving, setIsRemoving] = useState(false);
    const toShow = [ "Graduate.", "Designer.", "Developer.", "Husband."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const period = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    })

    const tick = () => {
        let i = loopNum % toShow.length;
        let fullText = toShow[i];
        let updatedText = isRemoving ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isRemoving) {
            setDelta(prevDelta => prevDelta / 15)
        }

        if (!isRemoving && updatedText === fullText) {
            setIsRemoving(true);
            setDelta(period);
        }   else if(isRemoving && updatedText === '') {
            setIsRemoving(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hello, I'm Tavis. `}<br></br><span className="wrap">I am a {text}</span></h1>
                        <p>I am a graduate with a BEng in IT from OAMK, with a keen interest in web design, coding, customer service and all things IT. I was born and raised in the United Kingdom, but I moved to Oulu here in Finland a few years back and haven't regretted the choice since.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="me" src={me} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}