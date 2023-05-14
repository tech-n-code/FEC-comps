import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

const { Pool } = pg;

const app = express();

dotenv.config();
// const port = process.env.PORT || 3000;
const port = 3002

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10
});

app.use(express.json());

app.use(cors());


app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});