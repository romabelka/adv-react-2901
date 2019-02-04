import React, { Component } from 'react'
import ParticipantList from '../../../components/participants/participant-list'
import AddParticipantForm from '../../../components/participants/add-participant-form'
import { addParticipant } from '../../../ducks/participants'
import { connect } from 'react-redux'

class ParticipantsPage extends Component {
    render() {
        return (
            <div>
                <h1>Participants</h1>
                <AddParticipantForm onSubmit={this.props.addParticipant}/>
                <ParticipantList/>
            </div>
        )
    }
}

export default connect(null, { addParticipant })(ParticipantsPage)
