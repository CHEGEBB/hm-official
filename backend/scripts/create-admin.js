// scripts/create-admin.js
const { Client, Databases } = require('node-appwrite');
require('dotenv').config();

// Appwrite Client
const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

// Database and Collection ID
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const USERS_COLLECTION_ID = process.env.APPWRITE_USERS_COLLECTION_ID;

// Admin user details - change these
const adminName = 'Admin User';
const adminEmail = 'admin@healthmaster.com';
const adminPassword = 'securepassword123'; // In a real app, use a secure password

const createAdmin = async () => {
  try {
    console.log('Creating admin user...');
    
    const user = await databases.createDocument(
      DATABASE_ID,
      USERS_COLLECTION_ID,
      'unique()',
      {
        name: adminName,
        email: adminEmail,
        password: adminPassword, // In a real app, hash this password
        isStaff: true
      }
    );
    
    console.log('Admin user created successfully:', user.$id);
  } catch (error) {
    console.error('Failed to create admin user:', error);
  }
};

createAdmin();