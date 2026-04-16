import prisma from "../../config/prisma";

export type CompanyResult = {
    id           : string;
    companyName  : string;
    streetAddress: string;
    city         : string;
    state        : string;
    zipCode      : string;
    phone        : string;
    licenseType  : string | null;
};

export async function findCompaniesByFilters(filters: {
    city?   : string;
    zipCode?: string;
}): Promise<CompanyResult[]> {
    return prisma.company.findMany({
        where: {
            ...(filters.city    && { city    : filters.city }),
            ...(filters.zipCode && { zipCode : filters.zipCode }),
        },
    });
}
