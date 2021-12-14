// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 9000;

app.use(express.json());

// const MONGO_URL = 'mongodb+srv://kalidas_2021:12345@cluster0.8as6j.mongodb.net'; //Before
const MONGO_URL = process.env.MONGO_URL; //After



async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB Connected");
    return client;
}

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.get("/movies", async (request, response) => {
    const client = await createConnection();
    const movies = await client
        .db("firstdb")
        .collection("movies")
        .find({}).toArray();
    console.log(movies);
    response.send(movies);
});

app.get("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const client = await createConnection();
    const movie = await client
        .db("firstdb")
        .collection("movies")
        .findOne({ id: id });
    const notFound = { message: "No Matches Found" }
    movie ? response.send(movie) : response.status(400).send(notFound);
});

app.post("/movies", async (request, response) => {
    const data = request.body;
    const client = await createConnection();
    const result = await client
        .db("firstdb")
        .collection("movies")
        .insertMany(data);

    response.send(result);
});

app.delete("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const client = await createConnection();
    const result = await client
        .db("firstdb")
        .collection("movies")
        .deleteOne({ id: id });
    response.send(result);
});

app.put("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    const client = await createConnection();
    const result = await client
        .db("firstdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
    response.send(result);
});

app.listen(PORT, () => console.log("App is started on", PORT));