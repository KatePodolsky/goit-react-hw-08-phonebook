import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loading from "./components/Loader";

import styles from "./App.module.css";

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "home-view" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage/LoginPage' /*webpackChunkName: "login-view" */)
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage/RegisterPage' /*webpackChunkName: "register-view" */)
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage/ContactsPage' /*webpackChunkName: "contacts-view" */)
);

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <h1 className={styles.title}>Phonebook</h1>
        <Suspense fallback={<Loading />}>
          <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
            component={RegisterPage}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={LoginPage}
          />
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={ContactsPage}
          />
        </Switch>
        </Suspense>
        
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)