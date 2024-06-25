import React from 'react'
import { useState } from 'react';
import Dialog from '../../Utils/Dialog'

export default function Section2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [selectedButton, setSelectedButton] = useState('On-demand'); // Initial selection
  const [selectedTrip, setSelectedTrip] = useState('one');

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleClickTrip = (buttonName) => {
    setSelectedTrip(buttonName);
  };

  const toggleMenu = (buttonName) => {
    setSelectedButton(buttonName);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDialog = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  let fromInformation

  if (selectedTrip === "one") {
    fromInformation = (
      <form id='form-trip'>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">From*</label>
          <input className='input-trip' type="text" placeholder='From where?'/>
        </div>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">To*</label>
          <input className='input-trip' type="text" placeholder='To where?'/>
        </div>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">Passengers*</label>
          <input className='input-trip' type="number" placeholder='Amount of passengers'/>
        </div>
      </form>
    )
  } else if (selectedTrip === "round") {
    fromInformation = (
      <form id='form-trip'>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">From*</label>
          <input className='input-trip' type="text" placeholder='From where?'/>
        </div>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">To*</label>
          <input className='input-trip' type="text" placeholder='To where?'/>
        </div>
        <div className='form-group'>
          <label className='label-trip' htmlFor="">Passengers (outbound)*</label>
          <input className='input-trip' type="number" placeholder='Amount of passengers'/>
        </div>
      </form>
    )
  }



  return (
    <section className='section2'>
      <div className='relative-div'>
        <div id='heading-wrapper'>
          <h1 id='main-heading'>Skylink&reg;</h1>
          <h2 id='second-heading'>Personalised Aviation</h2>
        </div>

        <div id='hero-controls-wrapper'>
          <div id='section-wrapper-buttons'> 
            <div>
              <p className='p-style'>More flexibility, freedom and choice!</p>
            </div>
            <div className='btn-div'>
              <button  onClick={() => toggleMenu('On-demand')} className='hero-btn'>Book an Aircraft</button>
              <button  onClick={() => toggleMenu('Shared flights')} className='hero-btn'>Book a Shared Flight</button>
            </div>
          </div>
        </div>
      </div>

      <Dialog id="dialog-z-index"
          isMenuOpen={isMenuOpen} 
          selectedTrip={selectedTrip} 
          selectedButton={selectedButton} 
          toggleMenu={toggleMenu} 
          handleClick={handleClick}
          handleClickTrip={handleClickTrip}
          closeDialog={closeDialog}
          fromInformation={fromInformation}> 
       </Dialog>

    </section>
  )
}
