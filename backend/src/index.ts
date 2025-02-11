import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();
// import authRoutes from "./routes/authRoutes";
// import { authMiddleware } from "./middleware/authMiddleware";
// import featureRoutes from "./routes/featureRoutes";
// import { PORT as port, NODE_ENV } from "./utils/constants";
// import profileRoutes from "./routes/profileRoutes";
// import projectRoutes from "./routes/projectRoutes";
// import Logger from "./utils/Logger";

const app: Express = express();
const {PORT} = process.env||3000;
// const apiBase = "/api/v1/";
// const authApiBase = apiBase + "auth";
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// api routes

// // authentication routes
// app.use(authApiBase, authRoutes);

// // feature route
// app.use(apiBase + "features", authMiddleware, featureRoutes);

// // profile routes
// app.use(apiBase + "profile", authMiddleware, profileRoutes);

// // project routes
// app.use(apiBase + "projects", authMiddleware, projectRoutes);

app.listen(PORT, () => {
  // Logger.info(`Server started on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`Server started on port ${PORT} `);
});

export default app;
