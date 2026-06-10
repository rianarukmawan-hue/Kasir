import React, { useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    barcode: '',
    price: '',
    stock: '',
    category: ''
  })

  const handleAddProduct = (e) => {
    e.preventDefault()
    // Logic untuk menambah produk
    console.log('Produk ditambahkan:', formData)
    setFormData({ name: '', barcode: '', price: '', stock: '', category: '' })
    setShowForm(false)
  }

  return (
    <div className="products">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>📦 Manajemen Produk</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            style={{ 
              backgroundColor: 'var(--primary-color)',
              color: 'white'
            }}
          >
            ➕ Tambah Produk
          </button>
        </div>

        {showForm && (
          <div className="card">
            <h2>Tambah Produk Baru</h2>
            <form onSubmit={handleAddProduct}>
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label htmlFor="name">Nama Produk</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama produk"
                    required
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="barcode">Barcode</label>
                  <input
                    type="text"
                    id="barcode"
                    value={formData.barcode}
                    onChange={(e) => setFormData({ ...formData, barcode: e.target.value })}
                    placeholder="Masukkan barcode"
                    required
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="price">Harga (Rp)</label>
                  <input
                    type="number"
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                    required
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="stock">Stok</label>
                  <input
                    type="number"
                    id="stock"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="0"
                    required
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="category">Kategori</label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="fashion">Fashion</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <button type="submit" style={{ 
                  backgroundColor: 'var(--success-color)',
                  color: 'white'
                }}>
                  💾 Simpan
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{ 
                    backgroundColor: 'var(--gray)',
                    color: 'white'
                  }}
                >
                  ❌ Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="card">
          <h2>Daftar Produk ({products.length})</h2>
          {products.length === 0 ? (
            <p style={{ color: 'var(--gray)', textAlign: 'center', padding: '2rem' }}>
              Belum ada produk. Klik tombol "Tambah Produk" untuk memulai.
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Barcode</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Products akan ditampilkan di sini */}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products