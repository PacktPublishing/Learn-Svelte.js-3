//Multiline arrow function
const getPrice = (price, discount) => {
  let totalValue = price - price * (discount / 100);
  return totalValue;
};
console.log(getPrice(100, 10));
