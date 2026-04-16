import { Router } from "express";
import { getCompaniesHandler } from "./company.controller";

const router = Router();

router.get("/", getCompaniesHandler);

export default router;
