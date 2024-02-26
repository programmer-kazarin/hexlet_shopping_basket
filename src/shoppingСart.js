const shoppingCart = {
  items: [],
  total: 0,
  addItem(name, price, quantity) {
    let item = this.findItem(name);
    if (!item) {
      item = { name, price: 0, quantity: 0 };
      this.items.push(item);
    }
    this.total -= (item.price * item.quantity);
    item.price = price;
    item.quantity += quantity;
    this.total += (item.price * item.quantity);
  },
  removeItem(itemName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === itemName) {
        this.total -= (this.items[i].price * this.items[i].quantity);
        delete this.items[i];
      }
    }
  },
  updateQuantity(name, quantity) {
    const item = this.findItem(name);
    if (item) {
      this.total -= (item.price * item.quantity);
      item.quantity = quantity;
      this.total += (item.price * item.quantity);
    }
  },
  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      if (item) {
        total += (item.price * item.quantity);
      }
    }
    return total;
  },
  clearCart() {
    this.items = [];
    this.total = 0;
  },
  findItem(name) {
    for (const item of this.items) {
      if (item.name === name) {
        return item;
      }
    }
    return null;
  },
};

export default shoppingCart;
