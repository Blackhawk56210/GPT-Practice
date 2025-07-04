import React from 'react'

function ProfileCard({ name, role, callSign }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>CallSign: {callSign}</p>
    </div>
  )
}

export default ProfileCard
