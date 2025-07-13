// File: backend/index.js
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');

const app = express();
app.use(cors());

// Mengambil data education dari database
app.get('/api/education', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

// Mengambil data skills dari database
app.get('/api/skills', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
});

// Mengambil data projects dari database
app.get('/api/projects', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
});

// Agar Vercel bisa jalanin server ini
module.exports = app;
// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});