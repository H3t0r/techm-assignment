import React from 'react';
import './App.scss';

import { AddStudentPage } from './components/AddStudentPage';
import { Header } from './components/Header';
import { StudentPage } from './components/StudentPage';
import { StudentsPage } from './components/StudentsPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/" component={StudentsPage} />
          <Route exact path="/add" component={AddStudentPage} />
          <Route exact path="/student" component={StudentPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
