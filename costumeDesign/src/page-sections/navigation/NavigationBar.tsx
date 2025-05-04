import React, {useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import HamburgerSVG from "../../assets/Hamburger";
import NavLink from "./NavLink";
import SewingMachineSVG from "../../assets/SewingMachine";

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
    <div className="bg-theme_blue flex flex-row justify-between py-2">
      <a href = "/" target = "_target" className = "bg-theme_blue focus-visible:ring">
        <SewingMachineSVG/>
      </a>
      <nav tabIndex={0} onKeyDown={toggleShow} className="focus-visible:ring"> 
        <HamburgerSVG className="w-[40px] h-[40px] mr-[10px]" onClick={toggleShow} onKeyDown={toggleShow} />
      </nav>
    </div>
    <Offcanvas role="dialog" show={show} onHide={handleClose} {...props}> {/*responsive design can be removed if glitchy by deleting responsive = "md" */}
      <Offcanvas.Header tabIndex={0} closeButton className = "bg-theme_blue focus-visible:ring">
        <a href = "/" target = "_target" className = "bg-theme_blue focus-visible:ring">
          <SewingMachineSVG/>
        </a>
      </Offcanvas.Header>
      <Offcanvas.Body tabIndex={0} role="navigation" className="bg-theme_pink align-center justify-content-start flex-grow-1 pe-3 flex flex-col items-center">
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
