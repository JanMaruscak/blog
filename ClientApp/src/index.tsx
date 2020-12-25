import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import "./styles/index.css"
import Latest from "./pages/Latest";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Latest}/>
              <Route exact path="/latest" component={Latest}/>
              <Route exact path="/browse" component={Browse}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
