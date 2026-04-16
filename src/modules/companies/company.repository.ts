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

export async function findCompaniesByCity(city: string): Promise<CompanyResult[]> {
    return prisma.company.findMany({
        where: { city },
    });
}
