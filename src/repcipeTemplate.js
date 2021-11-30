import React from 'react';

const repcipeTemplate = ({tittle , calaries , image , ingredients})=>{
    return(
        <div className="recipeTem">
            <h1 className="name">{tittle}</h1>
            <img src={image} alt="" className="img"></img>
            <p className="calories">{calaries}</p>
            {ingredients.map((ingredient,i)=>(
                <h3 key={i} className="ingreadients">{ingredient}</h3>
            ))}
        </div>
    );
}

export default repcipeTemplate;