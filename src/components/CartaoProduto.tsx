import type { CartaoProdutoProps } from "../types/entidades";

export function CartaoProduto({
  produto,
  limiteBaixo = 5,
  variante = "completo",
}: CartaoProdutoProps) {
  return (
    <article>
      <h2>{produto.nome}</h2>
      {variante === "completo" && <p>Categoria: {produto.categoriaId}</p>}
      <p>{produto.descricao ?? "Sem descrição"}</p>
      <p>
        {produto.quantidade <= limiteBaixo && <p>limite baixo</p>}Estoque:{" "}
        {produto.quantidade}
      </p>
    </article>
  );
}
