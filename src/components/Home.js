import React, { useState, useEffect } from 'react'
import Pic from '../assets/images/bild1.jpg'

const Home = () => {
  const [daysUntil, setDaysUntil] = useState('')

  useEffect(() => {
    let millis = Date.parse('2020-07-11T00:00:00.000Z') - Date.now()
    let days = millis / (1000 * 60 * 60 * 24)
    setDaysUntil('' + parseInt(days))
  }, [])

  return (
    <div style={{ backgroundImage: `url(${Pic})`, backgroundSize: '100% 130%', backgroundRepeat: 'no-repeat', height: 1000 }} id="home">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '50%', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
            { getLettersInArray(daysUntil).map((letter, idx) => <div key={idx} style={letterStyle}><h1 style={{ letterSpacing: 0 }}>{letter}</h1></div>)}
          </div>
          <h1 style={{ width: '50%', fontSize: 40 }}>DAGAR KVAR</h1>
        </div>
    </div>
  )
}

const letterStyle = {
  padding: '0 16',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  margin: 16,
  borderRadius: 26,
  letterSpacing: '0em',
  fontSize: 55,
  display: 'flex',
  justifyContent: 'center',
  width: '15%'
}

const getLettersInArray = string => [...string]

export default Home