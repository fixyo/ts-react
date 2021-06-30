import { useAuth } from "context/auth-context";
import ProjectList from "./project-list";
const AuthorizedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectList />
    </div>
  );
};

export default AuthorizedApp;
