import { Router } from "express";
import { getCompaniesByCityHandler } from "./company.controller";

const router = Router();

router.get("/", getCompaniesByCityHandler);

export default router;
