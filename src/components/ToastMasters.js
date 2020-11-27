import React from 'react'
import Toast from '../assets/images/hannadidrik.jpg'

const ToastMasters = () => {
  return (
    <div id="toastMaster" style={{ display: 'flex' }}>
      <img src={Toast} style={{ width: '25%', height: 'auto',  maxHeight: 600}} />
      <div style={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '60%' }}>
          <h1>TOASTMASTERS</h1>
          <span>Våra underbara vänner Hanna & Didrik har fått den
          stora äran att leda denna dag tillsammans med oss.
          Vill du dela dina känslor under middagen är du varmt
          välkommen att höra av dig till dem.</span>
          <h3>MAIL</h3>
          <span>themaiseystoast@gmail.com</span>
          <h3>TELEFON</h3>
          <span>HANNA ADELSTÅL 070 350 97 41</span>
          <span>DIDRIK HELSING 070 555 77 80</span>
        </div>
      </div>
    </div>
  )
}

export default ToastMasters