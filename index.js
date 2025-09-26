import app from './src/app.js';
import sequelize from './database/client.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.APP_PORT || 3000;

app.set("sequelize", sequelize);

    try {
        await sequelize.sync({ alter: true });
        console.log("Database synchronized");
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
        .on("error", (err) => {
            console.error("Error:", err.message);
        });
    } catch (err) {
        console.error("Error synchronizing database:", err);
    }



