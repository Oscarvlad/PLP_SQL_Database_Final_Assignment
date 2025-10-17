// routes/books.js
// CRUD operations for Book resource (RESTful design)

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET /api/books/:id
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

// POST /api/books
router.post('/', async (req, res) => {
  try {
    const { title, author, isbn, publishedYear } = req.body;
    const book = await Book.create({ title, author, isbn, publishedYear });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Invalid book data or duplicate ISBN' });
  }
});

// PUT /api/books/:id
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.update(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: 'Update failed – check data or uniqueness constraints' });
  }
});

// DELETE /api/books/:id
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

module.exports = router;