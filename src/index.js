import React from 'react';
import ReactDOM  from 'react-dom';
import App from "./components/App";
import { StateProvider } from './components/StateProvider/StateProvider';
import { initialState } from './Reducer';
import reducer from './Reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}><App /></StateProvider>
    
  </React.StrictMode>
);