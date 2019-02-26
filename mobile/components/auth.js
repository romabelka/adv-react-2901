import React, {Component} from 'react'
import {View, Text, TextInput, Button, Platform} from 'react-native'
import {observer, inject} from 'mobx-react'


@inject('auth')
@observer
class Auth extends Component {
    static propTypes = {}

    handleEmailChange = (email) => this.props.auth.email = email
    handlePasswordChange = (password) => this.props.auth.password = password

    render() {
        console.log('---', this.props.auth)
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.props.auth.email} onChangeText={this.handleEmailChange} keyboardType="email-address"/>
                <Text>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.props.auth.password} onChangeText={this.handlePasswordChange} secureTextEntry/>
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
