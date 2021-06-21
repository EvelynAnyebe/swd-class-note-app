import { lazy, Suspense } from "react";
import StateProvider from "./components/StateProvider";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// Style import
import "./assets/css/App.css";

// Import components
import Spinner from "./components/spinner";
import Layout from "./components/layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Font awesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

// Pages
const Home = lazy(() => import("./pages/Home"));
const FourOFour = lazy(() => import("./pages/Four0Four"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Notes = lazy(() => import("./pages/Notes"));



function App() {
  return (
    <StateProvider>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Layout>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home">
                <Home />
              </Route>
              <ProtectedRoute exact path="/notes">
                <Notes />  
              </ProtectedRoute> 
            </Layout>
            <Route>
              <FourOFour />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </StateProvider>
  );
}

export default App;
