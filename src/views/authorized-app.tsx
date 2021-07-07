import { useAuth } from "context/auth-context";
import ProjectList from "./project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Dropdown, Menu, Button } from "antd";

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
  const { logout, user } = useAuth();
  return (
    <Header justify={"space-between"}>
      <HeaderLeft gap={2}>
        {/* <img src={logo} alt="" /> */}
        <SoftwareLogo width="18rem" color="rgb(38, 132, 255)" />
        <h2>user</h2>
        <h2>project</h2>
      </HeaderLeft>
      <HeaderRight>
        {/* <button onClick={logout}>登出</button> */}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            {`Hey, ${user?.name}`}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
`;
const Header = styled(Row)`
  padding: 0 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;

export default AuthorizedApp;
