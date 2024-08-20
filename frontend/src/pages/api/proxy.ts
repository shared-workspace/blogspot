// pages/api/proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET': {
            const { url } = req.query;
            if (typeof url !== 'string') {
                return res.status(400).json({ error: 'Invalid URL' });
            }
            try {
                const response = await axios.get(url, {
                    params: {
                        key: process.env.BLOGGER_API_KEY,
                    },
                    // headers: {
                    //     ...(req.headers['if-none-match'] ? { 'if-none-match': req.headers['if-none-match'] } : {}),
                    // }
                });
                // console.log('Request if-none-match:', req.headers['if-none-match']);
                // console.log('Response status:', response.status);
                // console.log('Response headers:', response.headers);
                res.status(response.status).json(response.data);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch data' });
            }
            break;
        }
        case 'POST': {
            const { url, ...data } = req.body;
            if (typeof url !== 'string') {
                return res.status(400).json({ error: 'Invalid URL' });
            }
            try {
                const response = await axios.post(url, data, {
                    params: {
                        key: process.env.BLOGGER_API_KEY,
                    },
                });
                res.status(response.status).json(response.data);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch data' });
            }
            break;
        }
        case 'PUT': {
            const { url, ...data } = req.body;
            if (typeof url !== 'string') {
                return res.status(400).json({ error: 'Invalid URL' });
            }
            try {
                const response = await axios.put(url, data, {
                    params: {
                        key: process.env.BLOGGER_API_KEY,
                    },
                });
                res.status(response.status).json(response.data);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch data' });
            }
            break;
        }
        case 'DELETE': {
            const { url } = req.query;
            if (typeof url !== 'string') {
                return res.status(400).json({ error: 'Invalid URL' });
            }
            try {
                const response = await axios.delete(url, {
                    params: {
                        key: process.env.BLOGGER_API_KEY,
                    },
                });
                res.status(response.status).json(response.data);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch data' });
            }
            break;
        }
        default: {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    }
}