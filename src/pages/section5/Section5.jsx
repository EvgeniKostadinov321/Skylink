import React, {useState,useEffect} from 'react'
import './section5.css'
const images = [
    { src: '/rome.jpg', alt: 'Rome, Italy' },
    { src: '/ibiza.jpg', alt: 'Ibiza, Spain' },
    { src: '/cannes.jpg', alt: 'Cannes, France' },
    { src: '/paris.jpg', alt: 'Paris, France' },
];


export default function Section5() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup function to clear timer on unmount
    }, []); // Empty dependency array ensures useEffect runs only once

    const currentImage = images[currentImageIndex];


  return (
    <section id='section5'>
        <h1 id='main-heding-s5'>Popular Destinations</h1>
        <div className='flex-s5'> 
            <div className='s5-image-holder' style={{ backgroundImage: `url(${currentImage.src})` }}>
                
            </div>
            <div className='grid-destinations'>
                <div className='span-wrappers'>
                    <span className='destinations-spans'>Rome(ITA)</span>
                    <span className='destinations-spans2'>Italy</span>
                </div>
                <div className='span-wrappers'>
                    <span className='destinations-spans'>Ibiza (IBZ)</span>
                    <span className='destinations-spans2'>Spain</span>
                </div>
                <div className='span-wrappers'>
                    <span className='destinations-spans'>Cannes (CEQ)</span>
                    <span className='destinations-spans2'>France</span>
                </div>
                <div className='span-wrappers'>
                    <span className='destinations-spans'>Paris (LBG)</span>
                    <span className='destinations-spans2'>France</span>
                </div> 
            </div>

        </div>
    </section>
  )
}
