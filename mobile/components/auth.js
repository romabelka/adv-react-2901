import React, {Component} from 'react'
import {View, Text, TextInput, Button, Platform} from 'react-native'
import {observer} from 'mobx-react'
import stores from '../stores'


@observer
class Auth extends Component {
    static propTypes = {}

    handleEmailChange = (email) => stores.auth.email = email
    handlePasswordChange = (password) => stores.auth.password = password

    render() {
        console.log('---', stores.auth)
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    value={stores.auth.email} onChangeText={this.handleEmailChange} keyboardType="email-address"/>
                <Text>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    value={stores.auth.password} onChangeText={this.handlePasswordChange} secureTextEntry/>
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
