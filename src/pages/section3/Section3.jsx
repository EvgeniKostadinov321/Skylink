import React from 'react'
import './section3.css'
import back from '/cloudsBK.jpg'


export default function Section3() {
  return (
    <section id='section3' >
       <div className='intro-solutions'>
          <h1 id='solutions-heading'>We believe that in a world where passengers have become numbers, a personal approach is key to ensure you get the most out of your flying experience.</h1>
       </div>

       <div className='box-wrapper'>
        
          <div className='box-solutions'>
            <h2 className='h2-solutions'>Flexible Solutions</h2>
            <p className='parag-solutions'>Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.</p>
          </div>
          <div className='box-solutions'>
            <h2 className='h2-solutions'>Smart Quotes</h2>
            <p className='parag-solutions'>Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.</p>
          </div>
          <div className='box-solutions'>
            <h2 className='h2-solutions'>Fully Customizable</h2>
            <p className='parag-solutions'>Control all aspects of your journey. Easily upgrade services with our add-ons.</p>
          </div>
          <div className='box-solutions'>
            <h2 className='h2-solutions'>Personalization</h2>
            <p className='parag-solutions'>Receive full support of our Flight Management service. We have you covered, anywhere.</p>
          </div>
        
       </div>

    </section>
  )
}
