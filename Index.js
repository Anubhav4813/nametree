const express = require('express');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});

app.post('/generate', (req, res) => {
    const name = req.body.name?.trim();

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const python = spawn('python', ['name_generator.py', name]);

    let output = '';
    let errorOutput = '';

    python.stdout.on('data', (data) => {
        output += data.toString();
    });

    python.stderr.on('data', (data) => {
        errorOutput += data.toString();
    });

    python.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({
                error: errorOutput || 'Failed to generate username',
            });
        }

        const usernames = output
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean);

        res.json({ usernames });
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});