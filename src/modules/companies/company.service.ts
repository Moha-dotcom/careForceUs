import { findCompaniesByFilters, CompanyResult } from "./company.repository";

type CompanyResultOmitId = Omit<CompanyResult, "id">[];

export async function getCompaniesByFilters(filters: {
    city?   : string;
    zipCode?: string;
}): Promise<CompanyResultOmitId> {
    if (!filters.city && !filters.zipCode) {
        throw new Error("At least one filter (city or zipCode) is required");
    }

    const companies = await findCompaniesByFilters(filters);

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
