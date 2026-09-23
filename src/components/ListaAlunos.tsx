import type { Aluno } from '../types/entidades';
import { CartaoAluno } from './CartaoALuno';

interface ListaAlunosProps {
  alunos: Aluno[];
}

export function ListaAlunos({ alunos }: ListaAlunosProps) {
  if (alunos.length === 0) {
    return <p>Nenhum aluno cadastrado no momento.</p>;
  }

  return (
    <section className='cartoes-container'>
      {alunos.map((aluno) => (
        <CartaoAluno key={aluno.id} aluno={aluno} />
      ))}
    </section>
  );
}