import React, {Component} from 'react'
import {personSelector} from '../../ducks/person';
import {connect} from "react-redux";

class PeopleList extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        {
                            this.props.people.map(person => {
                                return (<li>{person.firstName} {person.secondName} {person.email}</li>)
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default PeopleList

