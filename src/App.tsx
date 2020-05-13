import { AddStudentPage } from './components/AddStudentPage';
import { Header } from './components/Header';
import { StoreProvider } from './store/store';
import { StudentPage } from './components/StudentPage';
import { StudentsPage } from './components/StudentsPage';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container">
          <StoreProvider>
            <Switch>
              <Route exact path="/" component={StudentsPage} />
              <Route exact path="/student" component={AddStudentPage} />
              <Route path="/student/:id" component={StudentPage} />
              <Route component={PageNotFound} />
            </Switch>
          </StoreProvider>
        </div>
      </div>
    </section>
  );
}

export default App;
