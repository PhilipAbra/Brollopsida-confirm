import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './assets/style/app.css'
import Home from './components/Home'
import Welcome from './components/Welcome'
import InterimPictures from './components/InterimPictures'
import Program from './components/Program'
import InterimPicturesTwo from './components/InterimPicturesTwo'
import Map from './components/Map'
import ToastMasters from './components/ToastMasters'
import Contact from './components/Contact'
import Login from './components/Login'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (localStorage.getItem('mail-login')) {
      fetch('/api/login', {
        method: 'POST', body: JSON.stringify({ username: localStorage.getItem('mail-login'), password: 'love'}), headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setUsers(data)
          setLoggedIn(true)
        })
    }
  }, [])

  return loggedIn ? (
    <div>
      <Navbar />
      <Home />
      <Welcome users={users} />
      <InterimPictures />
      <Program />
      <InterimPicturesTwo />
      <Map users={users} />
      <ToastMasters />
      <Contact />
    </div>
  ) : <Login login={setLoggedIn} setUsers={setUsers} />
}

export default App