import useLoggedIn from "../hooks/useLoggedIn";
import { Route,Redirect } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";

 function ProtectedRoute ({ children, path }) {
  //Check if user is loggedIn.
  //If user is already logged in redirect the user to notes page
  useLoggedIn();

  const {state:{isLoggedIn}}=useContextGetter();

  return (
     <> {(isLoggedIn)?<Route path={path}>{children}</Route>:<Redirect to="/home"/>}
   </>
  );
}

export default ProtectedRoute;
