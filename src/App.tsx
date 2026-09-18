import { Cabecalho } from './components/Cabecalho';3
import type { Produto } from './types/entidades';
import { CartaoProduto } from './components/CartaoProduto';
import { Rodape } from './components/Rodape';



const chavePhillips: Produto = {
  id: 2, nome: 'Chave Phillips', descricao: 'Ponta PH2',
  categoriaId: 2, quantidade: 0,
};

const ParafusoM6: Produto = {
  id: 3,
  nome: 'Parafuso M6', 
  descricao: 'Parafuso sextavado M6',
  categoriaId: 1, quantidade: 120,
}


export default function App() {
  return (
    <main>
      <Cabecalho />
      <CartaoProduto produto={chavePhillips} />
      <CartaoProduto produto={ParafusoM6}/>
      <Rodape />
    </main>
  );
}
