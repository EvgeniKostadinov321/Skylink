import React from 'react'
import './section6.css'
import phone from '/phoneMockup.png'

export default function Section6() {
  return (
    <section id='section6'>
        <div style={{ backgroundImage: `url(${phone})` }} className='wd-50 mockup'>

        </div>
        <div className='wd-50 s6TextArea'>
            <h1 id='s6-heading'>Flight Manager</h1>
            <p id='s6-info'>All of our flights come with complimentary Flight Manager Service. Your dedicated Flight Manager ensures that every detail of your flight is taken care of and you get the most competitive tailor-made offers. Speak with your Flight Manager in English 🇬🇧, Dutch 🇳🇱, German 🇩🇪, Spanish 🇪🇸 or Portuguese 🇵🇹. </p>
        </div>
    </section>
  )
}
