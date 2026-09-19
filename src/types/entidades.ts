export type StatusMatricula = 'ativa' | 'inativa' | 'vencida'

export interface Aluno {
  id: number
  nome: string
  dataNascimento: string
  telefone?: string
  ativo: boolean
}

export interface Plano {
  id: number
  nome: string
  preco: number
  duracaoMeses: number
  descricao?: string
}

export interface Matricula {
  id: number
  alunoId: number
  planoId: number
  dataInicio: string
  dataFimEstimada: string
  status: StatusMatricula
}

export type VarianteCartao = 'completo' | 'resumido'

export interface CartaoAlunoProps {
  aluno: Aluno
  variante?: VarianteCartao
}