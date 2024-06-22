import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 2,
                },
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonials py-4 px-3">
                <p>
                    My pilgrimage to the sacred site was profoundly moving and enlightening. The journey was well-organized, and the spiritual guidance was invaluable.
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="testimonial avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Michael Smith</h6>
                        <p>Pilgrim</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    Visiting the holy site was a life-changing experience. The cultural insights and historical context provided by the guides were exceptional.
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="testimonial avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Sarah Johnson</h6>
                        <p>Pilgrim</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    The virtual tour of the pilgrimage site was incredibly detailed and immersive. It allowed me to connect spiritually even from afar.
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="testimonial avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Emma Davis</h6>
                        <p>Virtual Visitor</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    The pilgrimage packages were comprehensive and catered to all our needs. The local guides were knowledgeable and very helpful.
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="testimonial avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">John Lee</h6>
                        <p>Pilgrim</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    The spiritual journey was incredibly well-organized. The detailed information and resources provided made the experience seamless and deeply fulfilling.
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="testimonial avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Linda Martinez</h6>
                        <p>Pilgrim</p>
                    </div>
                </div>
            </div>

        </Slider>
    )
}

export default Testimonials