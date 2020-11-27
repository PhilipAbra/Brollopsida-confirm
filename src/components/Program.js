import React from 'react'

const Program = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '48 0' }} id="program">
      <h1>PROGRAM</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={dayStyle}>
          <h2>FREDAG</h2>
          <span style={{ marginBottom: 16 }}>GARDEN PARTY</span>
          <span style={{ marginBottom: 16 }}>BBQ, dryck och festlig stämning
          för att ladda upp inför morgondagen.</span>
          <span>Var: Gylleby vandrarhem</span>
          <span>När: från 18.00</span>
          <h2>DRESSCODE</h2>
          <span>Sommarfin</span>
        </div>
        <div style={dayStyle}>
          <h2>LÖRDAG</h2>
          <span style={{ marginBottom: 16 }}>BRÖLLOPSDAGEN</span>
          <span>14.15</span>
          <span style={{ marginBottom: 16 }}>Avfärd med abonnerad buss från
          boende (Gylleby eller Selma Spa),
          alternativt bil, till Gräsmark kyrka</span>
          <span >15.00</span>
          <span style={{ marginBottom: 16 }}>Vigsel i Gräsmark kyrka</span>
          <span>16.30</span>
          <span style={{ marginBottom: 16 }}>Avfärd mot Rottneros Park</span>
          <span>17.00</span>
          <span style={{ marginBottom: 16 }}>Skålande, middag & dans</span>
          <h2>DRESSCODE</h2>
          <span>Mörk kostym för herrar.
          Valfri klädsel för damer, men
          gärna koaff om Hanna får välja!</span>
        </div>
        <div style={dayStyle}>
          <h2>SÖNDAG</h2>
          <span style={{ marginBottom: 16 }}>HEMFÄRD</span>
          <span style={{ marginBottom: 16 }}>I valfri takt packar vi ihop oss
          och reser hemåt.</span>
          <span style={{ marginBottom: 16 }}>Men vilken tur att vi alla tog så
          många bilder under gårdagen att
          vi kan leva på denna helg länge!</span>
          <div style={{ backgroundColor: '#d6bac2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 18 }}>
            <h2>AVGÅNG FÖR BUSSAR FRÅN ROTTNEROS PARK EFTER MIDDAG & FEST</h2>
            <span>23.30</span>
            <span>02.00</span>
            <span>03.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const dayStyle = {
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default Program