import React, {Component} from 'react';
import {connect} from 'react-redux'
import {initUser} from "../ducks/auth";

class Loading extends Component {

  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.initUser(() => this.setState({
      isLoading: false
    }));
  }

  render() {
    const { Component } = this.props;
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;

    return <Component />;
  }
}

const App = connect(state => ({user: state.auth.user}), {initUser})(Loading);

export default Component => () => <App Component={Component} />;
