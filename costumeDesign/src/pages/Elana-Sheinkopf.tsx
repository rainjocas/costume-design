import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Elana: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[3].name}

                    workName={People[3].workName}
                    workClothingimg={People[3].workClothingimg}
                    workClothingimgAlt={People[3].workClothingimgAlt}
                    workClothingPeiceList={People[3].workClothingPeiceList}

                    musicName={People[3].musicName}
                    musicStatement={People[3].musicStatement}
                    musicimg1={People[3].musicimg1}
                    musicimg1Alt={People[3].musicimg1Alt}
                    musicimg2={People[3].musicimg2}
                    musicimg2Alt={People[3].musicimg2Alt}
                    musicPeiceList={People[3].musicPeiceList}

                    constructionName={People[3].constructionName}
                    constructionStatement={People[3].constructionStatement}
                    constructionimg1={People[3].constructionimg1}
                    constructionimg1Alt={People[3].constructionimg1Alt}
                    constructionimg2={People[3].constructionimg2}
                    constructionimg2Alt={People[3].constructionimg2Alt}
                    constructionimg3={People[3].constructionimg3}
                    constructionimg3Alt={People[3].constructionimg3Alt}

                    productionName={People[3].productionName}
                    productionStatement={People[3].productionStatement}
                    productionimg1={People[3].productionimg1}
                    productionimg1Alt={People[3].productionimg1Alt}
                    productionimg2={People[3].productionimg2}
                    productionimg2Alt={People[3].productionimg2Alt}
                    productionimg3={People[3].productionimg3}
                    productionimg3Alt={People[3].productionimg3Alt}
                    productionimg4={People[3].productionimg4}
                    productionimg4Alt={People[3].productionimg4Alt}

                    finalStatement={People[3].finalStatement}
                    finalimg1={People[3].finalimg1}
                    finalimg1Alt={People[3].finalimg1Alt}
                    finalimg2={People[3].finalimg2}
                    finalimg2Alt={People[3].finalimg2Alt}
                    finalimg3={People[3].finalimg3}
                    finalimg3Alt={People[3].finalimg3Alt}
                    finalimg4={People[3].finalimg4}
                    finalimg4Alt={People[3].finalimg4Alt}
                    finalimg5={People[3].finalimg5}
                    finalimg5Alt={People[3].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Elana;