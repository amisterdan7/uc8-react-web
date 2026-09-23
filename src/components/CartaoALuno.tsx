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
      <p>🎂 {aluno.dataNascimento ?? 'Não informado'}</p>
      {variante === 'completo' && (
        <>
          <p>📞 {aluno.telefone ?? 'Não informado'}</p>
          <span className={`badge-status ${aluno.ativo ? 'badge-ativo' : 'badge-inativo'}`}>
            <p>Status: {aluno.ativo ? '🟢 Ativo' : '🔴 Inativo'}</p>
          </span>
        </>
      )}
    </article>
  );
}