import "./resources/styles.css";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import Teamweights from "./components/teamweights/teamweights";
import Login from "./components/login/login";
import EnterWeight from "./components/enterweight/enterweight";
import MyWeights from "./components/myweights/myweights";
import Search from "./components/search/search";
import AddEmployee from "./components/addemployee/addemployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/teamweights" component={Teamweights}/>
        <Route path="/login" component={Login}/>
        <Route path="/enterweight" component={EnterWeight}/>
        <Route path="/myweights" component={MyWeights}/>
        <Route path="/addemployee" component={AddEmployee}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
