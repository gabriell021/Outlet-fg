import React from 'react';

const produtos = [
  { id: 1, nome: 'Camiseta Infantil', categoria: 'Roupas', preco: 39.90 },
  { id: 2, nome: 'Tênis Masculino', categoria: 'Calçados', preco: 119.90 },
  { id: 3, nome: 'Perfume Feminino', categoria: 'Perfumes', preco: 89.90 },
  { id: 4, nome: 'Boné Unissex', categoria: 'Acessórios', preco: 29.90 },
];

export default function LojaModa() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: '#333' }}>Outlet FG</h1>
      <p>Moda para todas as idades e estilos</p>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {produtos.map((produto) => (
          <div key={produto.id} style={{ border: '1px solid #ccc', borderRadius: 10, padding: 10, background: '#fff' }}>
            <h3>{produto.nome}</h3>
            <p><strong>Categoria:</strong> {produto.categoria}</p>
            <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}