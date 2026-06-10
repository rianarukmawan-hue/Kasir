# 📦 Panduan Instalasi Aplikasi Kasir

## Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js v16.x** atau lebih tinggi ([Download](https://nodejs.org))
- **PostgreSQL v12** atau lebih tinggi ([Download](https://postgresql.org))
- **Git** ([Download](https://git-scm.com))

## 📝 Langkah-Langkah Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/rianarukmawan-hue/Kasir.git
cd Kasir
```

### 2. Setup Database

#### Windows (CMD):
```bash
# Login ke PostgreSQL
psql -U postgres

# Di dalam PostgreSQL console:
CREATE DATABASE kasir_db;
\q
```

#### macOS/Linux:
```bash
# Login ke PostgreSQL
sudo -u postgres psql

# Di dalam PostgreSQL console:
CREATE DATABASE kasir_db;
\q
```

### 3. Setup Backend

```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env dengan data database Anda
# Buka file .env dan sesuaikan:
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=kasir_db
# DB_USER=postgres
# DB_PASSWORD=your_password

# Install dependencies
npm install

# Jalankan migrasi database
npm run db:migrate

# (Optional) Seed database dengan data contoh
npm run db:seed

# Jalankan server
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### 4. Setup Frontend

Buka terminal baru dan jalankan:

```bash
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## 🌐 Akses Aplikasi

Buka browser Anda dan akses:
- **Frontend**: http://localhost:5173
- **API**: http://localhost:5000/api

## 📚 Struktur Database

Database akan otomatis dibuat dengan tabel-tabel berikut:
- `users` - Data pengguna/kasir
- `categories` - Kategori produk
- `products` - Data produk
- `transactions` - Riwayat transaksi
- `transaction_items` - Detail item transaksi
- `stock_logs` - Log perubahan stok
- `settings` - Pengaturan sistem

## 🔐 Konfigurasi JWT

Edit file `backend/.env` dan ubah `JWT_SECRET` dengan secret yang aman:

```
JWT_SECRET=your_very_secure_secret_key_here_make_it_long
```

## 🗄️ Manage Database

### Membuat Migrasi Baru:
```bash
cd backend
npm install -g sequelize-cli
sequelize-cli migration:generate --name migration_name
```

### Undo Migrasi:
```bash
npm run db:migrate:undo
```

### Reset Database (Hapus semua data):
```bash
npm run db:reset
```

## 🚀 Production Build

### Frontend:
```bash
cd frontend
npm run build
# Output akan ada di folder 'dist'
```

### Backend:
Gunakan production process manager seperti `pm2`:

```bash
npm install -g pm2
cd backend
pm2 start src/server.js --name "kasir-api"
```

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Error: Database connection failed
- Pastikan PostgreSQL sudah running
- Cek konfigurasi .env sudah benar
- Pastikan database kasir_db sudah dibuat

### Port 5000 sudah terpakai
Edit `.env` dan ubah PORT:
```
PORT=5001
```

### Port 5173 sudah terpakai
Edit `frontend/vite.config.js`:
```javascript
server: {
  port: 5174,  // ubah ke port lain
}
```

## 📖 Dokumentasi API

Dokumentasi lengkap API akan tersedia di:
`http://localhost:5000/api/docs`

## 💡 Tips

1. Gunakan tool seperti **Postman** atau **Insomnia** untuk test API
2. Aktifkan **CORS** untuk development di browser
3. Jangan expose `JWT_SECRET` di repository
4. Gunakan `.gitignore` untuk file `.env`

## 🤝 Kontribusi

Silakan buat Pull Request untuk improvement!

## 📞 Support

Jika ada masalah, buka issue di repository atau hubungi developer.

---

**Happy Coding! 🎉**