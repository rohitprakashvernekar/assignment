import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import TryBoards from "./Tryboards";
import {Switch,Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Switch>
      <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Route path="/try" component={TryBoards}/>
            <Route path exact="/" component={Main}/>
          </div>
        </div>
      </div>
    </div>
    </Switch>
  );
}

export default App;
