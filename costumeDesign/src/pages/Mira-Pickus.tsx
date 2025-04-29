import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Mira: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[7].name}
                    
                    workName={People[7].workName}
                    workClothingimg={People[7].workClothingimg}
                    workClothingimgAlt={People[7].workClothingimgAlt}
                    workClothingPeiceList={People[7].workClothingPeiceList}

                    musicName={People[7].musicName}
                    musicStatement={People[7].musicStatement}
                    musicimg1={People[7].musicimg1}
                    musicimg1Alt={People[7].musicimg1Alt}
                    musicimg2={People[7].musicimg2}
                    musicimg2Alt={People[7].musicimg2Alt}
                    musicPeiceList={People[7].musicPeiceList}

                    constructionName={People[7].constructionName}
                    constructionStatement={People[7].constructionStatement}
                    constructionimg1={People[7].constructionimg1}
                    constructionimg1Alt={People[7].constructionimg1Alt}
                    constructionimg2={People[7].constructionimg2}
                    constructionimg2Alt={People[7].constructionimg2Alt}
                    constructionimg3={People[7].constructionimg3}
                    constructionimg3Alt={People[7].constructionimg3Alt}

                    productionName={People[7].productionName}
                    productionStatement={People[7].productionStatement}
                    productionimg1={People[7].productionimg1}
                    productionimg1Alt={People[7].productionimg1Alt}
                    productionimg2={People[7].productionimg2}
                    productionimg2Alt={People[7].productionimg2Alt}
                    productionimg3={People[7].productionimg3}
                    productionimg3Alt={People[7].productionimg3Alt}
                    productionimg4={People[7].productionimg4}
                    productionimg4Alt={People[7].productionimg4Alt}

                    finalStatement={People[7].finalStatement}
                    finalimg1={People[7].finalimg1}
                    finalimg1Alt={People[7].finalimg1Alt}
                    finalimg2={People[7].finalimg2}
                    finalimg2Alt={People[7].finalimg2Alt}
                    finalimg3={People[7].finalimg3}
                    finalimg3Alt={People[7].finalimg3Alt}
                    finalimg4={People[7].finalimg4}
                    finalimg4Alt={People[7].finalimg4Alt}
                    finalimg5={People[7].finalimg5}
                    finalimg5Alt={People[7].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Mira;