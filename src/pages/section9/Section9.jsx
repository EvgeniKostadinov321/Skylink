import React from 'react'
import './section9.css'
import sky from '/sky.jpg'


export default function Section9() {
  return (
    <section id='section9' style={{ backgroundImage: `url(${sky})` }}>
        <p id='parag-s9'>What are you waiting for?</p>
        <h1 id='h1-s9'>Book a flight</h1>
    </section>
  )
}
