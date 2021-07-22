import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import Container from "./components/Container";
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import ContactsPage from './views/ContactsPage/ContactsPage';
import { authOperations } from "./redux/auth";


import styles from "./App.module.css";

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <h1 className={styles.title}>Phonebook</h1>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.contacts} component={ContactsPage} />
        </Switch>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)