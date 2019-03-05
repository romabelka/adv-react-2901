import React from 'react'

function PersonPage({ person }) {
    return (
        <div>
            <h1>{person.email}</h1>
            <section>
                {person.firstName}
            </section>
        </div>
    )
}

PersonPage.propTypes = {
}

export default PersonPage
