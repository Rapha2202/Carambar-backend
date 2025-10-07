import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import { swaggerUi, specs } from "./config/swagger.js";

dotenv.config();

const app = express();

app.use(express.json());

const frontendUrl = process.env.FRONTEND_URL || "";
app.use((req, res, next) => {
  if (frontendUrl) {
    res.setHeader("Access-Control-Allow-Origin", frontendUrl);
  }
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Carambar API Documentation",
  })
);

app.use("/api/v1", router);

export default app;
