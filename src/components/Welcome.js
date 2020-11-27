import React from 'react'

const getUsersName = users => {
  if (users.length === 1) {
    return users[0].name
  } else if (users.length === 2) {
    return users.map(user => user.name).reduce((curr, user) => {
      if (!curr) {
        return user.split(' ')[0] + ' & '
      }

      return curr + user.split(' ')[0]
    }, '')
  } else {
    return 'Familjen ' + users[0].name.split(' ')[1]
  }
}

const Welcome = ({ users }) => {
  return (
    <div style={{ backgroundColor: '#d6bac2', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '40%', margin: '60 0' }}>
        <h1>{getUsersName(users)}</h1>
        <span style={{ marginBottom: 16 }}>Nu har nedräkningen börjat på riktigt!
        Vi är så glada att ni vill dela denna helg tillsammans med oss.
        Här har vi samlat information inför den stora
          dagen som kan vara bra att ha koll på.</span>
        <span>MASSA KÄRLEK</span>
        <span>Hanna & Viktor</span>
      </div>
    </div>
  )
}

export default Welcome