import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { autoLogin } from './actions/auth';
import Logout from './components/Logout/Logout';
import Auth from './containers/Auth/Auth';
import Basket from './containers/basket';
import DeleteEvention from './containers/deleteEvention';
import EditProduct from './containers/editProduct';
import Product from './containers/product';
import Products from './containers/products';
import Layout from './hoc/Layout/Layout';
import './index.css';

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/categories/:id" component={Products} />
        <Route path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/logout" component={Logout} />
          <Route path="/categories/:id" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/delete/:id" component={DeleteEvention} />
          <Route path="/basket" component={Basket} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <Layout>
        {routes}
        <hr />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
