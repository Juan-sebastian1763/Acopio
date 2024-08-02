import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";

function NavbarComponent() {
  return (
    <>
      <Navbar
        className="navbar"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarBrand>
          <NavLink end to={"/"}>
            <Logo />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5" justify="center">
          <NavbarItem isActive>
            <NavLink  color="foreground" to={"/"}>
              Inicio
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink to={"materiales"}>Materiales</NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink color="foreground" to={"servicios"}>
              Servicios
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <NavLink to={"/login"}>
              <Button color="primary" variant="bordered" size="lg">
                Iniciar Sesion
              </Button>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
