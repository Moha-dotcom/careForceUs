import { Request, Response, NextFunction } from "express";
import { getCompaniesByCity } from "./company.service";

export async function getCompaniesByCityHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (typeof req.query.city !== "string") {
        res.status(400).json({
            status: "error",
            message: "city query parameter is required",
        });
        return;
    }

    try {
        const data = await getCompaniesByCity(req.query.city);
        res.status(200).json({ status: "success", data });
    } catch (err) {
        next(err);
    }
}
