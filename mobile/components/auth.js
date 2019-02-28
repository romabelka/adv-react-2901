import React, {Component} from 'react'
import {View, Text, TextInput, Button, Platform} from 'react-native'
import {observer, inject} from 'mobx-react'
import FormValidationIndicator from "./form-validation-indivator";


@inject('auth')
@observer
class Auth extends Component {
    static propTypes = {}

    render() {
        const { setEmail, setPassword } = this.props.auth
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.props.auth.email} onChangeText={setEmail} keyboardType="email-address"/>
                <Text>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.props.auth.password} onChangeText={setPassword} secureTextEntry/>
                <FormValidationIndicator/>
                <Button title="SignIn" onPress={this.props.auth.signIn} />
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
