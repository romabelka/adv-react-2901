import React, {PureComponent, Fragment} from 'react'

class PersonsList extends PureComponent {
  render() {
    const { persons } = this.props;

    return (
      <Fragment>
        <p> List of persons </p>
        <ul>
          {persons.map(person => (
            <li key={person.id}>
              {person.firstName}, {person.lastName}
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default PersonsList;
