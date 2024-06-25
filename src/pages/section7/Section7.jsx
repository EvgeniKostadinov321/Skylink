import React from 'react'
import './section7.css'

import icon1 from '/icons/ai.png'
import icon2 from '/icons/briefcase.png'
import icon3 from '/icons/budget.png'
import icon4 from '/icons/co2.png'
import icon5 from '/icons/fingerprint.png'
import icon6 from '/icons/membership.png'

export default function Section7() {
  return (
    <section id='section7'>
        <div className='title-wrapper-s7'>
            <h1 className='s7-h1'>Skylink®</h1>
            <h1 id='margin-negative' className='s7-h1'>Experience</h1>
        </div>
        <div className='s7-content-holder'>
            <div id='colmn-flex'>
                <div className='left-text-s7'>
                    <p  className='parags-s7' id='parag-s7'>At Skylink® we are bold. The aircraft is just a tool we use to get you where you want to be. Our clients enjoy much more value for their investment, accessing unparalleled personalisation when flying private.</p>
                    <p className='parags-s7' >We offer <strong>personalised experiences</strong> with our <strong>on-demand</strong> charters and <strong>personalised flexibility</strong> with our exclusive <strong>shared flight</strong>.  We upgrade the way you fly.</p>
                </div>
                <button id='s7-btn' className='hero-btn'>Book an Aircraft</button>
            </div>
            <div className='grid-s7'>
                <div className='s7-grid-item'>
                    <span className='s7-icons'><img className='s7-img' src={icon6} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">Rewarding Membership</h1>
                    <p className="s7-item-p">Our membership blends the advantage of a jet card with the easiness of a loyalty program. Get access to services not available anywhere without hefty fees.</p>
                </div>
                <div className='s7-grid-item'>
                    <span className='s7-icons'><img className='s7-img' src={icon3} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">Aircraft ownership</h1>
                    <p className="s7-item-p">Our team is ready to assist in discovering if ownership of an aircraft could be something for you. Let us help you with a shared ownership construction together with like-minded clients. </p>
                </div>
                <div className='s7-grid-item'>
                    <span className='s7-icons'><img className='s7-img' src={icon4} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">CO2 Neutral Flights</h1>
                    <p className="s7-item-p">We play our part to ensure a more sustainable future. Via Hyer® CO2 offset program, clients can offset the entire emission of their flights.</p>
                </div>
                <div className='s7-grid-item' id='display-s7-none'>
                    <span className='s7-icons'><img className='s7-img' src={icon1} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">Digital Care</h1>
                    <p className="s7-item-p">We don't do business as if it was the 80's. Receive instant estimates online. Get a quote with one click. Book your aircraft via a seamless process.</p>
                </div>
                <div className='s7-grid-item' id='display-s7-none'>
                    <span className='s7-icons'><img className='s7-img' src={icon2} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">Service Add-ons</h1>
                    <p className="s7-item-p">Avoid hidden fees and pay only for the service that you need. Upgrade your flight with multiple add-ons. Shape your trip to meet your requirements.</p>
                </div>
                <div className='s7-grid-item' id='display-s7-none'>
                    <span className='s7-icons'><img className='s7-img' src={icon5} alt="icon membership" /></span>
                    <h1 className="s7-item-h1">Personal Flight Manager</h1>
                    <p className="s7-item-p">Our experts can support any trip and request, 24/07. From short business trips to large groups crossing the globe for leisure. Enjoy a stress-free booking process.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
