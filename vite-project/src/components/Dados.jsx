export default function Dados({ cep }) {

    return (
        <div className="quadrado">
            <h2>Endereço</h2>
            <ul>
                {cep && (
                    <li>
                        <p><strong>Rua:</strong>{cep.logradouro}</p>
                        <p><strong>Bairro:</strong>{cep.bairro}</p>
                        <p><strong>Cidade:</strong>{cep.localidade}</p>
                        <p><strong>Estado:</strong>{cep.uf}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}