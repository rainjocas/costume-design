import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";
import Footer from "../page-sections/Footer";

const Anna: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[1].name}
                    
                    workName={People[1].workName}
                    workClothingimg={People[1].workClothingimg}
                    workClothingimgAlt={People[1].workClothingimgAlt}
                    workClothingPeiceList={People[1].workClothingPeiceList}

                    musicName={People[1].musicName}
                    musicStatement={People[1].musicStatement}
                    musicimg1={People[1].musicimg1}
                    musicimg1Alt={People[1].musicimg1Alt}
                    musicimg2={People[1].musicimg2}
                    musicimg2Alt={People[1].musicimg2Alt}
                    musicPeiceList={People[1].musicPeiceList}

                    constructionName={People[1].constructionName}
                    constructionStatement={People[1].constructionStatement}
                    constructionimg1={People[1].constructionimg1}
                    constructionimg1Alt={People[1].constructionimg1Alt}
                    constructionimg2={People[1].constructionimg2}
                    constructionimg2Alt={People[1].constructionimg2Alt}
                    constructionimg3={People[1].constructionimg3}
                    constructionimg3Alt={People[1].constructionimg3Alt}

                    productionName={People[1].productionName}
                    productionStatement={People[1].productionStatement}
                    productionimg1={People[1].productionimg1}
                    productionimg1Alt={People[1].productionimg1Alt}
                    productionimg2={People[1].productionimg2}
                    productionimg2Alt={People[1].productionimg2Alt}
                    productionimg3={People[1].productionimg3}
                    productionimg3Alt={People[1].productionimg3Alt}
                    productionimg4={People[1].productionimg4}
                    productionimg4Alt={People[1].productionimg4Alt}

                    finalStatement={People[1].finalStatement}
                    finalimg1={People[1].finalimg1}
                    finalimg1Alt={People[1].finalimg1Alt}
                    finalimg2={People[1].finalimg2}
                    finalimg2Alt={People[1].finalimg2Alt}
                    finalimg3={People[1].finalimg3}
                    finalimg3Alt={People[1].finalimg3Alt}
                    finalimg4={People[1].finalimg4}
                    finalimg4Alt={People[1].finalimg4Alt}
                    finalimg5={People[1].finalimg5}
                    finalimg5Alt={People[1].finalimg5Alt}
                />
            </main>
            <Footer
                name={People[1].name}
                email={People[1].email}
                phone={People[1].phone}
                linkedIn={People[1].linkedIn}
            />
        </PageWrapper>
    );
  };
  
  export default Anna;