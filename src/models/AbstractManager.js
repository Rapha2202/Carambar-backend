import sequelize from "../../database/client.js";

class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = sequelize;
  }
}

export default AbstractManager;