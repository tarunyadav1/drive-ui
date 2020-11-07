import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div>
      <Navbar className={styles.nav} color="light" expand="md">
        <img
          className={styles.logo}
          alt="drive icon"
          src="https://img.icons8.com/color/48/000000/google-drive--v2.png"
        />
        <NavbarBrand className={styles.name} href="/">
          Drive
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Menu;
