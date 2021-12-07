// const express = require("express");
import express from "express";
const app = express();

const PORT = 9000;
const movies = [
    {
        "id": "1",
        "movie_name": "The Shawshank Redemption (1994)",
        "pic": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        "rating": 9.2,
        "discription": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "trailer": "https://www.youtube.com/embed/NmzuHjWmXOc",
        "language": "english"
    },
    {
        "id": "2",
        "movie_name": "The Godfather (1972)",
        "pic": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "rating": 9.1,
        "discription": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        "trailer": "https://www.youtube.com/embed/1x0GpEZnwa8",
        "language": "english"
    },
    {
        "id": "3",
        "movie_name": "The Dark Knight (2008)",
        "pic": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "rating": 9.1,
        "discription": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "language": "english"
    },
    {
        "id": "4",
        "movie_name": "12 Angry Men (1957)",
        "pic": "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
        "rating": 9,
        "discription": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        "trailer": "https://www.youtube.com/embed/_13J_9B5jEk",
        "language": "english"
    },
    {
        "id": "5",
        "movie_name": "Schindler's List (1993)",
        "pic": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "rating": 9,
        "discription": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "trailer": "https://www.youtube.com/embed/gG22XNhtnoY",
        "language": "english"
    },
    {
        "id": "6",
        "movie_name": "The Lord of the Rings: The Return of the King (2003)",
        "pic": "https://flxt.tmsimg.com/assets/p33156_p_v10_ab.jpg",
        "rating": 8.9,
        "discription": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "trailer": "https://www.youtube.com/embed/r5X-hFf6Bwo",
        "language": "english"
    },
    {
        "id": "7",
        "movie_name": "Pulp Fiction (1994)",
        "pic": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "rating": 8.8,
        "discription": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "trailer": "https://www.youtube.com/embed/5ZAhzsi1ybM",
        "language": "english"
    },
    {
        "id": "8",
        "movie_name": "The Good, the Bad and the Ugly (1966)",
        "pic": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_.jpg",
        "rating": 8.8,
        "discription": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "trailer": "https://www.youtube.com/embed/WCN5JJY_wiA",
        "language": "english"
    },
    {
        "id": "9",
        "movie_name": "Fight Club (1999)",
        "pic": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "rating": 8.8,
        "discription": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "trailer": "https://www.youtube.com/embed/qtRKdVHc-cE",
        "language": "english"
    },
    {
        "id": "10",
        "movie_name": "Inception (2010)",
        "pic": "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
        "rating": 8.7,
        "discription": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "trailer": "https://www.youtube.com/embed/YoHD9XEInc0",
        "language": "english"
    }
];

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.get("/movies", (request, response) => {
    const { language, rating } = request.query;

    let filterMovies = movies;

    if (language) {
        filterMovies = filterMovies.filter((mv => mv.language === language));
    }
    if (rating) {
        filterMovies = filterMovies.filter((mv => mv.rating === +rating));
    }
    response.send(filterMovies);
});

app.get("/movies/:id", (request, response) => {
    const { id } = request.params;
    // const movie = movies.filter((mv) => mv.id === id);
    const movie = movies.find(mv => mv.id === id);
    const notFound = { message: "No Matches Found" }
    movie ? response.send(movie) : response.status(400).send(notFound);
});

app.delete("/movies/:id", (request, response) => {
    const { id } = request.params;

})

app.listen(PORT, () => console.log("App is started on", PORT));