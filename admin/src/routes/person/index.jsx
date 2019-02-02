import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import PersonForm from "../../components/Person/PersonForm";
import { addPerson } from "../../ducks/person";

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addPerson,
  },
  dispatch,
);

class Person extends Component {
  handleAddPerson = personInfo => this.props.addPerson(personInfo);

  render() {
    return (
      <Fragment>
        <h1> People </h1>
        <PersonForm onSubmit={this.handleAddPerson} />
      </Fragment>
    )
  }
}

export default connect(null, mapDispatchToProps)(Person);
