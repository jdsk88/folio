import './App.css';
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
// import MenuAppBar from './components/appBar'
import Dashboard from './components/dashboard/dashboard'
import SignIn from './components/signin';
import SignUp from './components/signup';
import LabelBottomNavigation from './components/bnav';
const App = () => {
  return (
    <div className="App">
      {/* <MenuAppBar/> */}
      <Router>
        <Switch>
          <Redirect exact={true} from="/" to="/" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <LabelBottomNavigation />
      </Router>
    </div>
  );
}

export default App;


