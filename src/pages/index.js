import { useState } from "react";
import Slider from "react-slick";
import path from "path";
import Link from "next/link";
import fs from "fs/promises";
import { LayoutTwo } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleThree from "@/components/hero/styleThree";
import Contact from "@/components/contact";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import PropertyCategories from "@/components/PropertyCategories";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
import UpCommingcarousel from "@/components/upCommingCarousel";
import ShopGrid from "./shop/grid";

function HomeVersionThree(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const featuredProducts = getProducts(products, "buying", "featured", 5);
  const { data, brand, testimonialData } = props;

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productCarouselsettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: "80px",
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutTwo topbar={true}>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-3 section-bg-2">
        <HeroSectionStyleThree data={data} />
      </div>
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses="section-subtitle-2"
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->
Z
      

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <AboutUsStyleOne sectionSpace="pt-50 pb-90" />

      <div
        className="ltn__upcoming-project-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/22.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={10}>
              <div className="section-title-area">
                <h1 className="section-title  white-color">
                  Our technology prevents fire
                </h1>

                <h6 className="section-subtitle white-color">
                  {" "}
                  At MVL Firestop, we are dedicated to enhancing fire safety and
                  prevention in our communities. Our expert team provides
                  comprehensive solutions, including fire risk assessments,
                  safety training, and the latest fire detection technologies.
                  We believe that knowledge and preparedness are key to
                  preventing fire incidents. Join us in our mission to create
                  safer environments for homes and businesses alike. Together,
                  we can protect what matters most.
                </h6>
              </div>
            </Col>
          </Row>
          <UpCommingcarousel />
        </Container>
      </div>

      <div className="ltn__banner-area ">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2 ltn__secondary-color"
                titleSectionData={{
                  subTitle: "Our Projects",
                  title: " Leading the Way in Fire Protection",
                }}
              />
            </Col>
          </Row>

          <PropertyCategories />
        </Container>
      </div>

      {/* PRODUCT SLIDER AREA START */}
      <div className="ltn__product-slider-area ltn__product-gutter pt-115  plr--7">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Products",
                  title: "Innovative Fire Protection Solutions",
                }}
              />
            </Col>
          </Row>
          <ShopGrid />
        </Container>
      </div>
      <div className="neighbour-area section-bg-1 pt-90 pb-50">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">
                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                    <Nav>
                      <Nav.Link eventKey="first">
                        {" "}
                        <img src="/img/product-3/3.jpg" alt="#" />
                      </Nav.Link>
                      <Nav.Link eventKey="second">
                        {" "}
                        <img src="/img/product-3/2.jpg" alt="#" />
                      </Nav.Link>
                      <Nav.Link eventKey="third">
                        <img src="/img/product-3/5.jpg" alt="#" />
                      </Nav.Link>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="neighbour-apartments-img">
                              <img src="/img/product-3/3.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-1"></div>
                          <div className="col-lg-5">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/3.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>{/* <li>9 Properties</li> */}</ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">SSCI Firestop Collar </Link>
                                </h4>
                                <div className="search-by-place-brief">
                                  <p>
                                    MVL Firestop is a well-known leader in Dubai
                                    with an extended reputation for supplying
                                    projects with SSCI Fire Collar and other
                                    Firestopping products around the United Arab
                                    Emirates, The Middle East, and North Africa.
                                    We understand the importance of fire safety;
                                    therefore, we ensure that our clients
                                    receive high-quality SSCI Fire Collar
                                    manufactured following international
                                    standards.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    Read More
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="neighbour-apartments-img">
                              <img src="/img/product-3/2.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-1"></div>
                          <div className="col-lg-5">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/2.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge"></div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Fire Barrier Foam </Link>
                                </h4>

                                <div className="search-by-place-brief">
                                  <p>
                                    MVL Firestop is a well-known leader in Dubai
                                    with an extended reputation for supplying
                                    projects with Fire Barrier Foam US110 and
                                    other Passive Fire Protection and Thermal
                                    Insulation products around the United Arab
                                    Emirates, The Middle East, and North Africa.
                                    We understand the importance of fire safety;
                                    therefore, we ensure that our clients
                                    receive high-quality US110 Fire Barrier Foam
                                    manufactured following international
                                    standards.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    Read More
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="neighbour-apartments-img">
                              <img src="/img/product-3/5.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-1">
                          
                          </div>
                          <div className="col-lg-5">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/5.jpg" alt="#" />
                                </Link>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">CFS01 Mortar </Link>
                                </h4>

                                <div className="search-by-place-brief">
                                  <p>
                                    MVL Firestop is a well-known leader in Dubai
                                    with an extended reputation for supplying
                                    projects with CFS01 Firestop Mortar and
                                    other Firestop Coating Systems around the
                                    United Arab Emirates, The Middle East, and
                                    North Africa. We understand the importance
                                    of fire safety; therefore, we ensure that
                                    our clients receive high-quality CF01
                                    Firestopping Mortar manufactured following
                                    international standards.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    Read More
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/23.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Client,s Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What,s Our Client <br />
                  Says About Us
                </h1>
              </div>
            </Col>
          </Row>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            {testimonialData.map((data, key) => {
              return (
                <Col xs={12} lg={4} key={key}>
                  <TestimonialCarouselItemTwo data={data} />
                </Col>
              );
            })}

            {/* <!--  --> */}
          </Slider>
        </Container>
      </div>
      {/* <!-- BLOG AREA START (blog-3) -->  */}
      <div className="ltn__blog-area pt-40 pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Leatest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div>

      <Contact />

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "src/data/hero/",
    "index-three.json"
  );

  const brandfilePath = path.join(
    process.cwd(),
    "src/data/brand-logo/",
    "index.json"
  );

  const testimonialFilePath = path.join(
    process.cwd(),
    "src/data/testimonial/",
    "index-three.json"
  );

  const data = JSON.parse(await fs.readFile(filePath));
  const brand = JSON.parse(await fs.readFile(brandfilePath));
  const testimonialData = JSON.parse(await fs.readFile(testimonialFilePath));

  return {
    props: {
      data,
      brand,
      testimonialData,
    },
  };
}
export default HomeVersionThree;
