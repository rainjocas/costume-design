import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Space: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[10].name}
                    
                    workName={People[10].workName}
                    workClothingimg={People[10].workClothingimg}
                    workClothingimgAlt={People[10].workClothingimgAlt}
                    workClothingPeiceList={People[10].workClothingPeiceList}

                    musicName={People[10].musicName}
                    musicStatement={People[10].musicStatement}
                    musicimg1={People[10].musicimg1}
                    musicimg1Alt={People[10].musicimg1Alt}
                    musicimg2={People[10].musicimg2}
                    musicimg2Alt={People[10].musicimg2Alt}
                    musicPeiceList={People[10].musicPeiceList}

                    constructionName={People[10].constructionName}
                    constructionStatement={People[10].constructionStatement}
                    constructionimg1={People[10].constructionimg1}
                    constructionimg1Alt={People[10].constructionimg1Alt}
                    constructionimg2={People[10].constructionimg2}
                    constructionimg2Alt={People[10].constructionimg2Alt}
                    constructionimg3={People[10].constructionimg3}
                    constructionimg3Alt={People[10].constructionimg3Alt}

                    productionName={People[10].productionName}
                    productionStatement={People[10].productionStatement}
                    productionimg1={People[10].productionimg1}
                    productionimg1Alt={People[10].productionimg1Alt}
                    productionimg2={People[10].productionimg2}
                    productionimg2Alt={People[10].productionimg2Alt}
                    productionimg3={People[10].productionimg3}
                    productionimg3Alt={People[10].productionimg3Alt}
                    productionimg4={People[10].productionimg4}
                    productionimg4Alt={People[10].productionimg4Alt}

                    finalStatement={People[10].finalStatement}
                    finalimg1={People[10].finalimg1}
                    finalimg1Alt={People[10].finalimg1Alt}
                    finalimg2={People[10].finalimg2}
                    finalimg2Alt={People[10].finalimg2Alt}
                    finalimg3={People[10].finalimg3}
                    finalimg3Alt={People[10].finalimg3Alt}
                    finalimg4={People[10].finalimg4}
                    finalimg4Alt={People[10].finalimg4Alt}
                    finalimg5={People[10].finalimg5}
                    finalimg5Alt={People[10].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Space;