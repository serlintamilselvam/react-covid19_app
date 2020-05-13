import React from 'react'
import { Carousel } from 'react-bootstrap'
import './AwarenessCarousel.scss'
import washyourhands1 from '../../images/1.png'
import washyourhands2 from '../../images/2.png'
import washyourhands3 from '../../images/3.png'
import washyourhands4 from '../../images/4.png'

function AwarenessCarousel(props) {
    return (
        <div className="sub-heading-wrapper">
            <div className="sub-heading">
                Protect Protect yourself and others from getting sick
            </div>
            <div className="carousel-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={washyourhands1}
                            alt="Corona Awareness"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={washyourhands2}
                            alt="Corona Awareness"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={washyourhands3}
                            alt="Corona Awareness"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={washyourhands4}
                            alt="Corona Awareness"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}


export default AwarenessCarousel