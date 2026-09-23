import type { Plano } from '../types/entidades';


interface CartaoPlanoProps {
    plano: Plano;
}

export function CartaoPlano({ plano }: CartaoPlanoProps) {

    return (
        <article style={{ border: '1px solid #4CAF50', padding: '1rem', margin: '0.5rem 0', borderRadius: '8px' }}>
            <h3>{plano.nome}</h3>
            <p>Preço: R$ {plano.preco.toFixed(2)} / mês</p>
            <p>Duração: {plano.duracaoMeses} meses</p>
            <p>{plano.descricao}</p>
        </article>
    )
}