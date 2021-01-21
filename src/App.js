import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
// import MenuAppBar from './components/appBar'
import Dashboard from './components/dashboard/dashboard'
import { SignIn } from './components/signin';
import SignUp from './components/signup';
import LabelBottomNavigation from './components/bnav';
import PrimarySearchAppBar from "./components/appBar";
import TransferList from "./components/tasks/tasks";
import { Products } from "./components/products/index";
import { Drugs } from "./components/drugs/index";
import { Brightness } from "./components/settings/index"
import { Email } from "./components/email/index"
import { EmailForm } from "./components/email/form";
import { FiltersForm } from "./components/email/filters";
import { Networks } from "./components/network";
import { AddProduct } from "./components/products/addProduct";
import { AddProductRouter } from "./components/products/addProductRoutes";
export const App = () => {
  return (
    <div className="App">
      {/* <MenuAppBar/> */}
      <Router>
        <PrimarySearchAppBar />
        <Switch>
          <Redirect exact={true} from="/" to="/home" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/tasks" component={TransferList} />
          <Route path="/products" component={Products} />
          <Route path="/add_product" component={AddProduct} />
          <Route path="/drugs" component={Drugs} />
          <Route path="/settings" component={Brightness} />
          <Route path="/email" component={Email} />
          <Route path="/email_form" component={EmailForm} />
          <Route path="/filters_form" component={FiltersForm} />
          <Route path="/setup" component={Networks} />
        </Switch>
        <LabelBottomNavigation />
      </Router>
    </div>
  );
}

export default App;



