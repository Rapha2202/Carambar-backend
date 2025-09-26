import JokeManager from "./models/JokeManager.js";

const managers = [JokeManager];

const tables = {};

managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

const tablesProxy = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${import.meta.url}?`
    );
  },
});

export default tablesProxy;