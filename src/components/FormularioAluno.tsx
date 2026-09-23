import { useState } from 'react';
import type { Aluno } from '../types/entidades';

interface FormularioAlunoProps {
  aoEnviar: (aluno: Aluno) => void;
}

export function FormularioAluno({ aoEnviar }: FormularioAlunoProps) {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ativo, setAtivo] = useState(true); 

  function tratarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault(); 
    
    aoEnviar({
      id: Date.now(),
      nome,
      dataNascimento,
      telefone,
      ativo
    });

    setNome('');
    setDataNascimento('');
    setTelefone('');
    setAtivo(true);
  }

  return (
    <form onSubmit={tratarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <input 
        placeholder="Nome do Aluno" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}  
        required 
      />
      <input 
        type="date" 
        value={dataNascimento} 
        onChange={(e) => setDataNascimento(e.target.value)} 
        required 
      />
      <input 
        placeholder="Telefone" 
        value={telefone} 
        onChange={(e) => setTelefone(e.target.value)} 
        required 
      />
      <label>
        <input 
          type="checkbox" 
          checked={ativo} 
          onChange={(e) => setAtivo(e.target.checked)} 
        />
        Aluno Ativo?
      </label>
      <button type="submit">Cadastrar Aluno</button>
    </form>
  );
}