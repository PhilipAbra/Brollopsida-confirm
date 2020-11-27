import React from 'react'

const Contact = () => {
  return (
    <div id="contact" style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#d6bac2', padding: '22 0' }}>
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>KONTAKT</h1>
      </div>
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>HANNA</h3>
        <span>hannaa_andersson@hotmail.com</span>
        <span>0766 34 42 97</span>
      </div>
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>VIKTOR</h3>
        <span>viktor.sjoberg@hotmail.com</span>
        <span>0709 20 21 32</span>
      </div>
    </div>
  )
}

export default Contact