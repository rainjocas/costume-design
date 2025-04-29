import React from "react";

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
    return (
      
      <footer role="contentinfo" className="mt-10">
        {/* contentInfo is used to identify common information at the bottom of every page */} 
        {/* Outer div for bg and inner divs for containers then add content*/}
        <div className="py-10 w-full bg-theme_purple px-12">
          <div className="text-white mt-10 w-full mx-auto max-w-5xl justify-center items-center">
            <p><i>{name}</i></p>
            <p>{email} {phone}</p>
          </div>
        </div>
      
      </footer>
      
    );
};

export default Footer;