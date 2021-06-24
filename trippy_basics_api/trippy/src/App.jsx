import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import hotel from './views/hotel';
import restaurant from './views/restaurant';

function App() {
  return (
      <BrowserRouter> 
          <div className="container">
              <nav> 
                  <ul>
                      <li><Link to="/hotel">Hotel</Link></li>
                      <li><Link to="/restaurant">Restaurant</Link></li>

                  </ul>
              </nav>

              <Switch>
                  <Route path="/hotel" component={hotel} />
                  <Route path="./restaurant" component={restaurant}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
