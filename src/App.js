import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Sergio',
  lastName: 'Garcia'
};
function Componente(props) {
  return (
    <div>
      Componente
      <p className="nombre">Nombre {props.nombre} </p>
      <p className="apellido">Apellidos {props.apellido}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Componente nombre="sergio" apellido={user.lastName}/>
        {formatName(user)}
      </header>
    </div>
  );
}

export default App;
