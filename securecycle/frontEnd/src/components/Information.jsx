import { Container, Row, Col } from "reactstrap";
import styles from "./Information.module.css";
import "animate.css/animate.min.css";
const Information = () => {
  const guidelines = [
    {
      text: "Choosing and maintaining your bicycle is a very important part of a bike rider safety.",
      direction: "Left",
      icon: "\ueb29",
    },
    {
      text: "Bicycles are vehicles, and under the law bike riders have the same rights and responsibilities as car drivers.",
      direction: "Right",
      icon: "\uE873",
    },
    {
      text: "All bike riders, their passengers and scooter riders are required to wear a bike helmet in Victoria.",
      direction: "Left",
      icon: "\uea2d",
    },
    {
      text: "Riders of power-assisted bicycles are required to obey the same road rules as drivers.",
      direction: "Right",
      icon: "\ue90e",
    },
  ];

  return (
    <Container>
      <h2
        className={styles.h2Info}
        data-aos="fade-up"
        style={{ color: "#0b0d7b" }}
      >
        Victorian Cyclist Guidelines
      </h2>
      <Container style={{ marginTop: "2rem", marginBottom: "5rem" }}>
        {guidelines.map((guideline, index) => (
          <Row key={index}>
            <Col md="8" className={`${styles.step1} offset-md-2`}>
              <Row
                className={`animate__bounceIn${
                  guideline.direction
                } animate__delay-${index + 1}s animate__animated ${
                  styles.box
                } ${styles[`shape-${index + 1}`]} ${styles.animated}`}
              >
                <Col xs="10" sm="7" md="7" className={styles.shape}>
                  <div className={styles.number}>
                    <h1>{index + 1}</h1>
                  </div>
                </Col>
                <Col
                  xs="12" sm="5" md="5"
                >
                  <p>{guideline.text}</p>
                </Col>
                <Col  xs="12" sm="4" md="4" className="hidden-xs text-center">
                  <i className={`material-icons ${styles["md-56"]}`}>
                    {guideline.icon}
                  </i>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

export default Information;
