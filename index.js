// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());

// const MONGO_URL = 'mongodb+srv://kalidas_2021:12345@cluster0.8as6j.mongodb.net'; //Before
const MONGO_URL = process.env.MONGO_URL; //After

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB Connected");
    return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.use("/movies", moviesRouter)

app.listen(PORT, () => console.log("App is started on", PORT));


