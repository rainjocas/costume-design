import React from "react";
import Linkedin from "../assets/LinkedIn";

/**
 * Footer props:
 */
interface footerProps {
    name?: string,
    email?: string,
    phone?: string,
    linkedIn?: string,
}

const Footer: React.FC<footerProps> = ({ 
    name, email, phone, linkedIn
}) => {
  if (linkedIn !== "") {
    return (
      
      <footer role="contentinfo" className="mt-10">
        {/* contentInfo is used to identify common information at the bottom of every page */} 
        {/* Outer div for bg and inner divs for containers then add content*/}
        <div className="py-10 px-12 mt-10 w-full bg-theme_violet justify-center items-center text-lg text-white">
          <button><a href={linkedIn}><Linkedin/></a></button>
          <p><i>{name}</i></p>
          <p>{email} {phone}</p>
        </div>
      </footer>
    );
  }
  else return ( 
      <footer role="contentinfo" className="mt-10">
        {/* contentInfo is used to identify common information at the bottom of every page */} 
        {/* Outer div for bg and inner divs for containers then add content*/}
        <div className="py-10 w-full bg-theme_violet px-12 justify-center items">
          <div className="text-lg text-white mt-10 w-full mx-auto max-w-5xl justify-center items-center">
            <p><i>{name}</i></p>
            <p>{email} {phone}</p>
          </div>
        </div>
      
      </footer>
    );
  }

export default Footer;