import { Container, Row, Col, Button } from "reactstrap";
import styles from "./Testimonial.module.scss";
import { NavLink } from "react-router-dom";
function Testimonial() {
  return (
    <section>
      <Container>
        <Row md="4" className={styles.rowModified}>
          <Col md="6">
            <figure className={styles["testimonial-image"]}>
              <img
                src="/car_accident.png"
                alt="Descriptive image description"
                className="img-fluid"
              />
            </figure>
          </Col>
          <Col md="6">
            <article className={styles["testimonial-info"]}>
              <h1>
                ACT government proposes rethink of transport planning to promote
                safer cycling, walking options
              </h1>
              <p>ABC News / By Craig Allen</p>
              <div className={styles.btnBottom}>
                <NavLink to="https://www.abc.net.au/news/2023-07-29/pushing-bikes-in-the-car-capital/102659800">
                  <Button color="primary" className={styles["testimonial-btn"]}>
                    Learn More
                  </Button>
                </NavLink>
              </div>
            </article>
          </Col>
          <Col md="6">
            <article className={styles["testimonial-info"]}>
              <h1>
                Three cyclist deaths in Victoria in 11 days spark calls for
                better safety regulations
              </h1>
              <p>ABC South West Vic / By Shannon Colee</p>
              <div className={styles.btnBottom}>
                <NavLink to="https://www.abc.net.au/news/2023-02-15/cyclist-deaths-victoria-aggressive-drivers-cycle-lanes/101975622">
                  <Button color="primary" className={styles["testimonial-btn"]}>
                    Learn More
                  </Button>
                </NavLink>
              </div>
            </article>
          </Col>
          <Col md="6">
            <figure className={styles["testimonial-image"]}>
              <img
                src="/ecobiker.png"
                alt="Descriptive image description"
                className="img-fluid"
              />
            </figure>
          </Col>
          <Col md="6">
            <figure className={styles["testimonial-image"]}>
              <img
                src="/2biker2.png"
                alt="Descriptive image description"
                className="img-fluid"
              />
            </figure>
          </Col>
          <Col md="6">
            <article className={styles["testimonial-info"]}>
              <h1>
                Call for new rules on batteries imported to Australia as global
                e-bike fire injury toll nears 100
              </h1>
              <p>
                Safety group documents 57 serious incidents worldwide this year
                that injured 97 people and killed eight
              </p>
              <div className={styles.btnBottom}>
                <NavLink to="https://www.theguardian.com/environment/2023/mar/21/call-for-new-rules-on-batteries-imported-to-australia-as-global-e-bike-fire-injury-toll-nears-100">
                  <Button color="primary" className={styles["testimonial-btn"]}>
                    Learn More
                  </Button>
                </NavLink>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
