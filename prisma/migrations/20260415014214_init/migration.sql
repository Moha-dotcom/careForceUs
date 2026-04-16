-- CreateEnum
CREATE TYPE "TagStatus" AS ENUM ('CALLED', 'ANSWERED', 'CALL_BACK', 'NO_OPEN_POSITION', 'POSITION_AVAILABLE', 'INTERVIEW', 'PENDING_HIRE', 'MAYBE_CALL_TOMORROW', 'CALLING');

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" CHAR(2) NOT NULL,
    "zip_code" CHAR(5) NOT NULL,
    "phone" TEXT NOT NULL,
    "license_type" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorite_companies" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "tag" "TagStatus" NOT NULL DEFAULT 'CALLING',
    "user_id" TEXT NOT NULL,

    CONSTRAINT "favorite_companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "favorite_companies_user_id_company_id_key" ON "favorite_companies"("user_id", "company_id");

-- AddForeignKey
ALTER TABLE "favorite_companies" ADD CONSTRAINT "favorite_companies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_companies" ADD CONSTRAINT "favorite_companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
