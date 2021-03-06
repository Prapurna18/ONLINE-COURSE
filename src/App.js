import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import Course from "./Course";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forgetpassword from "./Forgetpassword";
import Security from "./Security";
import Reset from "./Reset";
import "./App.css";
import Home from "./Home";
import Courseslists from "./Courseslists";
import { useState } from "react";

function App() {
  const [userDetails, setuserDetails] = useState(null);
  return (
    <Router>
      <div>
        <Header userDetails={userDetails} setuserDetails={setuserDetails}>
          <div className="App">
            <div className="container-fluid complete-background">
              <div className="row">
                <div className="col-sm-12 extra-space">
                  <Switch>
                    <Route exact path="/Home">
                      <Home />
                    </Route>

                    <Route path="/Signup">
                      <Signup setuserDetails={setuserDetails} />
                    </Route>

                    {/* <Signup>

                  </Signup> */}

                    {/* <signIn> */}
                    {/* <Signin> */}
                    <Route path="/Signin">
                      <Signin userDetails={userDetails} />
                    </Route>
                    {/* <Route path="/explore">
                    <explore />
                  </Route> */}

                    <Route path="/Forgetpassword">
                      <Forgetpassword />
                    </Route>
                    <Route path="/Security">
                      <Security />
                    </Route>
                    <Route path="/Reset">
                      <Reset />
                    </Route>
                    <Route path="/Course">
                      <Course />
                    </Route>
                    <Route path="/Courseslists">
                      <Courseslists />
                    </Route>

                    {/* </Signin> */}
                  </Switch>
                </div>
              </div>
            </div>

            {/* // <forgetpassword> */}

            {/* <Security> */}

            {/* reset */}
          </div>
        </Header>{" "}
      </div>
    </Router>
  );
}

export default App;
