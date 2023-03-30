import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let appData = {
  recipeName: 'Cake',
  parts: [
    { name: "Milk", amount: 300, unit: "ml" },
    { name: "Sugar", amount: 400, unit: "g" },
    { name: "Flour", amount: 500, unit: "g" },
  ],
  persons: 2,
  maxPersons: 10,
  minPersons: 1
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      recipeName={appData.recipeName}
      parts={appData.parts}
      persons={appData.persons}
      minPersons={appData.minPersons}
      maxPersons={appData.maxPersons} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
