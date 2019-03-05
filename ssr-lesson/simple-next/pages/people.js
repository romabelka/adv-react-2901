import React, { Component } from 'react'
import apiService from '../services/api'
import PersonPage from '../components/people/person-page'
import PeopleList from '../components/people/people-list'
import Layout from '../components/layout'

class PeoplePage extends Component {
    static getInitialProps = async ({ query: { id } }) => {
        if (id) return {
            isRootPage: false,
            person: await apiService.fetchPerson(id)
        }

        return {
            isRootPage: true,
            people: await apiService.fetchAllPeople()
        }
    }

    render() {
        const { isRootPage, people, person } = this.props
        return (
            <Layout title="people">
                {isRootPage ? <PeopleList people={people}/> : <PersonPage person={person}/>}
            </Layout>
        )
    }
}

export default PeoplePage
