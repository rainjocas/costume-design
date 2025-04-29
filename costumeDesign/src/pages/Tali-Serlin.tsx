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
                    
                    workName={People[11].workName}
                    workClothingimg={People[11].workClothingimg}
                    workClothingimgAlt={People[11].workClothingimgAlt}
                    workClothingPeiceList={People[11].workClothingPeiceList}

                    musicName={People[11].musicName}
                    musicStatement={People[11].musicStatement}
                    musicimg1={People[11].musicimg1}
                    musicimg1Alt={People[11].musicimg1Alt}
                    musicimg2={People[11].musicimg2}
                    musicimg2Alt={People[11].musicimg2Alt}
                    musicPeiceList={People[11].musicPeiceList}

                    constructionName={People[11].constructionName}
                    constructionStatement={People[11].constructionStatement}
                    constructionimg1={People[11].constructionimg1}
                    constructionimg1Alt={People[11].constructionimg1Alt}
                    constructionimg2={People[11].constructionimg2}
                    constructionimg2Alt={People[11].constructionimg2Alt}
                    constructionimg3={People[11].constructionimg3}
                    constructionimg3Alt={People[11].constructionimg3Alt}

                    productionName={People[11].productionName}
                    productionStatement={People[11].productionStatement}
                    productionimg1={People[11].productionimg1}
                    productionimg1Alt={People[11].productionimg1Alt}
                    productionimg2={People[11].productionimg2}
                    productionimg2Alt={People[11].productionimg2Alt}
                    productionimg3={People[11].productionimg3}
                    productionimg3Alt={People[11].productionimg3Alt}
                    productionimg4={People[11].productionimg4}
                    productionimg4Alt={People[11].productionimg4Alt}

                    finalStatement={People[11].finalStatement}
                    finalimg1={People[11].finalimg1}
                    finalimg1Alt={People[11].finalimg1Alt}
                    finalimg2={People[11].finalimg2}
                    finalimg2Alt={People[11].finalimg2Alt}
                    finalimg3={People[11].finalimg3}
                    finalimg3Alt={People[11].finalimg3Alt}
                    finalimg4={People[11].finalimg4}
                    finalimg4Alt={People[11].finalimg4Alt}
                    finalimg5={People[11].finalimg5}
                    finalimg5Alt={People[11].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Tali;