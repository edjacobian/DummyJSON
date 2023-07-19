const productBox = document.querySelector('#product-box')
const dummyJSON = `https://dummyjson.com/products`;
const singleProduct = document.querySelector('#single-product');

// See list of all products
const allProducts = async () => {
  try {
    const response = await fetch(dummyJSON);
    const data = await response.json();
    console.log(`Data:`, data);
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};


const init = async () => {
  try {
    const products = await allProducts();
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
};

const renderProducts = (products) => {
  productList.innerHTML = '';
  if (Array.isArray(products)) {
    products.forEach((product) => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${product.id} - Name: ${product.name}`;
      productList.appendChild(listItem);
    });
  } else {
    console.log(`no product info, sorry!`)
  }
};



// See single product in special view




// Filter products with simple 'text matcher'





// "Create" new product and see success message
  // Display info recieved back from API

// "Delete" any product and see that it was successful
  // Display info received back from API


  const productList = document.querySelector('#product-list');

  
  init();