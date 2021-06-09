import React, {useState} from "react";
import { useHistory } from "react-router";
import { Menu, Container } from "semantic-ui-react";
import CartSummary from "./cartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";



export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSingnOut(){
    setIsAuthenticated(false)
    history.push("/")

  }

  function handleSingnIn(){
    setIsAuthenticated(true);
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          <CartSummary />
          {isAuthenticated?<SignedIn signOut={handleSingnOut} test="1" />:<SignedOut signIn={handleSingnIn} />}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
