-- Database Schema untuk Aplikasi Kasir

-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  role VARCHAR(20) DEFAULT 'kasir',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  barcode VARCHAR(50) UNIQUE NOT NULL,
  category_id INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  cost_price DECIMAL(10, 2),
  stock INTEGER DEFAULT 0,
  min_stock INTEGER DEFAULT 0,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Transactions Table
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  transaction_number VARCHAR(50) UNIQUE NOT NULL,
  user_id INTEGER NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  discount DECIMAL(10, 2) DEFAULT 0,
  tax DECIMAL(10, 2) DEFAULT 0,
  final_price DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'completed',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Transaction Items Table
CREATE TABLE transaction_items (
  id SERIAL PRIMARY KEY,
  transaction_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (transaction_id) REFERENCES transactions(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Stock Log Table
CREATE TABLE stock_logs (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  quantity_change INTEGER NOT NULL,
  previous_quantity INTEGER NOT NULL,
  new_quantity INTEGER NOT NULL,
  reason VARCHAR(100) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Settings Table
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_products_barcode ON products(barcode);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_transactions_date ON transactions(created_at);
CREATE INDEX idx_transaction_items_transaction ON transaction_items(transaction_id);
CREATE INDEX idx_stock_logs_product ON stock_logs(product_id);

-- Default Data
INSERT INTO categories (name, description) VALUES
('Makanan', 'Produk makanan dan snack'),
('Minuman', 'Minuman dan beverages'),
('Elektronik', 'Produk elektronik'),
('Fashion', 'Pakaian dan aksesoris'),
('Kebersihan', 'Produk kebersihan dan perawatan'),
('Lainnya', 'Kategori lainnya');

INSERT INTO settings (key, value, description) VALUES
('store_name', 'Kasir Store', 'Nama toko'),
('tax_rate', '10', 'Persentase pajak'),
('currency', 'IDR', 'Mata uang'),
('receipt_footer', 'Terima kasih telah berbelanja', 'Pesan di footer nota');