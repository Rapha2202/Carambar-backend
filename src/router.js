import express from "express";

import jokeController from "./controllers/jokeControllers.js";

const router = express.Router();

router.get("/blagues", jokeController.getJokes);

router.get("/blagues/random", jokeController.getRandomJoke);

router.get("/blagues/:id", jokeController.getJokeById);

router.post("/blagues", jokeController.createJoke);

export default router;