import {observable, autorun, computed} from "mobx";
import emailValidator from 'email-validator'

class AuthStore {
    constructor() {
        autorun(() => {
            console.log('---', 'hi from authorun', this.email)
        })
    }
    @observable email = ''
    @observable password = ''

    @computed get isValidForm() {
        return emailValidator.validate(this.email) && this.password.length >= 8
    }
}

export default AuthStore
