// models/Book.js
// Represents a book in the library
// Maps to the 'Books' table defined in library_schema.sql

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Books',
  timestamps: false // No createdAt/updatedAt
});

module.exports = Book;