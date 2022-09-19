import React from 'react';
import './App.css';
import Routers from './routes';
import GlobalStyle from './styles';

function App() {  
  return (
    <div className="App">
      <GlobalStyle/>
      <Routers/>
    </div>
  );
}

export default App;
