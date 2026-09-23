import type { Aluno } from '../types/entidades';

export const acervoAlunos: Aluno[] = [
  { id: 1, nome: 'Carlos Eduardo', dataNascimento: '1995-04-12', telefone: '(84) 99999-1111', ativo: true },
  { id: 2, nome: 'Ana Beatriz', dataNascimento: '1998-08-22', telefone: '(84) 98888-2222', ativo: false }
];

export function carregarAlunos(): Promise<Aluno[]> {
  return new Promise((resolver) => {
    setTimeout(() => resolver(acervoAlunos), 800);
  });
}