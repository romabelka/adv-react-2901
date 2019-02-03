import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import PersonForm from "../../components/Persons/PersonForm";
import { addPerson, getPersons } from "../../ducks/persons";
import PersonsList from "../../components/Persons";

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addPerson,
  },
  dispatch,
);

const mapStateToProps = store => ({
  persons: getPersons(store),
});

class Persons extends Component {
  handleAddPerson = personInfo => this.props.addPerson(personInfo);

  render() {
    const { persons } = this.props;
    return (
      <Fragment>
        <h1> People </h1>
        <PersonForm onSubmit={this.handleAddPerson} />
        <PersonsList persons={persons} />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
