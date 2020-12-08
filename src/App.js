import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
// import MenuAppBar from './components/appBar'
import Dashboard from './components/dashboard/dashboard'
import SignIn from './components/signin';
import SignUp from './components/signup';
import LabelBottomNavigation from './components/bnav';
import PrimarySearchAppBar from "./components/appBar";
import TransferList from "./components/tasks/tasks";
import { Products } from "./components/products/products";
const App = () => {
  return (
    <div className="App">
      {/* <MenuAppBar/> */}
      <Router>
        <PrimarySearchAppBar/>
        <Switch>
          <Redirect exact={true} from="/" to="/home" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/tasks" component={TransferList} />
          <Route path="/products" component={Products} />
        </Switch>
        <LabelBottomNavigation />
      </Router>
    </div>
  );
}

export default App;


