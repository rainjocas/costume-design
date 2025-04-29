import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";
import Footer from "../page-sections/Footer";

const Zoe: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[12].name}
                    
                    workName={People[12].workName}
                    workClothingimg={People[12].workClothingimg}
                    workClothingimgAlt={People[12].workClothingimgAlt}
                    workClothingPeiceList={People[12].workClothingPeiceList}

                    musicName={People[12].musicName}
                    musicStatement={People[12].musicStatement}
                    musicimg1={People[12].musicimg1}
                    musicimg1Alt={People[12].musicimg1Alt}
                    musicimg2={People[12].musicimg2}
                    musicimg2Alt={People[12].musicimg2Alt}
                    musicPeiceList={People[12].musicPeiceList}

                    constructionName={People[12].constructionName}
                    constructionStatement={People[12].constructionStatement}
                    constructionimg1={People[12].constructionimg1}
                    constructionimg1Alt={People[12].constructionimg1Alt}
                    constructionimg2={People[12].constructionimg2}
                    constructionimg2Alt={People[12].constructionimg2Alt}
                    constructionimg3={People[12].constructionimg3}
                    constructionimg3Alt={People[12].constructionimg3Alt}

                    productionName={People[12].productionName}
                    productionStatement={People[12].productionStatement}
                    productionimg1={People[12].productionimg1}
                    productionimg1Alt={People[12].productionimg1Alt}
                    productionimg2={People[12].productionimg2}
                    productionimg2Alt={People[12].productionimg2Alt}
                    productionimg3={People[12].productionimg3}
                    productionimg3Alt={People[12].productionimg3Alt}
                    productionimg4={People[12].productionimg4}
                    productionimg4Alt={People[12].productionimg4Alt}

                    finalStatement={People[12].finalStatement}
                    finalimg1={People[12].finalimg1}
                    finalimg1Alt={People[12].finalimg1Alt}
                    finalimg2={People[12].finalimg2}
                    finalimg2Alt={People[12].finalimg2Alt}
                    finalimg3={People[12].finalimg3}
                    finalimg3Alt={People[12].finalimg3Alt}
                    finalimg4={People[12].finalimg4}
                    finalimg4Alt={People[12].finalimg4Alt}
                    finalimg5={People[12].finalimg5}
                    finalimg5Alt={People[12].finalimg5Alt}
                />
            </main>
            <Footer
                name={People[12].name}
                email={People[12].email}
                phone={People[12].phone}
                linkedIn={People[12].linkedIn}
            />
        </PageWrapper>
    );
  };
  
  export default Zoe;