-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,
    "idProdutoFornecedor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "valorCusto" DOUBLE PRECISION NOT NULL,
    "valorVenda" DOUBLE PRECISION NOT NULL,
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque" (
    "id" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidoCompra" (
    "id" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,
    "dataCompra" TIMESTAMP(3),
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "pedidoCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidoCompraItem" (
    "id" TEXT NOT NULL,
    "pedidoCompraId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "pedidoCompraItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3),

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoCompra" ADD CONSTRAINT "pedidoCompra_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoCompraItem" ADD CONSTRAINT "pedidoCompraItem_pedidoCompraId_fkey" FOREIGN KEY ("pedidoCompraId") REFERENCES "pedidoCompra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoCompraItem" ADD CONSTRAINT "pedidoCompraItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
