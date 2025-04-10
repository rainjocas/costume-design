import React from "react";
import useScreenType from "../utils/UseScreenType";
import SkipLink from "./navigation/Skiplink";
import NavigationBar, { Menu } from "./navigation/NavigationBar";

/**
 * Wrapper Component Props
 * @param children, the children of the component
 */
type WrapperProps = {
    children: React.ReactNode[] | React.ReactNode;
};

/**
 * Wrapper Component
 * Used for the elements that are displayed on all pages,
 * updating here updates all pages at once
 */
export const PageWrapper: React.FC<WrapperProps> = ({ children, }) => {   
    const screenType = useScreenType();
    return (
        <div tabIndex={0} role="document">
            <SkipLink skipTo={"#main"}></SkipLink>
            <Menu />
            <div id="page-content">
                {children}
                Mobile
            </div>
        </div>
    );
};
