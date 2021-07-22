import React from "react";
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import AppBar from './components/AppBar/AppBar';
import Container from "./components/Container";
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import ContactsPage from './views/ContactsPage/ContactsPage';

import styles from "./App.module.css";


const App = () => (
  <>
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
  </>
)
export default App;



// import React, { Suspense, lazy } from "react";
// import { Route, Switch } from 'react-router-dom';
// import routes from './routes';

// import AppBar from './components/AppBar/AppBar';
// import Container from "./components/Container";
// import LoaderContacts from "./components/Loader";

// import styles from "./App.module.css";

// const HomePage = lazy(() =>
//   import('./views/HomePage/HomePage' /*webpackChunkName: "home-view" */),
// );
// const LoginPage = lazy(() =>
//   import('./views/LoginPage/LoginPage' /*webpackChunkName: "login-view" */),
// );
// const RegisterPage = lazy(() =>
//   import('./views/RegisterPage/RegisterPage' /*webpackChunkName: "register-view" */),
// );
// const ContactsPage = lazy(() =>
//   import('./views/ContactsPage/ContactsPage' /*webpackChunkName: "contacts-view" */),
// );

// const App = () => (
//   <>
//     <Container>
//       <AppBar />
//       <h1 className={styles.title}>Phonebook</h1>
//       <Suspense fallback={<LoaderContacts />}>
//         <Switch>
//           <Route path={routes.home} component={HomePage} />
//           <Route path={routes.login} component={LoginPage} />
//           <Route path={routes.register} component={RegisterPage} />
//           <Route path={routes.contacts} component={ContactsPage} />
//         </Switch>
//       </Suspense>
//     </Container>
//   </>
// )
// export default App;

