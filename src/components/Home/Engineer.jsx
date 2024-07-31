import "./Engineer.css"

import machanical  from "../Images/Mechanical.jpeg"
import Electronic  from "../Images/ELECTRONICS.png"
import Software  from "../Images/software.jpg"



function Engineer (){
    return(
        <>
        <div className="main">        
            <div className="heading1">
                Browse Ideas by Technology/Field
            </div>
        
        <div className="Engi">
            <img src={machanical} alt="machanical "  className="machanical" />
            <img src={Electronic} alt="Electronics" className="Electronic"  />
            <img src={Software} alt="Software" className="Software" />
        </div>

        <div className="container">
         <p>
             <span className="bolder">Innovation Projects For Engineers and Students</span> <br /><span className="greenText">MECHANICAL & ELECTRONICS & SOFTWARE</span> projects are always in high demand. Students work on various project ideas and topics to improve their skills, whereas hobbyists like the fun of meddling with technology. projects form a middle ground for all segments of <span className="greenText">MECHANICAL & ELECTRONICS & SOFTWARE</span> engineers looking to build. We have compiled a list of interesting and practical mini-project ideas for you to work on. There are a couple of projects for engineering students for their Final Year Project.
         </p>
        </div>
        
        </div>

        </>
        
    )
}

export default Engineer