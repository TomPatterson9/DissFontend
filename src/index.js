import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FilmList from './film-list.component'


ReactDOM.render(
  <React.StrictMode>
    <div><App /> <FilmList /></div>
  </React.StrictMode>,
  document.getElementById('root')
);


