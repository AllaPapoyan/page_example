import TitleComponent from "../../components/title-component";
import DescriptionComponent from "../../components/description-component";
import Validation from "../../components/validation";

const Contact=()=>{
    return(
        <>
            <TitleComponent titleTwo={"Let's make a winning "} titleOne={"projects together"}/>
            <div  className={"G-container G-flex G-align-center"} style={{paddingTop:"40px"}}>
               <div style={{width:"100%",borderTop:"1px solid #999999"}}></div>
            </div>
            <DescriptionComponent textDesc={"We partner with\n" +
                "forward-thinking\n" +
                "enterprises and startups."} />
            <Validation />

        </>
    )
}
export default Contact