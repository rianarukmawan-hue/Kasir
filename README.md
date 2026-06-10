# Aplikasi Kasir - Alfamart Style

Aplikasi kasir modern untuk toko retail dengan fitur lengkap manajemen penjualan, stok, dan laporan.

## 🎯 Fitur Utama

- ✅ Dashboard Kasir dengan input barang cepat
- ✅ Manajemen Produk (Tambah, Edit, Hapus)
- ✅ Keranjang Belanja dengan perhitungan otomatis
- ✅ Proses Checkout (Diskon, Pajak, Kembalian)
- ✅ Laporan Penjualan Harian/Bulanan
- ✅ Manajemen Stok Real-time
- ✅ Barcode Scanner Integration
- ✅ Multiple Payment Methods
- ✅ User Management & Login

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Axios** - HTTP Client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **PostgreSQL** - Database
- **Sequelize** - ORM
- **JWT** - Authentication
- **Dotenv** - Environment Variables

## 📁 Project Structure

```
Kasir/
├── frontend/                 # React Application
│   ├── src/
│   │   ├── components/       # Reusable Components
│   │   ├── pages/            # Page Components
│   │   ├── services/         # API Services
│   │   ├── hooks/            # Custom Hooks
│   │   ├── context/          # Context API
│   │   ├── styles/           # Global Styles
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── routes/           # API Routes
│   │   ├── controllers/      # Business Logic
│   │   ├── models/           # Database Models
│   │   ├── middleware/       # Auth & Validation
│   │   ├── config/           # Configuration
│   │   └── server.js
│   ├── migrations/           # Database Migrations
│   ├── seeders/              # Database Seeders
│   ├── .env.example
│   └── package.json
│
├── database/
│   ├── schema.sql            # Database Schema
│   └── migrations/
│
└── docs/                     # Documentation
    ├── API.md
    └── INSTALLATION.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- PostgreSQL v12+
- npm atau yarn

### Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm start
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Backend akan berjalan di `http://localhost:5000`
Frontend akan berjalan di `http://localhost:5173`

## 📋 Database Schema

### Tables
- `users` - Data pengguna (kasir, admin)
- `products` - Data produk/barang
- `categories` - Kategori produk
- `transactions` - Data transaksi penjualan
- `transaction_items` - Detail item dalam transaksi
- `stock_log` - Riwayat perubahan stok
- `settings` - Konfigurasi sistem

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/register` - Register

### Products
- `GET /api/products` - Dapatkan semua produk
- `GET /api/products/:id` - Dapatkan detail produk
- `POST /api/products` - Tambah produk
- `PUT /api/products/:id` - Update produk
- `DELETE /api/products/:id` - Hapus produk

### Transactions
- `POST /api/transactions` - Buat transaksi
- `GET /api/transactions` - Dapatkan semua transaksi
- `GET /api/transactions/:id` - Detail transaksi

### Reports
- `GET /api/reports/daily` - Laporan harian
- `GET /api/reports/monthly` - Laporan bulanan

## 👥 User Roles

1. **Admin** - Full access (manajemen produk, pengguna, laporan)
2. **Kasir** - Akses terbatas (transaksi, view produk)
3. **Manager** - Akses laporan dan stok

## 📝 License

MIT

## 👨‍💻 Author

Rianarukmawan-hue

---

**Status**: 🔧 Development in Progress