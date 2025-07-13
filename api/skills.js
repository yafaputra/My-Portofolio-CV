import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM skills;`;
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error mengambil skills:', error);
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
}
