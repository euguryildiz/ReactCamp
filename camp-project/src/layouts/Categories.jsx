import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Link to="/">
        <Menu.Item
          name="home"
          
        />
        </Link>
        <Menu.Item
          name="messages"

        />
        <Menu.Item
          name="friends"

        />
      </Menu>
    </div>
  );
}
