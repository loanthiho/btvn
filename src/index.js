import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './component/App/App';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './component/Hook/FavoriteColor';
import Car from './component/Hook/Car'
import Car1 from './component/Hook/Car1';
import Vidu from './component/Hook/Vidu';
import Showimage from './component/Hook/Showimage';
import ActionButton from './component/Form/ActionButton';
import Score from './component/Form/Score';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Car></Car>
    <Car1></Car1>
    <Vidu></Vidu>
    <FavoriteColor></FavoriteColor>
    <Showimage></Showimage>
    
    <ActionButton></ActionButton> */}
    <Score></Score>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
