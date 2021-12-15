import { client } from "./index.js";

async function getAllMovies() {
    return await client
        .db("firstdb")
        .collection("movies")
        .find({}).toArray();
}
async function getMoviesById(id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .findOne({ id: id });
}
async function createMovies(data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .insertMany(data);
}
async function deleteMoviesById(id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .deleteOne({ id: id });
}
async function editMoviesById(id, data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}

export {
    getAllMovies,
    getMoviesById,
    createMovies,
    deleteMoviesById,
    editMoviesById
};
