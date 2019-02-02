import React, {Component, Fragment} from 'react'

import Main from "./components/Main";
import Header from "./components/Header";

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
