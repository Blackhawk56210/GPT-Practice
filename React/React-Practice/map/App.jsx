import React from 'react'

function App() {
  const people = [
  { name: "Chris", role: "Pilot" },
  { name: "Me", role: "CEO" },
  { name: "Ahkillin", role: "Co-Pilot" },
];

  return (
    <div>
      <ul>
        {people.map((person, index) => {
          return (
            <li key={person.name}>
              {person.name}
              <p>Role: {person.role}</p>
              </li>
          )
        })}
      </ul>
    </div>    
  )
}

export default App
