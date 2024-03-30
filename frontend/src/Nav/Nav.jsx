import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Nav() {

    return (
      <>
       <Navbar style={{backgroundColor:'#0A0A0A'}} className="navbar">
      <NavbarBrand className="links2 flex flex-row">
      <Link to='/' className="flex flex-row justify-center items-center">
       <div style={{width:'60px' , height:'60px' , objectFit:'cover'}}>
        <img src={logo} alt="" />
       </div>
        <p className="font-bold  text-white text-xl"><b style={{color:'#4f46e5'}}>Point</b>Caster</p>
      </Link>
      </NavbarBrand>
      <NavbarContent className="links" justify="center">
          <NavbarItem className="nav__link text-white">
              HOME
          </NavbarItem>
          <NavbarItem className="nav__link text-white">
              API DOCS
          </NavbarItem>   
          <NavbarItem className="nav__link text-white" >
              COMMUNITY
          </NavbarItem>
          
      </NavbarContent>
    </Navbar>
      </>
    )
  }
  
  export default Nav