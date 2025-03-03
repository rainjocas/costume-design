import * as React from "react";

/**
 * NavLink Props
 * @param src, where it is being linked to
 * @param children, the children of the component
 */
type NavLinkProps = {
    src: string,
    children: React.ReactNode[] | React.ReactNode;
};

/**
 * Navlink Component
 * A navigation link styled for this project
 */
const NavLink: React.FC<NavLinkProps> = ({ 
    src, children,
}) => {
    return (
        <a href = {src} className="no-underline text-white font-bold h-10 pt-2 -py-2 px-4 rounded-lg
                                   transition duration-300 ease-in-out bg-theme_red hover:bg-theme_orange
                                   hover:text-black transition-colors focus-visible:ring">
            {children}
        </a>
    );
}

export default NavLink;