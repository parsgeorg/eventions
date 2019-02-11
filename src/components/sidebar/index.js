import React from 'react';
//import Categories from 'components/categories';
import BasketCart from '../basketCart';
//import Search from 'components/search';
import NewProduct from '../newProduct';

const Sidebar = () => {
  return (
    <React.Fragment>
      <BasketCart />
      {/* <Categories />
      <Search /> */}
      <NewProduct />
    </React.Fragment>
  );
};

export default Sidebar;
