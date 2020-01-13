import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe/Recipe";

const App = () => {

  const APP_ID = "fb4ec11a";
  const APP_KEY = "5a7108ff08b3fda1564a2fe88cf0e116";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();    
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
     
      {recipes.map(rec => (
        // console.log(rec.recipe.label)
        <Recipe
        key={rec.recipe.label}
        title={rec.recipe.label}
        image={rec.recipe.image}
        calories={rec.recipe.calories}
        ingredientLines = {rec.recipe.ingredientLines}
        />
      ))}

    </div>
  );
}

export default App;
