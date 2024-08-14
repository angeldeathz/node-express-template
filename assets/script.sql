DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS business;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    enabled BOOLEAN NOT NULL
);

CREATE TABLE business (
    id SERIAL PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    enabled BOOLEAN NOT NULL
);

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    email VARCHAR(50) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    invoice_number VARCHAR(100) NOT NULL,
    url_invoice VARCHAR(255) NOT NULL,
    business_id INTEGER NOT NULL,
    FOREIGN KEY (business_id) REFERENCES business(id)
);