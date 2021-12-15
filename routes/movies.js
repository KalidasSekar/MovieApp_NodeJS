import express from "express";
import {
    getAllMovies,
    getMoviesById,
    createMovies,
    deleteMoviesById,
    editMoviesById
} from "../helper.js";

const router = express.Router();


router.get("/", async (request, response) => {
    // const client = await createConnection();
    const movies = await getAllMovies();
    response.send(movies);
});

router.get("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection();
    const movie = await getMoviesById(id);
    const notFound = { message: "No Matches Found" }
    movie ? response.send(movie) : response.status(400).send(notFound);
});

router.post("/", async (request, response) => {
    const data = request.body;
    // const client = await createConnection();
    const result = await createMovies(data);

    response.send(result);
});

router.delete("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection();
    const result = await deleteMoviesById(id);

    response.send(result);
});

router.put("/:id", async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    // const client = await createConnection();
    const result = await editMoviesById(id, data);

    response.send(result);
});

export const moviesRouter = router;