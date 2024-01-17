import React, { useState } from 'react';
import './App.css';

function App() {
 const [nama, setNama] = useState('');
 const [jenisKelamin, setJenisKelamin] = useState('');
 const [alamat, setAlamat] = useState('');

 const handleNamaChange = (event) => {
    setNama(event.target.value);
 };

 const handleJenisKelaminChange = (event) => {
    setJenisKelamin(event.target.value);
 };

 const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();

  setNama('');
  setJenisKelamin('');
  setAlamat('');
};

 return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="osis-box">Form Pendaftaran OSIS</div>
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={nama}
          onChange={handleNamaChange}
        />
        <select name="jenisKelamin" value={jenisKelamin} onChange={handleJenisKelaminChange}>
          <option value="">-- Pilih Jenis Kelamin --</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <textarea
          name="alamat"
          placeholder="Alamat"
          value={alamat}
          onChange={handleAlamatChange}
        ></textarea>
        <button type="submit">Daftar</button>
      </form>
    </div>
 );
}

export default App;
