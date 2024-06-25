import './navigation.css'

import React,{useState} from 'react'
import planeIcon from '/icons/plane.png'
import menuIcon from '/icons/menu.png'
import Dialog from '../../Utils/Dialog'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [selectedButton, setSelectedButton] = useState('On-demand'); // Initial selection
  const [selectedTrip, setSelectedTrip] = useState('one');

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleClickTrip = (buttonName) => {
    setSelectedTrip(buttonName);
  };

  const toggleMenu = () => {
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
    <header>
        <div className='links-holder'>
            <a className='hide-less-1300' href="">Solutions</a>
            <a className='hide-less-1300' href="">About us</a>
            <a className='hide-less-1300' href="">Contact</a>
        </div>
        <div className='circle-btn-wrapper'>
          <button className='circle-btn' onClick={toggleMenu}>
            <img className='icon-nav' src={planeIcon} alt="plane icon" />
          </button>
          <button className='circle-btn'>
            <img className='icon-nav' src={menuIcon} alt="menu icon" />
          </button>
        </div>
        
        <Dialog 
          isMenuOpen={isMenuOpen} 
          selectedTrip={selectedTrip} 
          selectedButton={selectedButton} 
          toggleMenu={toggleMenu} 
          handleClick={handleClick}
          handleClickTrip={handleClickTrip}
          closeDialog={closeDialog}
          fromInformation={fromInformation}
        
        ></Dialog>
      
    </header>
  )
}
