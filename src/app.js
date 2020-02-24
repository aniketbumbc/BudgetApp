import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpDashBoard = () => (
      <div>
            This is first route
   </div>
);

const EditExp = () => (
      <div>
            Edit page herer
      </div>
);

const CreateExp = () => {
      return (
            <h1> This is test </h1>
      )

}
const HelpExp = () => {
      return (
            <h1> This is Help here </h1>
      )

}
const NotFoundPage = () => {
      return (

            <div>
                  <h1> 404 !!!!! Not Found</h1>
                  <Link to="/">Go Home</Link>
            </div>
      )
}

const Header = () => {
      return (
            <header>
                  <h1>Expensify</h1>
                  <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
                  <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
                  <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br/>
                  <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </header>
      )

}
const routes = (
      <BrowserRouter>
            <div>
                  <Header />
                  <Switch>
                        <Route path="/" component={ExpDashBoard} exact={true} />
                        <Route path="/create" component={CreateExp} />
                        <Route path="/edit" component={EditExp} />
                        <Route path="/help" component={HelpExp} />
                        <Route component={NotFoundPage} exact={false} />
                  </Switch>
            </div>
      </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));

