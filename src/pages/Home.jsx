import React from 'react'
import '../style/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/Tirupati.jpg'
import heroImg02 from '../assets/images/GoldenTemple.jpg'
import heroVideo from '../assets/images/Kedarnath.mp4'
import worldImg from '../assets/images/OM Image.png'
import experienceImg from '../assets/images/Experience_section_image-removebg-preview (2).png'

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsSeller from '../shared/NewsLetter';

const Home = () => {
  return (
    <>

      {/* ================= Hero Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Embark on a journey to spiritual <span className="highlight"> Enlightenment</span>
                </h1>
                <p>Discover the paths that lead to sacred destinations where history, culture, and spirituality converge. At Holly Tours, we open the doors to transformative pilgrimages that create lasting memories and profound experiences. Each journey is a step closer to inner peace, connection, and the divine.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__image-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__image-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__image-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ================= Hero Section End */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="servies__subtitle">Our Offerings</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* =============== Featured tour section start ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* =============== Featured tour section end ===================== */}


      {/* =============== Experience section start ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>With Our Extensive Experience,<br /> We Will Guide You</h2>
                <p>
                  Discover the profound spiritual journeys with us.
                  <br />
                  Our expertise ensures your pilgrimage is enriching and seamless.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Pilgrimages Organized</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Satisfied Pilgrims</h6>
                </div>
                <div className="counter__box">
                  <span>15+</span>
                  <h6>Years of Service</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============== Experience section end ===================== */}


      {/* =============== Gallary section start ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallary'} />

              <h2 className='gallary__title'>Visit our customer tour gallary</h2>
            </Col>
            <MasonryImagesGallery />
            <Col lg='12'>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============== Experience section end ===================== */}


      {/* =============== Testimonial section start ===================== */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fun Loves'} />

              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============== Testimonial section end ===================== */}


      {/* =============== NewsLettter section start ===================== */}
      <NewsSeller />
      {/* =============== NewsLettter section end ===================== */}


    </>
  )
}

export default Home