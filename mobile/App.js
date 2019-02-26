import React from 'react'
import {Provider} from 'mobx-react'
import AppNavigator from './components/app-navigator'
import stores from './stores'

export default class App extends React.Component {
  render() {
    return <Provider {...stores}>
      <AppNavigator />
    </Provider>
  }
}
