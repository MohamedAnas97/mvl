import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const PropertyCategories = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={8}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/336.png")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> 
                DIALYSIS CENTER (AL BARSHA, DUBAI)</Link>
              </h3>
              {/* <p> Great Deals Available</p> */}
              {/* <mark> 13 Listings</mark> */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/337.png")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> DAMAC AKOYA HILLS(AKOYA HILLS, DUBAI) </Link>
              </h3>
              {/* <p> Great Deals Available</p>
              <mark> 13 Listings</mark> */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/338.png")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> B+G+2P+14F+ROOF, RESIDENTIAL BUILDING (AL JADDAF, DUBAI) </Link>
              </h3>
              {/* <p> Great Deals Available</p>
              <mark> 13 Listings</mark> */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/333.png")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop">EMAAR HILLS DEVELOPMENT BUILDING PROJECT (THE HILLS, DUBAI), </Link>
              </h3>
              {/* <p> Great Deals Available</p>
              <mark> 13 Listings</mark> */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/334.png")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> 
                AL JADDAF HOTEL (AL JADDAF, DUBAI) </Link>
              </h3>
              {/* <p> Great Deals Available</p>
              <mark> 13 Listings</mark> */}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PropertyCategories;
