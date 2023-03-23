import TitleComponent from "../../components/title-component";
import AnimatedBlockComponent from "../../components/animation-block";
import OurMission from "../../components/our-mission";

const AboutUs=()=>{
    return(
        <>
            <TitleComponent titleOne={"We build, scale digital"} titleTwo={"products for everyone"} />
            <AnimatedBlockComponent />
            <OurMission />
        </>
    )
}
export default AboutUs