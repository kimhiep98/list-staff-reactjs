import ListStaff from "./components/ListStaff";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/* <ListStaff /> */}
          </Route>
          <Route path="/profile/:id" children={<Profile />}></Route>
        </Switch>
      </Router>
      <ListStaff />
    </div>
  );
}

export default App;
