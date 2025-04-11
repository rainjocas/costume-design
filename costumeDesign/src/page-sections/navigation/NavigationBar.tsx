import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import HamburgerSVG from "../../assets/Hamburger";
import NavLink from "./NavLink";
import SewingMachineSVG from "../../assets/SewingMachine";

export function NavigationBar() {
  return (
    <nav className="flex items-center sticky top-0 py-2 z-20 bg-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Navbar tabIndex={0} fixed= "top" expand="lg" className="bg-body-tertiary">
        <div className="flex flex-row justify-between place-content-between">
          <Link className="no-underline absolute pl-3" to="/">
            <div className="flex flex-row align justify-center rounded-xl w-16 h-12">
              <a href = "/" target = "_target" className="">
                <SewingMachineSVG/>
              </a>
            </div>
          </Link>
          <Nav className= "flex flex-row items-center bg-theme_red rounded-lg absolute right-5" role="navigation">
          <NavLink src={"/Ai-Lee-Woods"}>Ai Lee Woods</NavLink>
            <NavLink src={"/Anna-Monaghan"}>Anna Monaghan</NavLink>
            <NavLink src={"/Declan-OConnell"}>Declan O'Connell</NavLink>
            <NavLink src={"/Elana-Sheinkopf"}>Elana Sheinkopf</NavLink>
            <NavLink src={"/Erica-Erdenesanaa"}>Erica Erdenesanaa</NavLink>
            <NavLink src={"/Gwen-Gleason"}>Gwen Gleason</NavLink>
            <NavLink src={"/Martina-Tognato-Guaqueta"}>Martina Tognato Guaqueta</NavLink>
            <NavLink src={"/Mira-Pickus"}>Mira Pickus</NavLink>
            <NavLink src={"/Molly-Richardson"}>Molly Richardson</NavLink>
            <NavLink src={"/Rain-Jocas"}>Rain Jocas</NavLink>
            <NavLink src={"/Space-Pace"}>Space Pace</NavLink>
            <NavLink src={"/Tali-Serlin"}>Tali Serlin</NavLink>
            <NavLink src={"/Zoe-Buettner"}>Zoe-Buettner</NavLink>
          </Nav>
        </div>
      </Navbar>
    </nav>
  );
}

/**
 * SideBar component:
 * This component handles navigation on mobile. It will be used to navigate between pages.
 */
function SideBar({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  
  return (
    <div role="banner">
    <div className="flex flex-row justify-between py-2">
      <Link className="no-underline text-darkGreen pl-5" to="/">
        <a href = "/" target = "_target">
          <SewingMachineSVG/>
        </a>
      </Link>
        <nav tabIndex={0} onKeyDown={toggleShow} className="focus-visible:ring"> 
        <HamburgerSVG className="w-[40px] h-[40px] mr-[10px]" onClick={toggleShow} onKeyDown={toggleShow} />
      </nav>
    </div>
    <Offcanvas show={show} onHide={handleClose} {...props}> {/*responsive design can be removed if glitchy by deleting responsive = "md" */}
      <Offcanvas.Header closeButton className = "">
        <SewingMachineSVG/>
      </Offcanvas.Header>
      <Offcanvas.Body role="navigation" className="align-center justify-content-start flex-grow-1 pe-3 flex flex-col items-center">
        <NavLink src={"/Ai-Lee-Woods"}>Ai Lee Woods</NavLink>
        <NavLink src={"/Anna-Monaghan"}>Anna Monaghan</NavLink>
        <NavLink src={"/Declan-OConnell"}>Declan O'Connell</NavLink>
        <NavLink src={"/Elana-Sheinkopf"}>Elana Sheinkopf</NavLink>
        <NavLink src={"/Erica-Erdenesanaa"}>Erica Erdenesanaa</NavLink>
        <NavLink src={"/Martina-Tognato-Guaqueta"}>Martina Tognato Guaqueta</NavLink>
        <NavLink src={"/Mira-Pickus"}>Mira Pickus</NavLink>
        <NavLink src={"/Molly-Richardson"}>Molly Richardson</NavLink>
        <NavLink src={"/Rain-Jocas"}>Rain Jocas</NavLink>
        <NavLink src={"/Space-Pace"}>Space Pace</NavLink>
        <NavLink src={"/Tali-Serlin"}>Tali Serlin</NavLink>
        <NavLink src={"/Zoe-Buettner"}>Zoe-Buettner</NavLink>
        <NavLink src={"/Erica-Erdenesanaa"}>Erica Erdenesanaa</NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  </div>
  );
}

/**
 * Menu component:
 * This component is what displays the Sidebar component, and allows it to be called more easily.
 */
export function Menu() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <SideBar key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}


export default NavigationBar;