import shoppingCart from './shoppingСart.js';

console.log(shoppingCart);
shoppingCart.addItem('QWE', 5, 10);
console.log(shoppingCart);
shoppingCart.addItem('ASD', 3, 2);
console.log(shoppingCart);
shoppingCart.addItem('ASD', 3, 2);
console.log(shoppingCart);
shoppingCart.removeItem('ASD');
console.log(shoppingCart);
shoppingCart.applyDiscount('HEXLET');
console.log(shoppingCart);
shoppingCart.updateQuantity('QWE', 5);
console.log(shoppingCart);
console.log(`calculateTotal:${shoppingCart.calculateTotal()}`);
shoppingCart.clearCart();
console.log(shoppingCart);
