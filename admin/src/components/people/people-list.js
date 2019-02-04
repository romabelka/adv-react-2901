import React from 'react'
import Person from './person'

const PeopleList = ({ people }) => {
  if(people.length === 0) return null
  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map(({firstName, lastName, email, id}) => (
          <li key={id}>
            <Person firstName={firstName} lastName={lastName} email={email}/>
          </li>))}
      </ul>
    </div>
  )
}


export default PeopleList