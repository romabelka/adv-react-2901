import React, { Component } from "react";
import { connect } from "react-redux";
import { getParticipantList } from '../../ducks/participants';

class ParticipantList extends Component {
  render() {
    const { participantList } = this.props;
    return (
      <div>
        <h3>Participant List</h3>
        <div>
          {participantList.map(participant => (
            <div
              key={participant.id}
              style={{ borderTop: "1px solid rgb(128, 128, 128)" }}
            >
              <div>
                <span>First Name:</span>
                <span>{participant.firstName}</span>
              </div>
              <div>
                <span>Last Name:</span>
                <span>{participant.lastName}</span>
              </div>
              <div>
                <span>Email:</span>
                <span>{participant.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participantList: getParticipantList(state)
});

export default connect(mapStateToProps)(ParticipantList);
