import React from 'react'
import Pic1 from '../assets/images/bild2.jpg'
import Pic2 from '../assets/images/bild3.png'
import Pic3 from '../assets/images/bild4.png'

const InterimPictures = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={Pic1} style={{ height: 'auto', width: '40%', maxHeight: 600 }} />
      <img src={Pic2} style={{ height: 'auto', width: '34%', maxHeight: 600 }} />
      <img src={Pic3} style={{ height: 'auto', width: '26%', maxHeight: 600 }} />
    </div>
  )
}

export default InterimPictures