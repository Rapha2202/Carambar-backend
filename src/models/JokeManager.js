import AbstractManager from "./AbstractManager.js";

class JokeManager extends AbstractManager {
  constructor() {
    super({ table: "joke" });
  }

  async getAllJokes() {
    const [results] = await this.database.query(`SELECT * FROM ${this.table}`);
    return results;
  }

  async getJokeById(id) {
    const [results] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      {
        replacements: [id],
      }
    );
    return results[0];
  }

  async getRandomJoke() {
    const [results] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY RANDOM() LIMIT 1`
    );
    return results[0];
  }

  async createJoke(joke, answer) {
    const [results] = await this.database.query(
      `INSERT INTO ${this.table} (joke, answer) VALUES (?, ?)`,
      {
        replacements: [joke, answer],
      }
    );
    return results;
  }

}

export default JokeManager;