import type { Matricula } from '../types/entidades';

interface CartaoMatriculaProps {
  matricula: Matricula;
}

export function CartaoMatricula({ matricula }: CartaoMatriculaProps) {
  return (
    <article className="cartao">
      <h2>Matrícula #{matricula.id}</h2>
      <p>Início: {matricula.dataInicio}</p>
      <p>Fim Estimado: {matricula.dataFimEstimada}</p>
      
      <span className={`badge-status badge-${matricula.status === 'ativa' ? 'ativo' : 'inativo'}`}>
        STATUS: {matricula.status}
      </span>
    </article>
  );
}