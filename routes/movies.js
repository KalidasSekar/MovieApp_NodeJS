import express from "express";

const router = express.Router();


app.get("/", async (request, response) => {
    // const client = await createConnection();
    const movies = await getAllMovies();
    response.send(movies);
});

app.get("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection();
    const movie = await getMoviesById(id);
    const notFound = { message: "No Matches Found" }
    movie ? response.send(movie) : response.status(400).send(notFound);
});

app.post("/", async (request, response) => {
    const data = request.body;
    // const client = await createConnection();
    const result = await createMovies(data);

    response.send(result);
});

app.delete("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection();
    const result = await deleteMoviesById(id);

    response.send(result);
});

app.put("/:id", async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    // const client = await createConnection();
    const result = await editMoviesById(id, data);

    response.send(result);
});

const moviesRouter = router;