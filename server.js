import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// Define the application environment
const nodeEnv = process.env.NODE_ENV?.toLowerCase() || 'production';

// Define the port number the server will listen on
const port = process.env.PORT || 3000;

const fileName = fileURLToPath(import.meta.url);
const directoryName = path.dirname(fileName);

const app = express();

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(directoryName, 'src/views'));

// Serve static files from the public directory
app.use(express.static(path.join(directoryName, 'public')));

/**
 * Routes
 */

app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/organizations', (req, res) => {
    res.render('organizations', { title: 'Organizations' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

app.get('/categories', (req, res) => {
    res.render('categories', { title: 'Categories' });
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Environment: ${nodeEnv}`);
});