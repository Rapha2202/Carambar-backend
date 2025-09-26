import express from "express";
import router from "./router.js";
import { swaggerUi, specs } from "./config/swagger.js";

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Carambar API Documentation"
}));

app.use("/api/v1", router);

export default app;
