import React from 'react'
import MapImg from '../assets/images/map.png'

const Map = ({ users }) => {

  const renderLiving = () => {
    let user = users.find(val => !!val)
    if (user.living === -1 || user.paid) {
      return null
    } else if (user.living === 0) {
      return (
        <React.Fragment>
          <h2>GYLLEBY VANDRARHEM</h2>
          <span>375kr/person och natt</span>
          <span>Swisha 0709202132 senast den 10/7</span>
        </React.Fragment>
      )
    } else if (user.living === 1) {
      return (
        <React.Fragment>
          <h2>SELMA SPA</h2>
          <span>Enkelrum 1195:-/person och natt </span>
          <span>Dubbelrum 895:-/person och natt</span>
          <span>Betalas vid incheckning</span>
        </React.Fragment>
      )
    }
  }

  return (
    <div id="travel" style={{
      backgroundColor: '#bec0b1',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: `url(${MapImg})`,
      backgroundPosition: 'right',
      height: 550,
      backgroundSize: '30% 100%',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center'
    }}>
      <h1 style={{ marginBottom: 30 }}>RESA & BOENDE</h1>
      <div style={{ display: 'flex', width: '80%', alignSelf: 'flex-start', justifyContent: 'space-evenly' }}>
        <div style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2>DIT- & HEMRESA</h2>
          <span>Enklast tar ni er hit med bil. Har ni inte denna möjlighet kan man även ta sig hit kollektivt alternativt höra av er till oss så
            undersöker vi möjligheten till car sharing.</span>
        </div>
        <div style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2>BOENDE</h2>
          <span>Det finns två alternativ för boende och
          vi har försökt välja utifrån era önskemål.
          Du kommer att bo på:</span>
          {renderLiving()}
        </div>
      </div>
    </div>
  )
}

export default Map