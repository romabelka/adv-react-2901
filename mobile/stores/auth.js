import {observable, action, computed} from 'mobx'
import {validate} from 'email-validator'
import BasicStore from './basic-store'
import api from '../services/api'

class AuthStore extends BasicStore {
    @observable email = ''
    @observable password = ''
    @observable user = null
    @computed get isValidEmail() {
        return validate(this.email)
    }

    @action setEmail = email => this.email = email
    @action setPassword = password => this.password = password
    @action setUser = user => this.user = user

    signIn = async () => {
        const user = await api.signIn(this.email, this.password)
        this.setUser(user)
        this.getStore('navigation').goTo('lists')
    }


}

export default AuthStore
