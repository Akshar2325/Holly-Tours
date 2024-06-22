import React from 'react'
import "./NewsLetter.css"

import { Container, Row, Col } from 'reactstrap'
import maleTourist from "../assets/images/Mahnat.png"


const NewsSeller = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Subscribe Now for Pilgrimage Updates and Spiritual Insights</h2>

              <div className="newsletter__input">
                <input type="email" placeholder='Enter Your Email' />
                <button className='btn newsletter__btn'>Subscribe</button>
              </div>

              <p>Stay informed about the latest pilgrimage news, travel tips, and spiritual guidance. Join our community and enhance your journey.</p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsSeller