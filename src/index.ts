import "dotenv/config";
import express from "express";
import companyRoutes from "./modules/companies/company.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/companies", companyRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
