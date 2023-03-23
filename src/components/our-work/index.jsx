import "./style.scss"
import {WorkList} from "./workList";
import DescriptionComponent from "../description-component";
const OurWork=()=>{
    return(
        <div className={'ourWork-section'}>
            <div className={"G-container ourWorkCont"}>
                <p className={"ourWorkTitle"}>Our Work</p>
                {
                  WorkList.map((item)=>{return(
                      <div id={item.id} className={"workCont"} style={{backgroundImage:`url(${item.bg})` }}>
                        <div className={"info-cont"}>
                            <p className={"todo"}>{item.name}</p>

                           <div className={"G-flex G-align-center G-justify-between"} style={{"gap":"35px"}}>
                               <p className={"info-title"}>{item.title}</p>
                            <span className={"icon arrow-right-icon"}></span>
                           </div>
                            <p className={"info-desc"}>{item.description}</p>
                        </div>
                          <div className={"image-cont"} style={{backgroundImage:`url(${item.img})`}}>
                              <img alt="" src={item.img}/>
                          </div>
                      </div>
                  )})
                }
                <div className={"G-flex G-align-center G-justify-end"} style={{gap:"20px", paddingBottom:"60px"}}>
                    <p style={{fontSize:"40px"}}>See more projects </p>
                    <span className={"icon arrow-right-icon"}></span>
                </div>

            </div>

            <DescriptionComponent textDesc={"We partner with\n" +
                "forward-thinking\n" +
                "enterprises and startups."} />
        </div>
    )
}
export default OurWork