import React, { useEffect, useState } from 'react';
import Recipe from './repcipeTemplate';
import './App.css';

const App = () => {

  const AppId = "04c465cc";
  const AppKey = "1c83f9971e2e618fcb3f6e45d56e737c";

  const [resipes, setRecipe] = useState([]);

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`);
    const data = await response.json();
    setRecipe(data.hits);
  }

  return (
    <div className="App">
      <form className="serch">
        <input className="serchImput"></input>
        <button className="serchButton" type="submit">Serch</button>
      </form>
      {resipes.map(resipe => (
        <Recipe key={resipe.recipe.label} tittle={resipe.recipe.label} calaries={resipe.recipe.calories} image={resipe.recipe.image} ingredients={resipe.recipe.ingredientLines} />
      ))}
    </div>
  )

}

export default App;
