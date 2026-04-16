import { findCompaniesByCity, CompanyResult } from "./company.repository";

type CompanyResultOmitId = Omit<CompanyResult, "id">[];

export async function getCompaniesByCity(city: string): Promise<CompanyResultOmitId> {
    if (!city || city.trim().length === 0) {
        throw new Error("City is required");
    }

    const companies = await findCompaniesByCity(city);

    return companies.map((c) => ({
        companyName  : c.companyName,
        streetAddress: c.streetAddress,
        city         : c.city,
        state        : c.state,
        zipCode      : c.zipCode,
        phone        : c.phone,
        licenseType  : c.licenseType ?? "No License Type Available",
    }));
}
