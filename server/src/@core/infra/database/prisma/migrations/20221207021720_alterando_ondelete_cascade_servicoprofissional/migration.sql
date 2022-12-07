-- DropForeignKey
ALTER TABLE "servicoProfissional" DROP CONSTRAINT "servicoProfissional_profissionalId_fkey";

-- DropForeignKey
ALTER TABLE "servicoProfissional" DROP CONSTRAINT "servicoProfissional_servicoId_fkey";

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servico"("id") ON DELETE CASCADE ON UPDATE CASCADE;
