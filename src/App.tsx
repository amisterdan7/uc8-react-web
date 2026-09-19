import type { Aluno } from './types/entidades'
import { Cabecalho } from './components/Cabecalho'
import { CartaoAluno } from './components/CartaoALuno'
import { Rodape } from './components/Rodape'

const ricardo: Aluno = {
  id: 1,
  nome: 'Ricardo Amisterdan',
  dataNascimento: '2000-05-14',
  telefone: '(84) 99999-0000',
  ativo: true
}

const joao: Aluno = {
  id: 2,
  nome: 'João Silva',
  dataNascimento: '1998-11-02',
  ativo: false
}

const Bruna: Aluno = {
  id: 3,
  nome: 'Bruna Souza',
  dataNascimento: '2001-07-22',
  telefone: '(84) 98888-1111',
  ativo: true
}

export default function App() {
  return (
    <>
      <Cabecalho />
      <main id="center">
        <div className="cartoes-container">
          <CartaoAluno aluno={ricardo} />
          <CartaoAluno aluno={joao} variante="resumido" />
          <CartaoAluno aluno={Bruna} />
        </div>
      </main>
      <Rodape />
    </>
  )
}