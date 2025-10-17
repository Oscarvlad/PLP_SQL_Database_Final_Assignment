// routes/members.js
// CRUD operations for Member resource

const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// GET /api/members
router.get('/', async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// GET /api/members/:id
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

// POST /api/members
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const member = await Member.create({ name, email, phone });
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: 'Invalid member data or duplicate email' });
  }
});

// PUT /api/members/:id
router.put('/:id', async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    await member.update(req.body);
    res.json(member);
  } catch (error) {
    res.status(400).json({ error: 'Update failed – check data or email uniqueness' });
  }
});

// DELETE /api/members/:id
router.delete('/:id', async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    await member.destroy();
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete member' });
  }
});

module.exports = router;