import React, { useState } from 'react'
import './section8.css'
import left from '/icons/leftA.png'
import right from '/icons/rightA.png'

import img1 from '/carousel/img1.jpg'
import img2 from '/carousel/img2.jpg'
import img3 from '/carousel/img3.jpg'
import img4 from '/carousel/img4.jpg'
import img5 from '/carousel/img5.jpg'

const images = [img1, img2, img3, img4,img5];

export default function Section8() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  let styleP
  let buttonStyle
  if (currentImageIndex === 4) {
    styleP = "blackP"
    buttonStyle = "arrow-iconsBlack"
  } else {
    styleP = "parag-s8"
    buttonStyle = "arrow-icons"
  }

  return (
    <section id='section8'>
        <div className='image-holder' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className='buttons-wrapper'>
                <button className='arrowBtn' onClick={handlePreviousImage}><img className={buttonStyle} src={left} alt="left arrow" /></button>
                <button className='arrowBtn' onClick={handleNextImage} ><img className={buttonStyle} src={right} alt="right arrow" /></button>
                <p id={styleP}>{currentImageIndex + 1}/5</p>
            </div>
        </div>
    </section>
  )
}
