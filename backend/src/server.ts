import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.get('/api/query', async (req: Request, res: Response) => {
    const queryParam = req.query.q as string;
    const url = `http://api.duckduckgo.com/?q=${queryParam}&format=json`;

    http.get(url, (apiResponse) => {
        if (apiResponse.statusCode !== 200) {
            res.status(apiResponse.statusCode || 500).json({ error: `Failed to fetch stream from API: ${apiResponse.statusMessage}` });
            apiResponse.resume();
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        apiResponse.pipe(res);
    }).on('error', (error) => {
        console.error('Error fetching stream:', error);
        res.status(500).json({ error: 'Failed to fetch stream from API' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
