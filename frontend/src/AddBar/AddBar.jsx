import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png'
import logo from '../assets/logo.png'

function AddBar({defaultAccount}) {

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
          <NavbarItem className="nav__link">
          <div className="flex flex-row gap-1 ">
            <img src={logo2} alt="logo2" />
		        <h3 style={{color:'white'}}>0x2B...9Feb</h3>
        </div>
          </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem isActive>
        <div className="flex flex-row gap-1 ">
        <img src={logo2} alt="logo2" />
		    <h3 style={{color:'white'}}>0x1fc...f329</h3>
        </div>
        </NavbarItem>    
      </NavbarContent> */}
      
    </Navbar>
      </>
    )
  }
  
  export default AddBar