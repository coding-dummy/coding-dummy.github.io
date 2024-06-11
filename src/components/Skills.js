import "../css/Skills.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { SkillCard } from "./SkillCard";

export const Skills = () => {

    const skills = [
        {
            title: "Languages",
            list: ["JavaScript", "TypeScript", "C#",],
        },
        {
            title: "Framework",
            list: ["React", "React Native", "Unity",],
        },
        {
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
                            <p>A brief overview of what I am able to do.</p>
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