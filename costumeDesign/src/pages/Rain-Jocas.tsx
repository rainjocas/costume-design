import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";
import Person from "../components/Person";
import { People } from "../utils/PeopleInfo";
import Footer from "../page-sections/Footer";

const Rain: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-8">
                <Person 
                    name={People[9].name}

                    workName={People[0].workName}
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

                    productionName={People[9].productionName}
                    productionStatement={People[9].productionStatement}
                    productionimg1={People[9].productionimg1}
                    productionimg1Alt={People[9].productionimg1Alt}
                    productionimg2={People[9].productionimg2}
                    productionimg2Alt={People[9].productionimg2Alt}
                    productionimg3={People[9].productionimg3}
                    productionimg3Alt={People[9].productionimg3Alt}
                    productionimg4={People[9].productionimg4}
                    productionimg4Alt={People[9].productionimg4Alt}

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
            <Footer
                name={People[9].name}
                email={People[9].email}
                phone={People[9].phone}
                linkedIn={People[9].linkedIn}
            />
        </PageWrapper>
    );
  };
  
  export default Rain;