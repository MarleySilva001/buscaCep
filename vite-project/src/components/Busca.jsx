import React, { useState } from 'react';

export default function Busca({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.length !== 8 || !/^\d{8}$/.test(searchTerm)) {
            alert("Por favor, insira um CEP válido com 8 dígitos.");
        }
        onSearch(searchTerm);
        setSearchTerm('');
    };

    return (
    
        <form onSubmit={handleSubmit} className='form'>
            <div className='barraDePesquisa'>
                <input
                    type="text"
                    placeholder="Digite o CEP..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='inputBusca'
                    minLength={8}
                    maxLength={8}
                    pattern="\d{8}"
                    required
                />
                <div> 
                <button type="submit">
                    <span className="button_top"> Pesquisar</span>
                </button>
                </div>
                </div>
        </form> 
        
    );
}