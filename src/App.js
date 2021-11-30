import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const AppId = "04c465cc";
  const AppKey = "1c83f9971e2e618fcb3f6e45d56e737c";

  const [resipe,setRecipe] = useState([]);

  useEffect( ()=>{
    getRecipies();
  },[]);

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
    </div>
  )

}

export default App;
