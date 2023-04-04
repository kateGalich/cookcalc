import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App(props) {
  let [recipe, setRecipe] = useState(props);

  function setPersons(value) {
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        parts: oldRecipe.parts.map(x => ({...x})),
        persons: value,
      };
      for (const part of newRecepi.parts) {
        part.amount = part.amount / oldRecipe.persons * newRecepi.persons;
      }
      return newRecepi;
    });
  }

  let parts = recipe.parts.map((p, index) =>
    <Fragment key={index}>
      <label htmlFor='part1'>{p.name}</label>
      <input type="number" id="part1" value={p.amount}>
      </input>
      <span> {p.unit}</span>
    </Fragment>);
  return (
    <div className="App">
      <header className="App-header">

        <h1>How much to cook</h1>
        <h2>{recipe.recipeName} for {recipe.persons}</h2>
        <div className='container'>
          {parts}
          <label htmlFor='part4'>Persons</label>
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
      </header >
    </div >
  );
}

export default App;
