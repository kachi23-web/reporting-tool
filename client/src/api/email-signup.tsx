import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    // Simulate a successful signup process
    return res.status(200).json({ message: 'User signed up successfully' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
