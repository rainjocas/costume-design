import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Gwen: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[5].name}
                    
                    workName={People[5].workName}
                    workClothingimg={People[5].workClothingimg}
                    workClothingimgAlt={People[5].workClothingimgAlt}
                    workClothingPeiceList={People[5].workClothingPeiceList}

                    musicName={People[5].musicName}
                    musicStatement={People[5].musicStatement}
                    musicimg1={People[5].musicimg1}
                    musicimg1Alt={People[5].musicimg1Alt}
                    musicimg2={People[5].musicimg2}
                    musicimg2Alt={People[5].musicimg2Alt}
                    musicPeiceList={People[5].musicPeiceList}

                    constructionName={People[5].constructionName}
                    constructionStatement={People[5].constructionStatement}
                    constructionimg1={People[5].constructionimg1}
                    constructionimg1Alt={People[5].constructionimg1Alt}
                    constructionimg2={People[5].constructionimg2}
                    constructionimg2Alt={People[5].constructionimg2Alt}
                    constructionimg3={People[5].constructionimg3}
                    constructionimg3Alt={People[5].constructionimg3Alt}

                    productionName={People[5].productionName}
                    productionStatement={People[5].productionStatement}
                    productionimg1={People[5].productionimg1}
                    productionimg1Alt={People[5].productionimg1Alt}
                    productionimg2={People[5].productionimg2}
                    productionimg2Alt={People[5].productionimg2Alt}
                    productionimg3={People[5].productionimg3}
                    productionimg3Alt={People[5].productionimg3Alt}
                    productionimg4={People[5].productionimg4}
                    productionimg4Alt={People[5].productionimg4Alt}

                    finalStatement={People[5].finalStatement}
                    finalimg1={People[5].finalimg1}
                    finalimg1Alt={People[5].finalimg1Alt}
                    finalimg2={People[5].finalimg2}
                    finalimg2Alt={People[5].finalimg2Alt}
                    finalimg3={People[5].finalimg3}
                    finalimg3Alt={People[5].finalimg3Alt}
                    finalimg4={People[5].finalimg4}
                    finalimg4Alt={People[5].finalimg4Alt}
                    finalimg5={People[5].finalimg5}
                    finalimg5Alt={People[5].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Gwen;