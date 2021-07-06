import { useAuth } from "context/auth-context";
import ProjectList from "./project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";

const AuthorizedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <ProjectList />
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout } = useAuth();
  return (
    <Header justify={"space-between"}>
      <HeaderLeft gap={2}>
        <h2>logo</h2>
        <h2>user</h2>
        <h2>project</h2>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={logout}>登出</button>
      </HeaderRight>
    </Header>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
`;
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;

export default AuthorizedApp;
