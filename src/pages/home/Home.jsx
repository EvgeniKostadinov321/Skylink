import React from 'react'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Model2 from '../section1/Model2'
import Section4 from '../section4/Section4'
import Section5 from '../section5/Section5'
import Section6 from '../section6/Section6'
import Section7 from '../section7/Section7'
import Section8 from '../section8/Section8'
import Section9 from '../section9/Section9'

export default function Home() {
  return (
    <>
        <div id='scene3D'>
            <Model2></Model2>  
        </div>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>
        <Section8></Section8>
        <Section9></Section9>
    </>
  )
}
