import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";
import Footer from "../page-sections/Footer";

const Martina: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name = {People[6].name}
                    
                    workName={People[6].workName}
                    workClothingimg={People[6].workClothingimg}
                    workClothingimgAlt={People[6].workClothingimgAlt}
                    workClothingPeiceList={People[6].workClothingPeiceList}

                    musicName={People[6].musicName}
                    musicStatement={People[6].musicStatement}
                    musicimg1={People[6].musicimg1}
                    musicimg1Alt={People[6].musicimg1Alt}
                    musicimg2={People[6].musicimg2}
                    musicimg2Alt={People[6].musicimg2Alt}
                    musicPeiceList={People[6].musicPeiceList}

                    constructionName={People[6].constructionName}
                    constructionStatement={People[6].constructionStatement}
                    constructionimg1={People[6].constructionimg1}
                    constructionimg1Alt={People[6].constructionimg1Alt}
                    constructionimg2={People[6].constructionimg2}
                    constructionimg2Alt={People[6].constructionimg2Alt}
                    constructionimg3={People[6].constructionimg3}
                    constructionimg3Alt={People[6].constructionimg3Alt}

                    productionName={People[6].productionName}
                    productionStatement={People[6].productionStatement}
                    productionimg1={People[6].productionimg1}
                    productionimg1Alt={People[6].productionimg1Alt}
                    productionimg2={People[6].productionimg2}
                    productionimg2Alt={People[6].productionimg2Alt}
                    productionimg3={People[6].productionimg3}
                    productionimg3Alt={People[6].productionimg3Alt}
                    productionimg4={People[6].productionimg4}
                    productionimg4Alt={People[6].productionimg4Alt}

                    finalStatement={People[6].finalStatement}
                    finalimg1={People[6].finalimg1}
                    finalimg1Alt={People[6].finalimg1Alt}
                    finalimg2={People[6].finalimg2}
                    finalimg2Alt={People[6].finalimg2Alt}
                    finalimg3={People[6].finalimg3}
                    finalimg3Alt={People[6].finalimg3Alt}
                    finalimg4={People[6].finalimg4}
                    finalimg4Alt={People[6].finalimg4Alt}
                    finalimg5={People[6].finalimg5}
                    finalimg5Alt={People[6].finalimg5Alt}
                />
            </main>
            <Footer
                name={People[6].name}
                email={People[6].email}
                phone={People[6].phone}
                linkedIn={People[6].linkedIn}
            />
        </PageWrapper>
    );
  };
  
  export default Martina;