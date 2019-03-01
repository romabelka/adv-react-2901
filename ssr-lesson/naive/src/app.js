const React = require('react')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 10
        }

    }

    render() {
        return React.createElement('h1', {
            onClick: () => {
                this.setState({ counter: this.state.counter + 1} )
            }
        }, `Count ${this.state.counter}`)
    }
}

module.exports = App
