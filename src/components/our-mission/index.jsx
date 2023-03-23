import React from 'react';
import './style.scss'
import mission1 from "../../assets/images/mission1.png";
import mission2 from "../../assets/images/mission2.png";
import mission3 from "../../assets/images/mission3.png";





const OurMission = () => {



    const missionData = [{
        id: 1, img: mission1, desc:"Our mission is expanding the talent pool in every part of Armenia"
    }, {
        id: 2, img: mission2, desc:"Making innovative technologies  useful for everyone"
    }, {
        id: 3, img: mission3, desc:"And expanding career opportunities in IT area"
    }]

    return (
        <section className='P-mission-wrapper G-container'>
        
            <div className='G-flex G-align-center G-justify-between G-flex-wrap mission-blocks '>
                {
                    missionData.map(elt=> {
                    return (
                        <div className='mission-block ' key={elt.id}>
                            <div className='mission-image-cont'>
                                <div className='G-background-norepeat' style={{backgroundImage:`url(${elt.img})` ,width:'100%', height:'100%'}}/>
                            </div>
                            <p className='mission-desc'>{elt.desc}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    );
};
export default OurMission;