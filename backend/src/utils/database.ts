import mongoose from "mongoose";

export default function connectDB() {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    const DATABASE_URL = process.env.DATABASE_URL;

    try {
        mongoose.connect(DATABASE_URL || '');
    } catch (error) {
        console.error('Initial DB connection error:', error);
        process.exit(1);
    }

    const dbConn = mongoose.connection

    dbConn.on('open', (_) => {
        console.log(`Database connected: ${DATABASE_URL}`)
    });
    
    dbConn.on('error', (err) => {
        console.log(`Database error: ${err}`)
    });
}