import React, { ReactElement } from "react";

/**
 * Person props:
 */
interface personProps {
    name: string,
    
    workName?: string,
    workClothingimg?: string,
    workClothingimgAlt?: string,
    workClothingPeiceList?: string,

    musicName?: string,
    musicStatement?: string | string[],
    musicimg1?: string,
    musicimg1Alt?: string,
    musicimg2?: string,
    musicimg2Alt?: string,
    musicPeiceList?: string,

    constructionName?: string,
    constructionStatement?: string | string[],
    constructionimg1?: string,
    constructionimg1Alt?: string,
    constructionimg2?: string,
    constructionimg2Alt?: string,
    constructionimg3?: string,
    constructionimg3Alt?: string,

    productionName?: string,
    productionStatement?: string | string[],
    productionimg1?: string | any,
    productionimg1Alt?: string,
    productionimg2?: string
    productionimg2Alt?: string,
    productionimg3?: string,
    productionimg3Alt?: string,
    productionimg4?: string,
    productionimg4Alt?: string

    finalStatement?: string | string[],
    finalimg1?: string,
    finalimg1Alt?: string,
    finalimg2?: string,
    finalimg2Alt?: string,
    finalimg3?: string,
    finalimg3Alt?: string,
    finalimg4?: string,
    finalimg4Alt?: string,
    finalimg5?: string,
    finalimg5Alt?: string,
}

/**
 * 
 */
const Person: React.FC<personProps> = ({ 
    name,
    
    workName, workClothingimg, workClothingimgAlt, workClothingPeiceList,
    
    musicName, musicStatement, musicimg1, musicimg1Alt, musicimg2,
    musicimg2Alt, musicPeiceList,
    
    constructionName, constructionStatement, constructionimg1, constructionimg1Alt,
    constructionimg2, constructionimg2Alt, constructionimg3, constructionimg3Alt,
    
    productionName, productionStatement, productionimg1, productionimg1Alt,
    productionimg2, productionimg2Alt, productionimg3, productionimg3Alt, productionimg4,
    productionimg4Alt,

    finalStatement, finalimg1, finalimg1Alt, finalimg2, finalimg2Alt, finalimg3,
    finalimg3Alt, finalimg4, finalimg4Alt, finalimg5, finalimg5Alt,
}) => {
    return (
        <div className="mx-20 my-10" role="region" aria-label={name}>
            <h1>{name}</h1>
            <h2>{workName}</h2>
                <h3>Costume Sketch & Piece List</h3>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/2 rounded-xl" src = {workClothingimg} alt = {workClothingimgAlt}/>
                        <img className = "w-1/2" src = {workClothingPeiceList} alt = {"Peice List"}/>
                    </div>
            <h2 className="pt-10">{musicName}</h2>
                <h3>Artist Statement</h3>
                    <p className="whitespace-pre-wrap">{musicStatement}</p>
                <h3>Costume Sketches</h3>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/2 rounded-l-xl" src = {musicimg1} alt = {musicimg1Alt}/>
                        <img className = "w-1/2 rounded-r-xl" src = {musicimg2} alt = {musicimg2Alt}/>
                    </div>
                <h3>Piece List</h3>
                    <img src = {musicPeiceList} alt = {"Peice List"}/>
            <h2 className="pt-10">{constructionName}</h2>
                <h3>Artist Statement</h3>
                    {constructionStatement}
                <h3>Costume Sketches</h3>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/3 rounded-l-xl" src = {constructionimg1} alt = {constructionimg1Alt}/>
                        <img className = "w-1/3" src = {constructionimg2} alt = {constructionimg2Alt}/>
                        <img className = "w-1/3 rounded-r-xl" src = {constructionimg3} alt = {constructionimg3Alt}/>
                    </div>
            <h2 className="pt-10">{productionName}</h2>
                <h3>Artist Statement</h3>
                    {productionStatement}
                <h3>Costume Sketches</h3>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/2 rounded-tl-xl" src = {productionimg1} alt = {productionimg1Alt}/>
                        <img className = "w-1/2 rounded-tr-xl" src = {productionimg2} alt = {productionimg2Alt}/>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/2 rounded-bl-xl" src = {productionimg3} alt = {productionimg3Alt}/>
                        <img className = "w-1/2 rounded-br-xl" src = {productionimg4} alt = {productionimg4Alt}/>
                    </div>
            <h2 className="pt-10">Midsummer Night's Dream</h2>
                <h3>Artist Statement</h3>
                    {finalStatement}
                <h3>Costume Sketches</h3>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/2 rounded-tl-xl" src = {finalimg1} alt = {finalimg1Alt}/>
                        <img className = "w-1/2 rounded-tr-xl" src = {finalimg2} alt = {finalimg2Alt}/>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <img className = "w-1/3 rounded-bl-xl" src = {finalimg3} alt = {finalimg3Alt}/>
                        <img className = "w-1/3" src = {finalimg4} alt = {finalimg4Alt}/>
                        <img className = "w-1/3 rounded-br-xl" src = {finalimg5} alt = {finalimg5Alt}/>
                    </div>
        </div>  
  );
};

export default Person;