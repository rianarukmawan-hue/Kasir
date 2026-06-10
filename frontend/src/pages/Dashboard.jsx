import React, { useState } from 'react'

function Dashboard() {
  const [cart, setCart] = useState([])
  const [barcode, setBarcode] = useState('')

  const handleAddToCart = (e) => {
    e.preventDefault()
    // Logic untuk menambah item ke keranjang
    console.log('Barcode scanned:', barcode)
    setBarcode('')
  }

  return (
    <div className="dashboard">
      <div className="container">
        <h1>🛒 Kasir - Dashboard</h1>
        
        <div className="grid grid-2">
          {/* Barcode Scanner Section */}
          <div className="card">
            <h2>Input Barang</h2>
            <form onSubmit={handleAddToCart}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="barcode">Scan Barcode atau Masukkan Kode Barang:</label>
                <input
                  type="text"
                  id="barcode"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                  placeholder="Masukkan barcode..."
                  autoFocus
                  style={{ width: '100%', marginTop: '0.5rem' }}
                />
              </div>
              <button type="submit" style={{ 
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                width: '100%'
              }}>
                Tambah ke Keranjang
              </button>
            </form>
          </div>

          {/* Cart Summary Section */}
          <div className="card">
            <h2>📋 Ringkasan Transaksi</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '1.1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Total Item:</span>
                <strong>{cart.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal:</span>
                <strong>Rp 0</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Diskon:</span>
                <strong>Rp 0</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Pajak (PPN 10%):</span>
                <strong>Rp 0</strong>
              </div>
              <hr style={{ margin: '1rem 0' }} />
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>
                <span>TOTAL:</span>
                <span>Rp 0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Items Table */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>Keranjang Belanja</h2>
          {cart.length === 0 ? (
            <p style={{ color: 'var(--gray)', textAlign: 'center', padding: '2rem' }}>
              Keranjang kosong. Scan barcode untuk menambah item.
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nama Barang</th>
                  <th>Harga</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Cart items akan ditampilkan di sini */}
              </tbody>
            </table>
          )}
        </div>

        {/* Checkout Section */}
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>💳 Metode Pembayaran</h3>
            <select style={{ width: '100%', marginBottom: '1rem' }}>
              <option>Tunai</option>
              <option>Kartu Debit</option>
              <option>Kartu Kredit</option>
              <option>Transfer Bank</option>
              <option>E-Wallet</option>
            </select>
            <input 
              type="number" 
              placeholder="Jumlah Pembayaran" 
              style={{ width: '100%' }}
            />
          </div>

          <div className="card">
            <h3>🧾 Kembalian</h3>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--success-color)',
              textAlign: 'center',
              padding: '2rem 0'
            }}>
              Rp 0
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          justifyContent: 'flex-end'
        }}>
          <button style={{ 
            backgroundColor: 'var(--warning-color)',
            color: 'white'
          }}>
            🔄 Reset Transaksi
          </button>
          <button style={{ 
            backgroundColor: 'var(--success-color)',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.75rem 2rem'
          }}>
            ✅ Selesai & Cetak
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard