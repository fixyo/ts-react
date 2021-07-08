import ErrorBoundary from "components/error-boundary";
import { useAuth } from "context/auth-context";
import AuthorizedApp from "views/authorized-app";
import UnauthorizedApp from "views/unauthorized-app";
// import React from "react";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div>
      <ErrorBoundary fallbackRender={FallbackPage}>
        {user ? <AuthorizedApp /> : <UnauthorizedApp />}
      </ErrorBoundary>
    </div>
  );
}
const FallbackPage = () => {
  return <div>fallback</div>;
};
export default App;
