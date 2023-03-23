import React, {useState} from 'react';
import './style.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tashir from '../../assets/images/Tashir.png';
import aba from '../../assets/images/A-tech.png';
import qayl from '../../assets/images/Qayltech.png';
import jp from '../../assets/images/jp.png';
import count from '../../assets/images/count.png';
import {motion} from "framer-motion";
import DescriptionComponent from "../description-component";


function OurPartners() {
    const TitleAnimationOne ={
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: custom=>({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2 ,
                duration: 1,
                delayChildren: 1,
                ease: 'easeOut',}
        }),
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }
    const [partners] = useState([{
        id: 1, image: tashir
    }, {
        id: 2, image: aba
    }, {
        id: 3, image: qayl
    }, {
        id: 4, image: jp
    }, {
        id: 5, image: count
    }, {
        id: 6, image: tashir
    }, {
        id: 7, image: aba
    }, {
        id: 8, image: qayl
    }, {
        id: 9, image: jp
    }, {
        id: 10, image: count
    }])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        responsive: [{
            breakpoint: 991, settings: {
                slidesToShow: 4, slidesToScroll: 1,
            }
        },

            {
                breakpoint: 767, settings: {
                    slidesToShow: 3, slidesToScroll: 1,
                }
            }, {
                breakpoint: 576, settings: {
                    slidesToShow: 2, slidesToScroll: 1,
                }
            }, {
                breakpoint: 420, settings: {
                    slidesToShow: 1, slidesToScroll: 1,
                }
            }]

    }
    return (<motion.div initial='hidden' whileInView='visible' className='G-container'>

        <motion.p variants={TitleAnimationOne} className="P-our-partners">Our partners</motion.p>
        <div className='P-partners-slid'>
            <Slider {...settings}>
                {partners.map(el => {
                    return (<div className='P-partner-img-list' key={el.id}>
                            <div className='P-partner-img'
                                 style={{backgroundImage: `url(${el.image})`}}
                            />
                        </div>
                    )
                })}

            </Slider>
        </div>

    </motion.div>)
}

export default OurPartners