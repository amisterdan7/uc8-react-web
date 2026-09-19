import type { CartaoAlunoProps } from '../types/entidades';

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