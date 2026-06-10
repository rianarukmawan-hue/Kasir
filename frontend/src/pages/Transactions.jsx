import React, { useState } from 'react'

function Transactions() {
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState('all')

  return (
    <div className="transactions">
      <div className="container">
        <h1>📊 Riwayat Transaksi</h1>

        {/* Filter Section */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2>Filter Transaksi</h2>
          <div className="grid grid-3">
            <div>
              <label htmlFor="filter-date">Tanggal</label>
              <input
                type="date"
                id="filter-date"
                style={{ width: '100%', marginTop: '0.5rem' }}
              />
            </div>
            <div>
              <label htmlFor="filter-status">Status</label>
              <select
                id="filter-status"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <option value="all">Semua</option>
                <option value="completed">Selesai</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-search">Cari No. Transaksi</label>
              <input
                type="text"
                id="filter-search"
                placeholder="Masukkan nomor transaksi"
                style={{ width: '100%', marginTop: '0.5rem' }}
              />
            </div>
          </div>
          <button style={{ 
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            marginTop: '1rem'
          }}>
            🔍 Cari
          </button>
        </div>

        {/* Transactions Table */}
        <div className="card">
          <h2>Daftar Transaksi ({transactions.length})</h2>
          {transactions.length === 0 ? (
            <p style={{ color: 'var(--gray)', textAlign: 'center', padding: '2rem' }}>
              Belum ada transaksi.
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>No. Transaksi</th>
                  <th>Tanggal & Jam</th>
                  <th>Kasir</th>
                  <th>Total Item</th>
                  <th>Total Harga</th>
                  <th>Pembayaran</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Transactions akan ditampilkan di sini */}
              </tbody>
            </table>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-4" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)' }}>📈 Total Penjualan</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Rp 0</p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--success-color)' }}>✅ Transaksi Berhasil</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0</p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--warning-color)' }}>⏳ Pending</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0</p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--danger-color)' }}>❌ Dibatalkan</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions