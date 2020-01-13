import React from 'react';

const Recipe = ({title, image, calories, ingredientLines}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title} />
            {ingredientLines.map(gredint => (                
                <p>{gredint}</p>
            ))}
        </div>
    )
}

export default Recipe;