import logo from './logo.svg';
import './App.css';

function App(props) {
   let parts = props.parts.map(p => <>
    <label for='part1'>{p.name}</label>
    <input type="number" id="part1" value={p.amount}></input>
  </>);
  return (
    <div className="App">
      <header className="App-header">

        <h1>How much to cook</h1>

        <div class='container'>
          {parts}
          <label for='part4'>Persons</label>
          <input type='range' min={props.minPersons} max={props.maxPersons} step="1" value={props.persons} id='part4'></input>

        </div>
      </header>
    </div>
  );
}

export default App;
