import React, { useState } from 'react'
import Pic from '../assets/images/bild1.jpg'
import Pic2 from '../assets/images/h-v-date-black.png'

const Login = ({ login, setUsers }) => {
  const [user, setUser] = useState({})

  const updateUsername = ({ target: { value } }) => setUser({ ...user, username: value })
  const updatePassword = ({ target: { value } }) => setUser({ ...user, password: value })

  const tryLogin = () => {
    fetch('/api/login', {
      method: 'POST', body: JSON.stringify(user), headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('WRONG CREDENTIALS')
        }
        return res.json()
      })
      .then(data => {
        localStorage.setItem('mail-login', data.find(val => !!val).mail)
        setUsers(data)
        login(true)
      })
  }

  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${Pic})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '20%', height: '45%' }}>
        <img src={Pic2} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
        <span style={{ marginBottom: 16 }}>LOGGA IN</span>
        <input placeholder="MAILADRESS" type="text" value={user.username} onChange={updateUsername}
               onKeyDown={e => e.keyCode === 13 && tryLogin()} />
        <input placeholder="LÖSENORD" type="password" value={user.password} onChange={updatePassword}
               onKeyDown={e => e.keyCode === 13 && tryLogin()} />
        <button type="button" style={{
          width: '40%', alignSelf: 'center', padding: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', fontSize: 22, fontFamily: 'BrandonLight', cursor: 'pointer'
        }} onClick={tryLogin}>Logga in
        </button>
      </div>
    </div>
  )
}

export default Login