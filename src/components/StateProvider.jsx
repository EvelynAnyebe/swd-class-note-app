import { createContext, useReducer } from "react";

export const AppContext = createContext();

// reducer function
function reducer(state, action) {
  // create a copy of your state
  let stateCopy = { ...state };

  // set the name on our state copy to action
  stateCopy.action = action;

  // if action.type is LOGIN
  // set isLoggedIn to true
  // & set userData to payload
  if (action.type === "LOGIN") {
    localStorage.setItem("user",JSON.stringify(action.payload));
    stateCopy.isLoggedIn = true;
    stateCopy.userData = action.payload;
  }

  // if action.type is LOGOUT
  // set isLoggedIn to false
  // & set userData to null
  if (action.type === "LOGOUT") {
    localStorage.clear();
    stateCopy.isLoggedIn = false;
    stateCopy.userData = null;
    stateCopy.alertMessage={
      message: "",
      variant: "",
    }
  }

  // if action.type is ALERT_MESSAGE
  //set alert message object
  if (action.type === "ALERT_MESSAGE") {
    stateCopy.alertMessage = action.payload;
  }

  return stateCopy;
}

const initialState = {
  isLoggedIn: false,
  userData: null,
  alertMessage: {
    message: "",
    variant: "",
  },
};

function StateProvider({ children }) {
  const [appstate, dispatch] = useReducer(reducer, initialState);

  const contextObject = {
    state: appstate,
    dispatch: dispatch,
  };

  return (
    <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
  );
}

export default StateProvider;
