import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Erica: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[4].name}
                    
                    workName={People[4].workName}
                    workClothingimg={People[4].workClothingimg}
                    workClothingimgAlt={People[4].workClothingimgAlt}
                    workClothingPeiceList={People[4].workClothingPeiceList}

                    musicName={People[4].musicName}
                    musicStatement={People[4].musicStatement}
                    musicimg1={People[4].musicimg1}
                    musicimg1Alt={People[4].musicimg1Alt}
                    musicimg2={People[4].musicimg2}
                    musicimg2Alt={People[4].musicimg2Alt}
                    musicPeiceList={People[4].musicPeiceList}

                    constructionName={People[4].constructionName}
                    constructionStatement={People[4].constructionStatement}
                    constructionimg1={People[4].constructionimg1}
                    constructionimg1Alt={People[4].constructionimg1Alt}
                    constructionimg2={People[4].constructionimg2}
                    constructionimg2Alt={People[4].constructionimg2Alt}
                    constructionimg3={People[4].constructionimg3}
                    constructionimg3Alt={People[4].constructionimg3Alt}

                    productionName={People[4].productionName}
                    productionStatement={People[4].productionStatement}
                    productionimg1={People[4].productionimg1}
                    productionimg1Alt={People[4].productionimg1Alt}
                    productionimg2={People[4].productionimg2}
                    productionimg2Alt={People[4].productionimg2Alt}
                    productionimg3={People[4].productionimg3}
                    productionimg3Alt={People[4].productionimg3Alt}
                    productionimg4={People[4].productionimg4}
                    productionimg4Alt={People[4].productionimg4Alt}

                    finalStatement={People[4].finalStatement}
                    finalimg1={People[4].finalimg1}
                    finalimg1Alt={People[4].finalimg1Alt}
                    finalimg2={People[4].finalimg2}
                    finalimg2Alt={People[4].finalimg2Alt}
                    finalimg3={People[4].finalimg3}
                    finalimg3Alt={People[4].finalimg3Alt}
                    finalimg4={People[4].finalimg4}
                    finalimg4Alt={People[4].finalimg4Alt}
                    finalimg5={People[4].finalimg5}
                    finalimg5Alt={People[4].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Erica;