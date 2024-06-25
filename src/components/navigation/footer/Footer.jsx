import React from 'react'
import "./footer.css"
import fb from '/icons/facebook.png'
import ins from '/icons/instagram.png'
import linkd from '/icons/linkedin.png'

export default function footer() {
  return (
    <footer>
        <h1 id='footer-main-h1'>Skylink</h1>

        <section className='footer-content-section'>

            <div className='footer-socials'>
                <h2 className='follow-h2'>Follow us</h2>
                <div className='icons-wrapper-footer'>
                    <a className="lnks-footer-style-icons"href=""><img id='social-icons-image' src={fb} alt="social icon" /></a>
                    <a className="lnks-footer-style-icons"href=""><img id='social-icons-image' src={ins} alt="social icon" /></a>
                    <a className="lnks-footer-style-icons"href=""><img id='social-icons-image' src={linkd} alt="social icon" /></a>
                </div>
            </div>
            <section className='links-footer'>
                
                    <div className='socials-column'>
                        <p className='footer-p'>On-demand</p>
                        <a className="lnks-footer-style"href="">Private Charter</a>
                    </div>
                    <div className='socials-column'>
                        <p className='footer-p'>Shared Flights</p>
                        <a className="lnks-footer-style"href="">Available flights</a>
                        <a className="lnks-footer-style"href="">Propose a Flight</a>
                    </div>
                    <div className='socials-column'>
                        <p className='footer-p'>Memberships</p>
                        <a className="lnks-footer-style"href="">Elevate</a>
                    </div>
                    <div className='socials-column'>
                        <p className='footer-p'>Company</p>
                        <a className="lnks-footer-style"href="">About us</a>
                        <a className="lnks-footer-style"href="">Solutions</a>
                        <a className="lnks-footer-style"href="">Contact</a>
                    </div>
                    <div className='socials-column'>
                        <p className='footer-p'>My accouunt</p>
                        <a className="lnks-footer-style"href="">Register</a>
                        <a className="lnks-footer-style"href="">Login</a>
                    </div>
                
            </section>
        </section>

        <div className='private-part'>
            <p className='private-sign'>Skylink Aviation 2024</p>  
            <a className="lnks-footer-style"href="">Cookie Policy</a>
            <a className="lnks-footer-style"href="">Tearms & Conditions</a>
            <a className="lnks-footer-style"href="">Privacy Policy</a> 
        </div>
        
    </footer>
  )
}
