import React from 'react'
import ProfileCard from './profileCard'

function App({ name, role, callSign }) {
  return (
    <div>
      <h1>Crew Manifest</h1>

      <ProfileCard name="Colby" role="Co-Captain" callSign="JetStream" />
      <ProfileCard name="Chris" role="Captain" callSign="SparkPlug" />
      <ProfileCard name="Ahkillin" role="Engineer" callSign="Eagle Eye" />
    </div>
  )
}

export default App
