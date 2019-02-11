import axios from 'axios';
import { BASE_API } from '../config';
import categories from './mockCategories';

export const getToken = async objectAuth => {
  // const { body } = await request.post(
  //   `${BASE_API}login, {username: ${objectAuth.username}, password=${objectAuth.password}`
  // );
  // return body.data;
  await axios.post(`${BASE_API}/login`, objectAuth);
  console.log('saved successfully');
};

export const fetchProducts = async () => {
  //const { body } = await request.get(`${BASE_API}products`);
  //return body.data;
  const body = await axios.get(
    'https://eventions-b34bf.firebaseio.com/products.json',
  );

  return body.data;
};

export const loadMoreProducts = async ({ offset }) => {
  // var database = firebase.database();
  // console.log(database);
  // const { body } = await request.get(`${BASE_API}products?id=${offset}`);
  // return body.data;
  const body = await axios.get(
    `https://eventions-b34bf.firebaseio.com/products.json?limitToLast=${offset}`,
  );
  return body.data;
};

export const fetchProductById = async id => {
  const body = await axios.get(
    `https://eventions-b34bf.firebaseio.com/products/${id}.json`,
  );
  return body.data;
  // const body = await axios.get(`${BASE_API}products/id?id=${id}`);
  // return body.data.data[0];
};

export const addNewProduct = async options => {
  const { name, price } = options;
  const image = '/uploads/one.jpg';

  const body = await axios.post(
    'https://eventions-b34bf.firebaseio.com/products.json',
    { name, price, image },
  );
  fetchProducts();

  return body.data;

  // const products = await axios.get(
  //   `${BASE_API}products/add?name=${name}&price=${price}&image=${image}`,
  // );
};

export const updateProduct = async options => {
  const image = '/uploads/one.jpg';
  const { id, name, price } = options;

  await axios.put(
    `https://eventions-b34bf.firebaseio.com/products/${id}.json`,
    { image, name, price },
  );

  // const products = await request.get(
  //   `${BASE_API}products/edit?id=${id}&name=${name}&price=${price}&image=${image}`,
  // );

  // return products.ok;
};

export const deleteEvention = async id => {
  await axios.delete(
    `https://eventions-b34bf.firebaseio.com/products/${id}.json`,
  );
  fetchProducts();

  // await fetch(`${BASE_API}products/delete?id=${id}`)
  //   .then(fetchProducts())
  //   .catch(err => console.err(err));
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};
