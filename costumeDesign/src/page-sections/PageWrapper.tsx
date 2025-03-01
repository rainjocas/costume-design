import React from "react";
import useScreenType from "../utils/UseScreenType";

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
export const PageWrapper: React.FC<WrapperProps> = ({
    children,
    }) => {   
        const screenType = useScreenType();
        if (screenType === "mobile"){
            return (
                <div id="page-content">
                    {children}
                    Mobile
                </div>
            );
        }
        else {
            return (
                <div id="page-content">
                    {children}
                    Desktop
                </div>
            );
        }
};
