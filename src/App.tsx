import { useAuth } from "context/auth-context";
import AuthorizedApp from "views/authorized-app";
import UnauthorizedApp from "views/unauthorized-app";
// import React from "react";
import "./App.css";

function App() {
  const { user } = useAuth();
  return user ? <AuthorizedApp /> : <UnauthorizedApp />;
}

export default App;
