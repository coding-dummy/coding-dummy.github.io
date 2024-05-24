import "../css/Skills.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import code from "../assets/img/code.png";
import gear from "../assets/img/gears.png";
import design from "../assets/img/design.png";

export const Skills = () => {

    const skills = [
        {
            imgUrl: code,
            title: "Languages",
            list: ["JavaScript", "C#",],
        },
        {
            imgUrl: gear,
            title: "Framework",
            list: ["React", "React Native", "Unity",],
        },
        {
            imgUrl: design,
            title: "Tools",
            list: ["Figma", "Adobe Photoshop 2020", "Sony Vegas",],
        },
    ];

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Skills</h2>
                            <p>A brief overview of what I am able to do and currently learning.</p>
                            <Tab.Container id="skills-tabs" defaultActiveKey="first">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                skills.map((skill, index) => {
                                                    console.log(skill.list)
                                                    return (
                                                        <SkillCard
                                                            key={index}
                                                            list={skill.list}
                                                            imgUrl={skill.imgUrl}
                                                            title={skill.title}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}