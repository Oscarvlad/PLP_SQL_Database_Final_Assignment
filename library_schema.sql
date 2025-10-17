-- Library Management System - Database Schema
-- Matches Sequelize models exactly
-- Run this in MySQL before starting the Node.js app

CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS Books;
DROP TABLE IF EXISTS Members;

-- Books table
CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    publishedYear INT NOT NULL
);

-- Members table
CREATE TABLE Members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL
);

-- Optional: Sample data
INSERT INTO Books (title, author, isbn, publishedYear) VALUES
('1984', 'George Orwell', '9780451524935', 1949),
('To Kill a Mockingbird', 'Harper Lee', '9780061120084', 1960);

INSERT INTO Members (name, email, phone) VALUES
('Alice Johnson', 'alice@example.com', '555-1234'),
('Bob Smith', 'bob@example.com', '555-5678');