import React from "react";

/**
 * Person props:
 */
interface personProps {
    name: string,
}

/**
 * 
 */
const Person: React.FC<personProps> = ({ 
    name,
}) => {
    return (
        <div className="mx-20 my-10" role="region" aria-label={name}>
            <h2>{name}</h2>
        </div>  
  );
};

export default Person;