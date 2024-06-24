const mongoose = require('mongoose');
const Product = require('../models/productModel');

class ProductManager {
  async getAllProducts() {
    try {
      return await Product.find({});
    } catch (error) {
      console.error('Error getting all products:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      console.error(`Error getting product by id ${id}:`, error);
      throw error;
    }
  }

  async addProduct(productData) {
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      console.error('Error adding new product:', error);
      throw error;
    }
  }

  async updateProduct(id, productData) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
      return updatedProduct;
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      await Product.findByIdAndDelete(id);
      return true;
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
      throw error;
    }
  }
}

module.exports = ProductManager;