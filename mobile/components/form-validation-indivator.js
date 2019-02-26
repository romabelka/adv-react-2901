import React, { Component } from 'react'
import {Text} from 'react-native'
import {inject, observer} from 'mobx-react'

@inject('auth')
@observer
class FormValidationIndicator extends Component {
    static propTypes = {

    }

    render() {
        console.log('---', 'indicator')
        return <Text>{this.props.auth.isValidForm ? 'Valid' : 'Invalid'}</Text>
    }
}

export default FormValidationIndicator
