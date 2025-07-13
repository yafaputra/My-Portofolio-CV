// File: backend/index.js
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!', timestamp: new Date().toISOString() });
});

// Endpoint untuk mengambil data education dari database
app.get('/api/education', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM education ORDER BY id DESC;`;
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching education data:', error);
    res.status(500).json({ error: 'Gagal mengambil data pendidikan', details: error.message });
  }
});

// Endpoint untuk mengambil data skills dari database
app.get('/api/skills', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM skills ORDER BY level DESC;`;
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching skills data:', error);
    res.status(500).json({ error: 'Gagal mengambil data skill', details: error.message });
  }
});

// Endpoint untuk mengambil data projects dari database
app.get('/api/projects', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM projects ORDER BY id DESC;`;
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching projects data:', error);
    res.status(500).json({ error: 'Gagal mengambil data proyek', details: error.message });
  }
});

// Endpoint untuk mengambil semua data sekaligus
app.get('/api/all', async (req, res) => {
  try {
    const [education, skills, projects] = await Promise.all([
      sql`SELECT * FROM education ORDER BY id DESC;`,
      sql`SELECT * FROM skills ORDER BY level DESC;`,
      sql`SELECT * FROM projects ORDER BY id DESC;`
    ]);
    
    res.status(200).json({
      education: education.rows,
      skills: skills.rows,
      projects: projects.rows
    });
  } catch (error) {
    console.error('Error fetching all data:', error);
    res.status(500).json({ error: 'Gagal mengambil semua data', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    // Test database connection
    await sql`SELECT 1`;
    
    // Check table existence
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('education', 'skills', 'projects');
    `;
    
    res.status(200).json({ 
      status: 'healthy', 
      database: 'connected',
      tables: tables.rows.map(row => row.table_name),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ 
      status: 'unhealthy', 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan', path: req.path });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({ error: 'Internal server error', details: error.message });
});

// Export untuk Vercel
module.exports = app;

// Untuk development local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
  });
}