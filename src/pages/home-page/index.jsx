
import ApplyComponent from "../../components/apply-component";
import OurServices from "../../components/our-services";
import OurWork from "../../components/our-work";
import OurPartners from "../../components/our-partners";
import DescriptionComponent from "../../components/description-component";
import BgComponent from "../../components/Bg-component";



const HomePage=()=>{
    return(
        <>
          <BgComponent />
            <ApplyComponent />
            <OurServices />
            <OurWork />
            <OurPartners />
          <DescriptionComponent textDesc={"Let's discuss your project."}/>
        </>
    )
}
export default HomePage