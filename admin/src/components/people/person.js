import React from 'react'

const Person = ({firstName, lastName, email}) => (
  <div>
    <div>{`${firstName} ${lastName}`}</div>
    <div>{email}</div>
  </div>
)

export default Person