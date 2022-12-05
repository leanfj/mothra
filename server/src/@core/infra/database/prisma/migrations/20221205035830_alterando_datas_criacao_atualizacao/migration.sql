/*
  Warnings:

  - You are about to alter the column `valor` on the `servico` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "dataCadastro" DROP NOT NULL,
ALTER COLUMN "dataCadastro" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "profissional" ALTER COLUMN "dataCadastro" DROP NOT NULL,
ALTER COLUMN "dataCadastro" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "servico" ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dataCadastro" DROP NOT NULL,
ALTER COLUMN "dataCadastro" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "servicoProfissional" ALTER COLUMN "dataCadastro" DROP NOT NULL,
ALTER COLUMN "dataCadastro" SET DEFAULT CURRENT_TIMESTAMP;
