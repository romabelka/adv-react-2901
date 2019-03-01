import React from 'react'
import Layout from "../components/layout";

const Event = ({ eventId }) => (
    <Layout title="event">
        <h1>Event {eventId}</h1>
    </Layout>
)

Event.getInitialProps = ({ query, req,res}) => {
    return {
        eventId: query.id
    }
}

export default Event
