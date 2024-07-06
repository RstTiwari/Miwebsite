import Meraki from "../../Assets/Meraki.png";
import multiimage  from "../../Assets/multiimage.jpeg"
export default function Multimage(){

    let styles={
        width:'100%',
        marginTop:'20px',
        margin:'0px',
        backgroundColor: 'red'
    }
    return(
        <>
        <img src={multiimage} alt="multiimage" style={styles} />
        </>
    )

}