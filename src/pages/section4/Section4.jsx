import React from 'react'
import './section4.css'
import subSection2Back from '../../assets/planeBack.jpg'
import subSection3Back from '../../assets/shared.jpg'

export default function Section4() {
  return (
    <section id='section4'>
        <div id='subSection1' className='section4-divs'>
            <div className='flex-down'>
                <h1 id='first-h1' className='section4-Heading'>Flexible Services</h1>
                <div >
                    <p id='margin-bottom-10' className='section4-parags'>Smart solutions for all your charter requirements</p>
                    <button className='btn-type2'>All Solutions</button>
                </div>
            </div>
            
        </div>
        <div style={{ backgroundImage: `url(${subSection2Back})` }} id='subSection2' className='section4-divs'>
            <div className='hovered-appear'>
                <h1 className='section4-Heading'>On-Demand</h1>
                <p className='section4-parags hoveredText'>Book your aircraft. Customize all aspects of your journey.</p>
            </div>
        </div>
        <div style={{ backgroundImage: `url(${subSection3Back})` }} id='subSection3' className='section4-divs'>
            <div className='hovered-appear'>
                <h1 className='section4-Heading'>Shared Flights</h1>
                <p className='section4-parags hoveredText'>Fly private for a fraction of the price.</p>
            </div>
        </div>
    </section>
  )
}
