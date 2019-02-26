import React, {Component} from 'react'
import {View, Text, TextInput, Button, Platform} from 'react-native'

class Auth extends Component {
    static propTypes = {}

    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (email) => this.setState({email})
    handlePasswordChange = (password) => this.setState({password})

    render() {
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.email} onChangeText={this.handleEmailChange} keyboardType="email-address"/>
                <Text>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.password} onChangeText={this.handlePasswordChange} secureTextEntry/>
                <Button title="SignIn" onPress={this.props.handleSignIn} />
            </View>
        )
    }
}

const styles = {
    input: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,

            },
            android: {
            }
        })
    }
}

export default Auth
