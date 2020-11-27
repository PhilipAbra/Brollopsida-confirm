import React from 'react'
import Pic1 from '../assets/images/bild5.jpg'
import Pic2 from '../assets/images/bild6.png'
import Pic3 from '../assets/images/bild7.jpg'
import Pic4 from '../assets/images/bild8.jpg'

const InterimPicturesTwo = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={Pic1} style={{ height: 'auto', width: '33%', maxHeight: 600}} />
      <img src={Pic2} style={{ height: 'auto', width: '18%',  maxHeight: 600}} />
      <img src={Pic3} style={{ height: 'auto', width: '34%',  maxHeight: 600 }} />
      <img src={Pic4} style={{ height: 'auto', width: '15%',  maxHeight: 600}} />
    </div>
  )
}

export default InterimPicturesTwo