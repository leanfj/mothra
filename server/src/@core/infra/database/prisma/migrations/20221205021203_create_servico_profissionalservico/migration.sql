-- CreateTable
CREATE TABLE "servico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicoProfissional" (
    "id" TEXT NOT NULL,
    "profissionalId" TEXT NOT NULL,
    "servicoId" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "servicoProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
