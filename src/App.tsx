import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routers from './routes';
import GlobalStyle from './styles';
import 'react-toastify/dist/ReactToastify.css';

function App() {  
  return (
    <div className="App">
      <GlobalStyle/>
      <Routers/>        
      <ToastContainer />    
    </div>
  );
}

export default App;
