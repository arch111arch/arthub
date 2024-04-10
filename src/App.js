import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignInUpForm';

function App() {
  return (
    
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home ase</h1>}></Route>
            <Route exact path="/signin" render={() => <h1>Sign in</h1>}></Route>
              <Route exact path="/signup" render={() => <SignUpForm/> }></Route>
                <Route render={() => <p>Page not found!</p>}></Route>
        </Switch>
      </Container>

      </div>
  );
}

export default App;
