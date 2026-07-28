<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.
import { produtos } from '@/data/product'
import { adicionarAoCarrinho } from '@/data/cart'

const destaques = produtos.slice(0, 4)
</script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Bem-vindo à Livraria</h1>
      <p>Descubra livros incríveis e adicione-os ao seu carrinho.</p>
    </section>

    <section class="destaques">
      <h2>Produtos em Destaque</h2>

      <div class="grid">
        <div
          v-for="produto in destaques"
          :key="produto.id"
          class="card"
        >
          <img
            :src="produto.capa"
            :alt="produto.titulo"
            class="imagem"
          />

          <h3>{{ produto.titulo }}</h3>

          <p class="descricao">
            {{ produto.descricao }}
          </p>

          <p class="preco">
            R$ {{ produto.preco.toFixed(2) }}
          </p>

          <button
            class="btn"
            @click="adicionarAoCarrinho(produto)"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </section>
  </main>
  
</template>

<style scoped>
.home {
  padding: 20px;
}

.hero {
  background: #4A65A8;
  color: white;
  text-align: center;
  padding: 50px 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.destaques h2 {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.imagem {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
}

.descricao {
  margin: 10px 0;
  color: #555;
}

.preco {
  font-size: 1.1rem;
  font-weight: bold;
  color: green;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  padding: 10px;
  background: #4A65A8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}
</style>
