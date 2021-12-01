import React, { useEffect, useState } from 'react';
import Recipe from './repcipeTemplate';
import './App.css';

const App = () => {

  const AppId = "04c465cc";
  const AppKey = "1c83f9971e2e618fcb3f6e45d56e737c";

  const [resipes, setRecipe] = useState([]);
  const [serch, setSerch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`);
    const data = await response.json();
    setRecipe(data.hits);
  }

  const updateSerch = e => {
    setSerch(e.target.value);
  }

  const getSerch = e => {
    e.preventDefault();
    setQuery(serch);
  }

  return (
    <div className="App">
      <form className="serch" onSubmit={getSerch}>
        <input className="serchInput" value={serch} onChange={updateSerch}></input>
        <button className="serchButton" type="submit">Serch</button>
      </form>
      <div class="recipes">
        {resipes.map(resipe => (
          <Recipe key={resipe.recipe.label} tittle={resipe.recipe.label} calaries={resipe.recipe.calories} image={resipe.recipe.image} ingredients={resipe.recipe.ingredientLines} />
        ))}
      </div>
    </div>
  )

}

export default App;
