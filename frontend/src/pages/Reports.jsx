import React, { useState } from 'react'

function Reports() {
  const [reportType, setReportType] = useState('daily')

  return (
    <div className="reports">
      <div className="container">
        <h1>📈 Laporan & Analitik</h1>

        {/* Report Type Selection */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2>Pilih Jenis Laporan</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setReportType('daily')}
              style={{
                backgroundColor: reportType === 'daily' ? 'var(--primary-color)' : 'var(--light)',
                color: reportType === 'daily' ? 'white' : 'var(--dark)'
              }}
            >
              📅 Harian
            </button>
            <button
              onClick={() => setReportType('weekly')}
              style={{
                backgroundColor: reportType === 'weekly' ? 'var(--primary-color)' : 'var(--light)',
                color: reportType === 'weekly' ? 'white' : 'var(--dark)'
              }}
            >
              📆 Mingguan
            </button>
            <button
              onClick={() => setReportType('monthly')}
              style={{
                backgroundColor: reportType === 'monthly' ? 'var(--primary-color)' : 'var(--light)',
                color: reportType === 'monthly' ? 'white' : 'var(--dark)'
              }}
            >
              📊 Bulanan
            </button>
            <button
              onClick={() => setReportType('custom')}
              style={{
                backgroundColor: reportType === 'custom' ? 'var(--primary-color)' : 'var(--light)',
                color: reportType === 'custom' ? 'white' : 'var(--dark)'
              }}
            >
              🔧 Custom
            </button>
          </div>
        </div>

        {/* Date Range Filter */}
        {reportType === 'custom' && (
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2>Rentang Tanggal</h2>
            <div className="grid grid-2">
              <div>
                <label htmlFor="start-date">Dari Tanggal</label>
                <input
                  type="date"
                  id="start-date"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                />
              </div>
              <div>
                <label htmlFor="end-date">Sampai Tanggal</label>
                <input
                  type="date"
                  id="end-date"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                />
              </div>
            </div>
            <button style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              marginTop: '1rem'
            }}>
              🔍 Tampilkan Laporan
            </button>
          </div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-4">
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)' }}>💰 Total Penjualan</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Rp 0</p>
            <small style={{ color: 'var(--gray)' }}>↑ 0% dari periode lalu</small>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--success-color)' }}>🛒 Total Transaksi</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>0</p>
            <small style={{ color: 'var(--gray)' }}>↑ 0% dari periode lalu</small>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--info-color)' }}>📊 Rata-rata Transaksi</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Rp 0</p>
            <small style={{ color: 'var(--gray)' }}>Per transaksi</small>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--warning-color)' }}>👤 Total Pelanggan</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>0</p>
            <small style={{ color: 'var(--gray)' }}>Pelanggan unik</small>
          </div>
        </div>

        {/* Top Products */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>🏆 Produk Terlaris</h2>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Nama Produk</th>
                <th>Jumlah Terjual</th>
                <th>Total Penjualan</th>
                <th>% dari Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', color: 'var(--gray)', padding: '2rem' }}>
                  Belum ada data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Methods */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>💳 Metode Pembayaran</h2>
          <table>
            <thead>
              <tr>
                <th>Metode Pembayaran</th>
                <th>Jumlah Transaksi</th>
                <th>Total Nominal</th>
                <th>% Penggunaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tunai</td>
                <td>0</td>
                <td>Rp 0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Kartu Debit</td>
                <td>0</td>
                <td>Rp 0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Kartu Kredit</td>
                <td>0</td>
                <td>Rp 0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>E-Wallet</td>
                <td>0</td>
                <td>Rp 0</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Export Options */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          justifyContent: 'flex-end'
        }}>
          <button style={{
            backgroundColor: 'var(--info-color)',
            color: 'white'
          }}>
            📥 Export PDF
          </button>
          <button style={{
            backgroundColor: 'var(--success-color)',
            color: 'white'
          }}>
            📊 Export Excel
          </button>
          <button style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white'
          }}>
            🖨️ Cetak
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reports