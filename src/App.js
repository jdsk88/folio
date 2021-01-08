import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
// import MenuAppBar from './components/appBar'
import Dashboard from './components/dashboard/dashboard'
import SignIn from './components/signin';
import SignUp from './components/signup';
import LabelBottomNavigation from './components/bnav';
import PrimarySearchAppBar from "./components/appBar";
import TransferList from "./components/tasks/tasks";
import { Products } from "./components/products/index";
import { DrugsStore } from "./components/drugs/index-old";
import {Drugs} from "./components/drugs/index";
import {Brightness} from "./components/settings/index"
import {Email} from "./components/email/index"
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
          <Route path="/drugs" component={DrugsStore} />
          <Route path="/rxdrugs" component={Drugs} />
          <Route path="/rxdrugs" component={Drugs} />
          <Route path="/settings" component={Brightness} />
          <Route path="/email" component={Email} />
        </Switch>
        <LabelBottomNavigation />
      </Router>
    </div>
  );
}

export default App;


