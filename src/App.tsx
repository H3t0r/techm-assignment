import { AddStudentPage } from './components/AddStudentPage';
import { Header } from './components/Header';
import { StoreProvider } from './store/store';
import { StudentPage } from './components/StudentPage';
import { StudentsPage } from './components/StudentsPage';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={StudentsPage} />
            <Route exact path="/student" component={AddStudentPage} />
            <Route exact path="/student/:id" component={StudentPage} />
          </Switch>
        </StoreProvider>
      </header>
    </div>
  );
}

export default App;
