import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe/Recipe";

const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async() => {
    
    const response = await fetch(`http://209.97.171.59:8080/en/ads/`);
    const data = await response.json();    
    setRecipes(data);

    console.log(data);
  }

  return(
    <div className="App">
          
      {recipes.map(rec => (
        // console.log(rec.recipe.label)
        <Recipe
        key={rec._id}
        title={rec.title}
        body={rec.body}
        />
      ))}

    </div>
  );
}

export default App;
