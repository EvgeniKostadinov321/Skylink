import React from 'react'
import cancel from '/icons/cancel.png'

export default function Dialog(props) {
  

  console.log(props)
  return (
    <>
        {props.isMenuOpen && (
        <div className='menu-dialog'>
          <div className='black-top'>
            <div className='dialog-controls'>
              <div>
                <button
                  className={`control-btn-dialog ${props.selectedButton === 'On-demand' ? 'selected' : ''}`} // Apply 'selected' class conditionally
                  onClick={() => props.handleClick('On-demand')}
                >
                  On-demand
                </button>
                <button
                  className={`control-btn-dialog ${props.selectedButton === 'Shared flights' ? 'selected' : ''}`} // Apply 'selected' class conditionally
                  onClick={() => props.handleClick('Shared flights')}
                >
                  Shared flights
                </button>
              </div>
              <div>
                <button onClick={props.closeDialog} id='close-dialog-btn'><img id='cancel-dialog-icon' src={cancel} alt="cansel the dialog icon" /></button>
              </div>
            </div>
            {props.selectedButton === 'On-demand' ? <h1 id='white-dialog-header'>Book On-Demand</h1> : <h1 id='white-dialog-header'>Book a shared flight</h1>}
            
          </div>
          
          <div className='form-div'>
            <button className={`trip-details-btn ${props.selectedTrip === 'one' ? 'selected-trip' : ''}`}
            onClick={() => props.handleClickTrip('one')}>
              One way
            </button>
            <button className={`trip-details-btn ${props.selectedTrip === 'round' ? 'selected-trip' : ''}`}
            onClick={() => props.handleClickTrip('round')}>
              Round trip
            </button>
          </div>
          
          {props.fromInformation}
          <button id='proceed-btn-dialog'>Proceed</button>
        </div>
        
      )}
    </>
  )
}
