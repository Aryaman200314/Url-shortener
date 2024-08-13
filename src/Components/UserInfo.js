import React from 'react'
import SignUp from './SignUp'
function UserInfo({name}) {
  return (
    <div>
      <h1>user INFO</h1>
        <h2>{name}</h2>
    </div>
  )
}

export default UserInfo