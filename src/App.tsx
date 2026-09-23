import { useEffect, useState } from 'react';
import type { Aluno } from './types/entidades';
import { carregarAlunos } from './servicos/acervo';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { FormularioAluno } from './components/FormularioAluno';
import { ListaAlunos } from './components/ListaAlunos';

export default function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarAlunos().then((resultado) => {
      setAlunos(resultado);
      setCarregando(false);
    });
  }, []);

  function adicionarAluno(novoAluno: Aluno) {
    setAlunos([...alunos, novoAluno]);
  }

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Cabecalho />

      <section style={{ marginBottom: '2rem' }}>
        {/* <h2>Novo Aluno</h2> */}
        <FormularioAluno aoEnviar={adicionarAluno} />
      </section>

      <section>
        <h2>Lista de Alunos</h2>
        {carregando ? (
          <p>Carregando dados da academia...</p>
        ) : (
          <ListaAlunos alunos={alunos} />
        )}
        <Rodape/>
      </section>
    </main>
  );
}