import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const AiLee: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[0].name}
                    
                    workName={People[0].workName}
                    workClothingimg={People[0].workClothingimg}
                    workClothingimgAlt={People[0].workClothingimgAlt}
                    workClothingPeiceList={People[0].workClothingPeiceList}

                    musicName={People[0].musicName}
                    musicStatement={People[0].musicStatement}
                    musicimg1={People[0].musicimg1}
                    musicimg1Alt={People[0].musicimg1Alt}
                    musicimg2={People[0].musicimg2}
                    musicimg2Alt={People[0].musicimg2Alt}
                    musicPeiceList={People[0].musicPeiceList}

                    constructionName={People[0].constructionName}
                    constructionStatement={People[0].constructionStatement}
                    constructionimg1={People[0].constructionimg1}
                    constructionimg1Alt={People[0].constructionimg1Alt}
                    constructionimg2={People[0].constructionimg2}
                    constructionimg2Alt={People[0].constructionimg2Alt}
                    constructionimg3={People[0].constructionimg3}
                    constructionimg3Alt={People[0].constructionimg3Alt}

                    productionName={People[0].productionName}
                    productionStatement={People[0].productionStatement}
                    productionimg1={People[0].productionimg1}
                    productionimg1Alt={People[0].productionimg1Alt}
                    productionimg2={People[0].productionimg2}
                    productionimg2Alt={People[0].productionimg2Alt}
                    productionimg3={People[0].productionimg3}
                    productionimg3Alt={People[0].productionimg3Alt}
                    productionimg4={People[0].productionimg4}
                    productionimg4Alt={People[0].productionimg4Alt}

                    finalStatement={People[0].finalStatement}
                    finalimg1={People[0].finalimg1}
                    finalimg1Alt={People[0].finalimg1Alt}
                    finalimg2={People[0].finalimg2}
                    finalimg2Alt={People[0].finalimg2Alt}
                    finalimg3={People[0].finalimg3}
                    finalimg3Alt={People[0].finalimg3Alt}
                    finalimg4={People[0].finalimg4}
                    finalimg4Alt={People[0].finalimg4Alt}
                    finalimg5={People[0].finalimg5}
                    finalimg5Alt={People[0].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default AiLee;