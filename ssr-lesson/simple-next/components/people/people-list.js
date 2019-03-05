import React from 'react'
import { withRouter } from 'next/router'

function PeopleList({ people, router }) {
    const navigate = (person) => () => router.push(`/people?id=${person.id}`, `/people/${person.id}`)

    return (
        <table>
            <tbody>
                {getRows(people, navigate)}
            </tbody>
        </table>
    )
}

const getRows = (people, navigate) => people.map(person =>
    <tr key={person.id} onClick={navigate(person)}>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
    </tr>
)

export default withRouter(PeopleList)
