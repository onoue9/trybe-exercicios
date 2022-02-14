const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

/* const listProducts = products.map((item, index) => {  
  return {
    [item]: prices.map((value) => prices[index])
  };
});

console.log(listProducts); */

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);