import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App(props) {
  let [recipe, setRecipe] = useState(props);

  function setPartAmount(amount, index) {
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        parts: oldRecipe.parts.map(x => ({ ...x })),
      };
      newRecepi.parts[index].amount = amount;
      return newRecepi;
    });
  }

  function setPartName(name, index) {
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        parts: oldRecipe.parts.map(x => ({ ...x })),
      };
      newRecepi.parts[index].name = name;
      return newRecepi;
    });
  }

  function setPersons(value) {
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        parts: oldRecipe.parts.map(x => ({ ...x })),
        persons: value,
      };
      for (const part of newRecepi.parts) {
        part.amount = part.amount / oldRecipe.persons * newRecepi.persons;
      }
      return newRecepi;
    });
  }

  function addPart() {
    setRecipe(oldRecipe => {
      let newRecepi = {
        ...oldRecipe,
        parts: oldRecipe.parts.map(x => ({ ...x })),
      };
      newRecepi.parts.push({ name: "", amount: 0, unit: "g" });
      return newRecepi;
    });
  }

  let parts = recipe.parts.map((p, index) =>
    <Fragment key={index}>
      <input
        type='text'
        id='part1'
        value={p.name}
        onChange={e => setPartName(e.target.value, index)}>
      </input>
      <input
        type="number"
        id="part1"
        value={Math.round(p.amount*10)/10}
        onChange={e => setPartAmount(e.target.value, index)}>
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
        <button
          onClick={e => addPart()}>
          Add new
        </button>
      </header >
    </div >
  );
}

export default App;
