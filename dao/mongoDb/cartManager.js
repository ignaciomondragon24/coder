// dao/mongoDb/cartManager.js
const mongoose = require('mongoose');
const Cart = require('../models/cartModel');

class CartManager {
  async createCart() {
    const newCart = new Cart({ products: [] });
    await newCart.save();
    return newCart;
  }

  async getCartById(id) {
    return Cart.findById(id);
  }

  async addProductToCart(cartId, productId) {
    const cart = await this.getCartById(cartId);
    if (!cart) {
      return null;
    }
    const productIndex = cart.products.findIndex(product => product.product.equals(productId));
    if (productIndex === -1) {
      cart.products.push({ product: productId, quantity: 1 });
    } else {
      cart.products[productIndex].quantity += 1;
    }
    await cart.save();
    return cart;
  }

  async getAllCarts() {
    return Cart.find({});
  }
}

module.exports = CartManager;