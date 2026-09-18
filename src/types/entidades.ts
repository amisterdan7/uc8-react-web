export type TipoMovimentacao = 'entrada' | 'saida';
export interface Categoria { id: number; nome: string; }

export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  categoriaId: number;
  quantidade: number;
  limiteBaixo?: number;
}

type VarianteCartao = 'completo' | 'resumido';

export interface CartaoProdutoProps {
  produto: Produto;
  limiteBaixo?: number;
  variante?: VarianteCartao;
}

export interface Movimentacao {
  id: number; produtoId: number; tipo: TipoMovimentacao;
  quantidade: number; data: string;
}
