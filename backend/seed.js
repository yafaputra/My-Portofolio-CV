// File: backend/seed.js 
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });
const { sql } = require('@vercel/postgres'); 
const { educationHistory, skills, projects } = require('./data.js'); 

async function seed() { 
  try { 
    // Hapus tabel jika sudah ada (optional, untuk testing)
    await sql`DROP TABLE IF EXISTS education CASCADE;`;
    await sql`DROP TABLE IF EXISTS skills CASCADE;`;
    await sql`DROP TABLE IF EXISTS projects CASCADE;`;

    // Buat tabel education - sesuai dengan struktur data
    await sql`CREATE TABLE IF NOT EXISTS education (
      id SERIAL PRIMARY KEY, 
      institution VARCHAR(255), 
      major VARCHAR(255), 
      period VARCHAR(255)
    );`; 

    // Buat tabel skills - sesuai dengan struktur data lengkap
    await sql`CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,  
      name VARCHAR(255), 
      level INTEGER,
      category VARCHAR(255),
      icon TEXT,
      color VARCHAR(50)
    );`; 

    // Buat tabel projects - sesuai dengan struktur data lengkap
    await sql`CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY, 
      title VARCHAR(255), 
      image TEXT, 
      description TEXT, 
      tech TEXT[],
      link VARCHAR(255),
      category VARCHAR(255),
      status VARCHAR(255)
    );`; 

    console.log('Tabel berhasil dibuat.'); 

    // Insert data education
    await Promise.all(educationHistory.map(e => 
      sql`INSERT INTO education (institution, major, period) 
          VALUES (${e.institution}, ${e.major}, ${e.period});`
    )); 

    // Insert data skills - dengan semua field yang ada
    await Promise.all(skills.map(s => 
      sql`INSERT INTO skills (name, level, category, icon, color) 
          VALUES (${s.name}, ${s.level}, ${s.category}, ${s.icon}, ${s.color});`
    )); 

    // Insert data projects - dengan semua field yang ada
    await Promise.all(projects.map(p => 
      sql`INSERT INTO projects (title, image, description, tech, link, category, status) 
          VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link}, ${p.category}, ${p.status});`
    )); 

    console.log('Proses seeding data berhasil!'); 
    
    // Tampilkan jumlah data yang berhasil diinsert
    const educationCount = await sql`SELECT COUNT(*) FROM education;`;
    const skillsCount = await sql`SELECT COUNT(*) FROM skills;`;
    const projectsCount = await sql`SELECT COUNT(*) FROM projects;`;
    
    console.log(`Data berhasil diinsert:`);
    console.log(`- Education: ${educationCount.rows[0].count} records`);
    console.log(`- Skills: ${skillsCount.rows[0].count} records`);
    console.log(`- Projects: ${projectsCount.rows[0].count} records`);
    
  } catch (error) {  
    console.error('Error seeding:', error);  
    process.exit(1); 
  } 
}  

seed();