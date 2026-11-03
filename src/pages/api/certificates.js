import { getContent } from '@/lib/content';
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    return res.status(200).json(await getContent('certificate'));
  } catch {
    return res.status(503).json({ error: 'Content database unavailable' });
  }
}
