import React from 'react';
import './style.scss'
import animated1 from '../../assets/images/animated1.png'
import {motion} from "framer-motion";
import DescriptionComponent from "../description-component";

const AnimatedBlockComponent = () => {
    const animatedData = [
        {
            id: 1,
            img: animated1,
            background_color: '#ffffff',
            title: "Why us",
            number: '01',
            desc: "We deliver a flexible, modular and customizable solutions for your business needs across any market." ,
            link:"Accounting arm - link here",

        },
//     {
//     id: 2,
//     img: animated2,
//     background_color: '#715FE0',
//     title: 'The product',
//     number: '02',
//     desc: 'We are ready to produce something special. ',
//     link: 'Accounting arm - link here',
// }, {
//     id: 3,
//     img: animated3,
//     background_color: '#20236A',
//     title: 'Client-orientation',
//     number: '03',
//     desc: 'We have developed specific and \n' + 'literate solutions for start-up and giant IT businesses.',
//     link: 'Accounting arm - link here',
// }
    ]
    const textAnimation = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
            duration: 0.3,
            ease: 'easeOut',
        }),
    }
    return (
     <div className='animated-wrapper cord'>
         <DescriptionComponent textDesc={"We are ready to solve all your digital problems"} />
        {animatedData.map(el => {
            return (<div className='animated-container' key={el.id}>
                <div className='animated-left '
                     style={{backgroundImage: `url('${el.img}')`, backgroundColor: el.background_color}}
                />
                <div className='animated-right G-align-start G-flex-column G-justify-center'>
                    <span className='animated-right-title'>{el.title}</span>
                    <span className='animated-right-number'>{el.number}</span>
                    <span className='animated-right-desc'>{el.desc}</span>
                    <a href="" className='animated-right-link'>{el.link}</a>
                    <div className='start-button-arrow G-flex G-justify-center G-align-center'>
                        <button>Start</button>
                        <div className='animated-arrow icon arrow-right-icon'/>
                    </div>
                </div>
            </div>)
        })}

    </div>);
};

export default AnimatedBlockComponent;