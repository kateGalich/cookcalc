import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>How much to cook</h1>

        <div>
          <div>
            <label for='part1'>Flour</label>
            <input type="number" id="part1"></input>
          </div>
          <div>
            <label for='part2'>Milk</label>
            <input type='number' id='part2'></input>
          </div>
          <div>
            <label for='part3'>Milk</label>
            <input type='number' id='part3'></input>
          </div>
          <div>
            <label for='part4'>Persons</label>
            <input type='range' min='1' max='10' step="1" value="2" id='part4'></input>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
