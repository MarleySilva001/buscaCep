import React, { useState } from 'react';
import Busca from './Busca';
import Dados from './Dados';

export default function Cep() {
    const [cep, setCep] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCep = (cep) => {
        setLoading(true);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    setError("CEP não encontrado.");
                    setCep({});
                } else {
                    setCep(data);
                    setError(null);
                }
                setLoading(false);
            })
            .catch(error => {
                setError("Ocorreu um erro ao buscar o CEP.");
                setLoading(false);
            });
    };

    return (
        <div className='tudo'>
            <h1>Buscar endereço pelo CEP</h1>
            <Busca onSearch={fetchCep} />
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            <Dados cep={cep} />
        </div>
    );
}