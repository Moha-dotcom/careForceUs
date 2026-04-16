import { Request, Response, NextFunction } from "express";
import { getCompaniesByFilters } from "./company.service";

export async function getCompaniesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const city    = typeof req.query.city    === "string" ? req.query.city    : undefined;
    const zipCode = typeof req.query.zipCode === "string" ? req.query.zipCode : undefined;

    if (!city && !zipCode) {
        res.status(400).json({
            status : "error",
            message: "At least one filter (city or zipCode) is required",
        });
        return;
    }

    try {
        const data = await getCompaniesByFilters({ city, zipCode });
        res.status(200).json({ status: "success", data });
    } catch (err) {
        next(err);
    }
}
