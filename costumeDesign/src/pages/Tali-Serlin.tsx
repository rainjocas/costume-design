import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Tali: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
            <Person 
                    name = {People[11].name}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Tali;