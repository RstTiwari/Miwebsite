import React from 'react'
import HeaderSection from './HeaderSection'
import Multimages from './Multiimages'
import Engineer from './Engineer'
import EngineeringKit from './EngineeringKit'
import About from './About'

const Home = () => {
  return (
    <div>
        <HeaderSection/>
        <Multimages/>
        <Engineer/>
        <EngineeringKit/>
        <About/>
    </div>
  )
}

export default Home