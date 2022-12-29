let purchase, price;
purchase = prompt(`What is the amount of your purchase?`);
if (purchase >= 100 && purchase < 200) {
  price = purchase * 0.97
} else if (purchase >= 200 && purchase < 500) {
  price = purchase * 0.95
} else if (purchase >= 500) {
  price = purchase * 0.93
} else {
  price = purchase
}
alert(`your price will be ${price}`)