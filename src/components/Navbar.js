import React from 'react'
import styled from 'styled-components'
import Hv from '../assets/images/H&Vcleanlogo.png'


const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Navbar = () => {
  return (
    <Div>
      <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '16 0' }}>
        <h1>VIKTOR</h1>
        <img src={Hv} style={{ height: 100, width: 200 }} />
        <h1>HANNA</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '80%', marginBottom: 16 }}>
        <a href="#home"><span>HEM</span></a>
        <a href="#program"><span>PROGRAM</span></a>
        <a href="#travel"><span>RESA & BOENDE</span></a>
        <a href="#toastMaster"><span>TOASTMASTERS</span></a>
        <a href="#contact"><span>KONTAKT</span></a>
      </div>
    </Div>
  )
}

export default Navbar