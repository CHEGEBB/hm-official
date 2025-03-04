const express = require('express');
const cors = require('cors');
const { Client, Account, Databases, Query } = require('node-appwrite');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Appwrite Client
const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const account = new Account(client);
const databases = new Databases(client);

// Database and Collection IDs
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const BLOGS_COLLECTION_ID = process.env.APPWRITE_BLOGS_COLLECTION_ID;
const USERS_COLLECTION_ID = process.env.APPWRITE_USERS_COLLECTION_ID;

// Authentication Routes
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Get users with the provided email (should be unique)
        const users = await databases.listDocuments(
            DATABASE_ID,
            USERS_COLLECTION_ID,
            [Query.equal('email', email), Query.limit(1)]
        );
        
        if (users.documents.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const user = users.documents[0];
        
        // Verify password (in a real app, use proper password hashing)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Check if user is staff
        if (!user.isStaff) {
            return res.status(403).json({ message: 'Not authorized as staff' });
        }
        
        // Instead of using account.createJWT(), create a simple token
        // In a production app, you should use a proper JWT library
        const token = Buffer.from(`${user.$id}:${Date.now()}`).toString('base64');
        
        res.json({ 
            userId: user.$id,
            name: user.name,
            email: user.email,
            token: token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Blog Routes
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await databases.listDocuments(
            DATABASE_ID,
            BLOGS_COLLECTION_ID
        );
        
        res.json(blogs.documents);
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.get('/api/blogs/:id', async (req, res) => {
    try {
        const blog = await databases.getDocument(
            DATABASE_ID,
            BLOGS_COLLECTION_ID,
            req.params.id
        );
        
        res.json(blog);
    } catch (error) {
        console.error('Get blog error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.post('/api/blogs', async (req, res) => {
    try {
        // Verify the token (this would be middleware in a real app)
        // For simplicity, we're skipping token verification here
        
        const { title, excerpt, content, author, date, readTime, category, tags, imageUrl } = req.body;
        
        const blog = await databases.createDocument(
            DATABASE_ID,
            BLOGS_COLLECTION_ID,
            'unique()',
            {
                title,
                excerpt,
                content,
                author,
                date,
                readTime,
                category,
                tags,
                imageUrl
            }
        );
        
        res.status(201).json(blog);
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.put('/api/blogs/:id', async (req, res) => {
    try {
        const { title, excerpt, content, author, date, readTime, category, tags, imageUrl } = req.body;
        
        const blog = await databases.updateDocument(
            DATABASE_ID,
            BLOGS_COLLECTION_ID,
            req.params.id,
            {
                title,
                excerpt,
                content,
                author,
                date,
                readTime,
                category,
                tags,
                imageUrl
            }
        );
        
        res.json(blog);
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.delete('/api/blogs/:id', async (req, res) => {
    try {
        await databases.deleteDocument(
            DATABASE_ID,
            BLOGS_COLLECTION_ID,
            req.params.id
        );
        
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// User registration route (admin only)
app.post('/api/admin/register-staff', async (req, res) => {
    try {
        // In a real app, you'd validate the requester is an admin
        const { name, email, password } = req.body;
        
        const user = await databases.createDocument(
            DATABASE_ID,
            USERS_COLLECTION_ID,
            'unique()',
            {
                name,
                email,
                password, // In a real app, hash this password
                isStaff: true
            }
        );
        
        res.status(201).json({ 
            userId: user.$id,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        console.error('Register staff error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});