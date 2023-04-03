import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  let [recipe, setRecipe] = useState(props);

  function setPersons(value){
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        persons: value
      };
      return newRecepi;
    });
  }

  let parts = recipe.parts.map(p => <>
    <label for='part1'>{p.name}</label>
    <input type="number" id="part1" defaultValue={p.amount}></input>
    <span>{p.unit}</span>
  </>);
  return (
    <div className="App">
      <header className="App-header">

        <h1>How much to cook</h1>
        <h2>{recipe.recipeName} for {recipe.persons}</h2>
        <div class='container'>
          {parts}
          <label for='part4'>Persons</label>
          <input
            type='range'
            min={recipe.minPersons}
            max={recipe.maxPersons}
            step="1"
            title={recipe.persons}
            value={recipe.persons}
            onChange={e => setPersons(e.target.value)}
            id='part4'></input>

        </div>
      </header>
    </div>
  );
}

export default App;
