import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM projects;`;
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error mengambil projects:', error);
    res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
}
