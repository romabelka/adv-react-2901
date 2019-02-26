import {observable, autorun} from "mobx";

class AuthStore {
    constructor() {
        autorun(() => {
            console.log('---', 'hi from authorun', this.email)
        })
    }
    @observable email = ''
    @observable password = ''
}

export default AuthStore
