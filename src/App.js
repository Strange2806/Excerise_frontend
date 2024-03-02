import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import ExercisesList from "./components/Exercise_list";
import EditExercise from "./components/Edit_Excerise";
import CreateExercise from "./components/CreateExcerise";
import CreateUser from "./components/Create_User";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
          <Route exact path='/' component={ExercisesList}/>
          <Route path='/create' component={CreateExercise} />
          <Route path='/user' component={CreateUser} />
          <Route path='/user:id' component={EditExercise } />
          <Route exact path ="/edit/:id" component = {EditExercise}/>
      </div>
    </Router>
  );
}

export default App;