import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/database.sqlite"
});

const Joke = sequelize.define("joke", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    joke: {
        type: Sequelize.STRING,
        allowNull: false
    },
    response: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'joke',
    freezeTableName: true,
    timestamps: false
});

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;