import table from "../tables.js";

const getJokes = async (req, res) => {
    try {
        const results = await table.joke.getAllJokes();

        res.status(200).json(results);

    } catch (error) {
        console.error("Error fetching jokes:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

const getJokeById = async (req, res) => {
    const jokeId = req.params.id;
    try {
        const result = await table.joke.getJokeById(jokeId);
        
        if (!result) {
            res.status(404).json({ message: "Blague non trouvée" });
        } else {
            res.status(200).json(result);
        }

    } catch (error) {
        console.error("Error fetching joke by ID:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

const getRandomJoke = async (req, res) => {
    try {
        const results = await table.joke.getRandomJoke();
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching random joke:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

const createJoke = async (req, res) => {
const { joke, response } = req.body;
    
    if (!joke || !response) {
        return res.status(400).json({ 
            error: "Les champs 'joke' et 'response' sont requis" 
        });
    }
    
    try {
        const results = await table.joke.createJoke(joke, response);

        console.info("Résultat de l'insertion:", results);

        res.status(201).send({message: "Blague ajoutée avec succès" });
    } catch (error) {
        console.error("Error creating joke:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

export default { getJokes, getJokeById, getRandomJoke, createJoke };