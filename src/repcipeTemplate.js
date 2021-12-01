import React from 'react';
import style from "./recipe.module.css"

const repcipeTemplate = ({ tittle, calaries, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h3 className={style.name}>{tittle}</h3>
            <img src={image} alt="" className={style.img}></img>
            <p className={style.calaries}>{calaries}</p>
            <ul className={style.ingdiv}>
                {ingredients.map((ingredient, i) => (
                    <li><p key={i} className={style.imgrediants}>{ingredient}</p></li>
                ))}
            </ul>
        </div>
    );
}

export default repcipeTemplate;