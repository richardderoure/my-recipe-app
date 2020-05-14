import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import ViewRecipes from './components/ViewRecipes';
import ViewSingleRecipe from './components/ViewSingleRecipe';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import DeleteRecipe from './components/DeleteRecipe';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={withRouter(HomePage)} />
            <Route exact path='/recipes' component={withRouter(ViewRecipes)} />
            <Route exact path='/recipes/add' component={withRouter(AddRecipe)} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
