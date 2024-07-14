import Header from "./Header"
import Multimage from "./Multiimagee";
import './Home.css'
import Engi from "./Engi";
import EngineeringKitgi from "./EngineeringKit";
import EngineeringKit from "./EngineeringKit";
import Search from "./Search";
import Multimages from "./Multiimagee";
import About from "./About"



export default function Home(){
    return(
        <>
        <Header/>
        <Search/>
        <Multimages/>
        <Engi/>
        <EngineeringKit/>
        <About/>
        </>
    )
}