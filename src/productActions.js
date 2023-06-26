//Reference https://daveceddia.com/where-fetch-data-redux/

// be careful, not hit the same type name of actions.js.
// because now the products and count sharing the same
// root reducers store.


export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

// TODO: add /products GET URL into project.
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    /// be careful of json file below, the format and '/n', empty
    // spaces can cause a lot of issues to cause res.json() failed.
    // "https://jsonplaceholder.typicode.com/todos"
    // `/products/products.json`, update down there json to json.product line 48, 49
    return fetch("https://jsonplaceholder.typicode.com/todos"
            ,{
              headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
              },
              // credentials: 'omit'
              // credentials: 'include'     // for CORS
              credentials: 'same-origin'
            })
      .then(res => {
        return res.json()
      })
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(
        error => {
          console.log("hhhhhhhh "  + error);
          dispatch(fetchProductsFailure(error))
        }
      );
  };
}

function getProducts() {
  return fetch("/products")
    .then(handleErrors)
    .then(res => res.json());
}

function fakeGetProducts() {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          products: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      3000
    );
  });
}
/*
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fakeGetProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch(error =>
        dispatch(fetchProductsFailure(error))
      );
  };
}
*/
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}