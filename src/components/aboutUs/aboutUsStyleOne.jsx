import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/7.jpg" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    Experts in Fire Protection Solutions<span>.</span>
                  </h1>
                  <p>
                    With our Headquarters in Dubai, MVL Firestop is a leading
                    exclusive distributor of Firestop Products in the Middle
                    East and North Africa. We supply projects with
                    state-of-the-art intumescent fire sealants and thermal
                    barrier coatings. Our Firestop Solutions are designed and
                    tested for the global market, keeping in mind the Safety and
                    Fire Protection for the end-users.
                  </p>
                  <p>
                    MVL fire-protection products are widely used in new and
                    retrofit projects such as; Oil fields, Restaurants,
                    Hospitals, Nursing Facilities, Commercial and Industrial
                    building retail structures, and Residential Homes. From
                    standard fire-resistant systems to fire-stopping
                    penetrations or custom applications, we meet our clients
                    needs.
                  </p>
                </div>
               
                <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
