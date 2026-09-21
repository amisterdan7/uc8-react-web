import type { Aluno } from "../types/entidades";

export type VarianteCartao = 'completo' | 'resumido'
export interface CartaoAlunoProps {
  aluno: Aluno
  variante?: VarianteCartao
}

export function CartaoAluno({ aluno, variante = 'completo' }: CartaoAlunoProps) {
  return (
    <article className="cartao">
      <h2>{aluno.nome}</h2>
      
      {variante === 'completo' && (
        <>
          <p>📞 {aluno.telefone ?? 'Não informado'}</p>
          <span className={`badge-status ${aluno.ativo ? 'badge-ativo' : 'badge-inativo'}`}>
            {aluno.ativo ? 'Ativo' : 'Arquivado'}
          </span>
        </>
      )}
    </article>
  );
}