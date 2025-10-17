# Library Management System – CRUD API

**Submitted for**: Database Systems Assignment – Question 2  
**Student Name**: [Your Full Name]  
**Student ID**: [Your ID]  
**Date**: October 17, 2025  

---

## 📌 Overview

This project implements a **RESTful CRUD API** for a **Library Management System** using **Node.js, Express, and MySQL**. It supports full Create, Read, Update, and Delete operations for two core entities:

- 📚 **Books** (title, author, ISBN, published year)  
- 👤 **Members** (name, email, phone)

The database schema is defined manually via SQL (`library_schema.sql`) to demonstrate relational design understanding.

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Database**: MySQL
- **ORM**: Sequelize (used for querying only — tables are created manually)
- **Environment**: `dotenv` for configuration
- **Dev Tool**: `nodemon` for auto-restart

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16+)
- MySQL Server (e.g., via XAMPP, MySQL Installer, or Docker)
- Git (optional, for cloning)

### Steps to Run

1. **Clone or download** this repository.
2. **Install dependencies**:
   ```bash
   npm install