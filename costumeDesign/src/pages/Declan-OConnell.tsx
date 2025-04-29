import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Declan: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[2].name}
                    workName={People[2].workName}
                    workClothingimg={People[2].workClothingimg}
                    workClothingimgAlt={People[2].workClothingimgAlt}
                    workClothingPeiceList={People[2].workClothingPeiceList}

                    musicName={People[2].musicName}
                    musicStatement={People[2].musicStatement}
                    musicimg1={People[2].musicimg1}
                    musicimg1Alt={People[2].musicimg1Alt}
                    musicimg2={People[2].musicimg2}
                    musicimg2Alt={People[2].musicimg2Alt}
                    musicPeiceList={People[2].musicPeiceList}

                    constructionName={People[2].constructionName}
                    constructionStatement={People[2].constructionStatement}
                    constructionimg1={People[2].constructionimg1}
                    constructionimg1Alt={People[2].constructionimg1Alt}
                    constructionimg2={People[2].constructionimg2}
                    constructionimg2Alt={People[2].constructionimg2Alt}
                    constructionimg3={People[2].constructionimg3}
                    constructionimg3Alt={People[2].constructionimg3Alt}

                    productionName={People[2].productionName}
                    productionStatement={People[2].productionStatement}
                    productionimg1={People[2].productionimg1}
                    productionimg1Alt={People[2].productionimg1Alt}
                    productionimg2={People[2].productionimg2}
                    productionimg2Alt={People[2].productionimg2Alt}
                    productionimg3={People[2].productionimg3}
                    productionimg3Alt={People[2].productionimg3Alt}
                    productionimg4={People[2].productionimg4}
                    productionimg4Alt={People[2].productionimg4Alt}

                    finalStatement={People[2].finalStatement}
                    finalimg1={People[2].finalimg1}
                    finalimg1Alt={People[2].finalimg1Alt}
                    finalimg2={People[2].finalimg2}
                    finalimg2Alt={People[2].finalimg2Alt}
                    finalimg3={People[2].finalimg3}
                    finalimg3Alt={People[2].finalimg3Alt}
                    finalimg4={People[2].finalimg4}
                    finalimg4Alt={People[2].finalimg4Alt}
                    finalimg5={People[2].finalimg5}
                    finalimg5Alt={People[2].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Declan;