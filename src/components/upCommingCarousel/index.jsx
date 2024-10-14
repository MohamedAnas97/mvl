import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpCommingcarousel = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
      <Slider
        {...settings}
        className="row ltn__upcoming-project-slider-1-active slick-arrow-3"
      >
        {/* <!-- upcoming-project-item --> */}
        <Col xs={12}>
          <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/product-3/plan.png" alt="#" className="image-height"/>
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    1. No Penetration
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    2. Metallic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    3. Plastic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    4. Cable Bundle
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    5. Insultaed Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    6. Busway
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    7. Air Duct
                  </h3>

                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    8. Multiple Penetrations
                  </h3>
                  <h3 className="itle ltn__secondary-color mt-1">
                    9. Joint Systems
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    10. Dry Walls
                  </h3>

                  {/* <div className="btn-wrapper animated">
                    <Link
                      href="/contact"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Download Brochuresection-subt
                    </Link>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <!-- upcoming-project-item --> */}
        <Col xs={12}>
        <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/product-3/plan.png" alt="#" className="image-height"/>
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    1. No Penetration
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    2. Metallic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    3. Plastic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    4. Cable Bundle
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    5. Insultaed Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    6. Busway
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    7. Air Duct
                  </h3>

                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    8. Multiple Penetrations
                  </h3>
                  <h3 className="itle ltn__secondary-color mt-1">
                    9. Joint Systems
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    10. Dry Walls
                  </h3>

                  {/* <div className="btn-wrapper animated">
                    <Link
                      href="/contact"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Download Brochuresection-subt
                    </Link>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <!-- upcoming-project-item --> */}
        <Col xs={12}>
        <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/product-3/plan.png" alt="#" className="image-height"/>
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    1. No Penetration
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    2. Metallic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    3. Plastic Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    4. Cable Bundle
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    5. Insultaed Pipe
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    6. Busway
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    7. Air Duct
                  </h3>

                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    8. Multiple Penetrations
                  </h3>
                  <h3 className="itle ltn__secondary-color mt-1">
                    9. Joint Systems
                  </h3>
                  <h3 className="section-title-area ltn__secondary-color mb-3 mt-1">
                    10. Dry Walls
                  </h3>

                  {/* <div className="btn-wrapper animated">
                    <Link
                      href="/contact"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Download Brochuresection-subt
                    </Link>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <!--  --> */}
      </Slider>
    </>
  );
};

export default UpCommingcarousel;
