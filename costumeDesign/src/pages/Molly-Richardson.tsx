import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";
import Footer from "../page-sections/Footer";

const Molly: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[8].name}
                    
                    workName={People[8].workName}
                    workClothingimg={People[8].workClothingimg}
                    workClothingimgAlt={People[8].workClothingimgAlt}
                    workClothingPeiceList={People[8].workClothingPeiceList}

                    musicName={People[8].musicName}
                    musicStatement={People[8].musicStatement}
                    musicimg1={People[8].musicimg1}
                    musicimg1Alt={People[8].musicimg1Alt}
                    musicimg2={People[8].musicimg2}
                    musicimg2Alt={People[8].musicimg2Alt}
                    musicPeiceList={People[8].musicPeiceList}

                    constructionName={People[8].constructionName}
                    constructionStatement={People[8].constructionStatement}
                    constructionimg1={People[8].constructionimg1}
                    constructionimg1Alt={People[8].constructionimg1Alt}
                    constructionimg2={People[8].constructionimg2}
                    constructionimg2Alt={People[8].constructionimg2Alt}
                    constructionimg3={People[8].constructionimg3}
                    constructionimg3Alt={People[8].constructionimg3Alt}

                    productionName={People[8].productionName}
                    productionStatement={People[8].productionStatement}
                    productionimg1={People[8].productionimg1}
                    productionimg1Alt={People[8].productionimg1Alt}
                    productionimg2={People[8].productionimg2}
                    productionimg2Alt={People[8].productionimg2Alt}
                    productionimg3={People[8].productionimg3}
                    productionimg3Alt={People[8].productionimg3Alt}
                    productionimg4={People[8].productionimg4}
                    productionimg4Alt={People[8].productionimg4Alt}

                    finalStatement={People[8].finalStatement}
                    finalimg1={People[8].finalimg1}
                    finalimg1Alt={People[8].finalimg1Alt}
                    finalimg2={People[8].finalimg2}
                    finalimg2Alt={People[8].finalimg2Alt}
                    finalimg3={People[8].finalimg3}
                    finalimg3Alt={People[8].finalimg3Alt}
                    finalimg4={People[8].finalimg4}
                    finalimg4Alt={People[8].finalimg4Alt}
                    finalimg5={People[8].finalimg5}
                    finalimg5Alt={People[8].finalimg5Alt}
                />
            </main>
            <Footer
                name={People[8].name}
                email={People[8].email}
                phone={People[8].phone}
                linkedIn={People[8].linkedIn}
            />
        </PageWrapper>
    );
  };
  
  export default Molly;