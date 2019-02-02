import React, {Component, Fragment} from 'react'

import Main from "./components/Main/Main";
import { Header } from "./components/Header/Header";

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        )
    }
}

export default App
