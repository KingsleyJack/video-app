import React, { createContext } from "react";
import { render } from "react-dom";
import App from "./app";
import { firebase } from "./lib/firebase.prod";

export const FirebaseContext = createContext(null);

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
