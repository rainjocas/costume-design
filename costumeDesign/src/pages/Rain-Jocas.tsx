import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";

const Rain: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name={People[9].name}
                    workName={People[9].workName}
                    workClothingimg={People[9].workClothingimg}
                    workClothingimgAlt={People[9].workClothingimgAlt}
                    workClothingPeiceList={People[9].workClothingPeiceList}
                    musicName={People[9].musicName}
                    musicStatement={People[9].musicStatement}
                    musicimg1={People[9].musicimg1}
                    musicimg1Alt={People[9].musicimg1Alt}
                    musicimg2={People[9].musicimg2}
                    musicimg2Alt={People[9].musicimg2Alt}
                    musicPeiceList={People[9].musicPeiceList}
                    constructionName={People[9].constructionName}
                    constructionStatement={People[9].constructionStatement}
                    constructionimg1={People[9].constructionimg1}
                    constructionimg1Alt={People[9].constructionimg1Alt}
                    constructionimg2={People[9].constructionimg2}
                    constructionimg2Alt={People[9].constructionimg2Alt}
                    constructionimg3={People[9].constructionimg3}
                    constructionimg3Alt={People[9].constructionimg3Alt}
                    finalStatement={People[9].finalStatement}
                    finalimg1={People[9].finalimg1}
                    finalimg1Alt={People[9].finalimg1Alt}
                    finalimg2={People[9].finalimg2}
                    finalimg2Alt={People[9].finalimg2Alt}
                    finalimg3={People[9].finalimg3}
                    finalimg3Alt={People[9].finalimg3Alt}
                    finalimg4={People[9].finalimg4}
                    finalimg4Alt={People[9].finalimg4Alt}
                    finalimg5={People[9].finalimg5}
                    finalimg5Alt={People[9].finalimg5Alt}
                />
            </main>
        </PageWrapper>
    );
  };
  
  export default Rain;