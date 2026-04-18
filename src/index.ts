import "dotenv/config";
import express from "express";
import companyRoutes from "./modules/companies/company.routes";
import { errorHandler } from "./middleware/errorHandler";
import authRouteHandler from "./modules/auth/auth.routes"

const app = express();

app.use(express.json());

app.use("/companies", companyRoutes);
app.use("/auth", authRouteHandler);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
