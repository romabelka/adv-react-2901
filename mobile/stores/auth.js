import {observable, autorun, computed, action} from "mobx";
import emailValidator from 'email-validator'

class AuthStore {
    constructor() {
        autorun(() => {
            console.log('---', 'hi from authorun', this.email)
        })
    }
    @observable user = null
    @observable email = ''
    @observable password = ''

    @computed get isValidForm() {
        return emailValidator.validate(this.email) && this.password.length >= 8
    }

    @action setEmail = (email) => {
        this.email = email
        this.email = 'Hello'
        this.email = email
    }

    @action setPassword = (password) => this.password = password

    signIn = async () => {
//        const user = await api.signIn(this.email, this.password)
//        this.user = user
    }
}

export default AuthStore
