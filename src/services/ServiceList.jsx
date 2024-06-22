import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Weather Forecast",
    desc: "Get the latest weather updates to plan your pilgrimage effectively."
  },
  {
    imgUrl: guideImg,
    title: "Expert Tour Guides",
    desc: "Experienced guides to enhance your pilgrimage experience."
  },
  {
    imgUrl: customizationImg,
    title: "Personalized Packages",
    desc: "Tailor-made packages to suit your pilgrimage needs and preferences."
  },
]


const ServiceList = () => {
  return (
    servicesData.map((item, index) => <Col lg="3" key={index}>
      <ServiceCard item={item} />
    </Col>)
  )
}

export default ServiceList