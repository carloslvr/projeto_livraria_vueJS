// Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.
<script setup>
import { adicionarAoCarrinho } from '@/data/cart'

defineProps({
  produto: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
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
</template>

<style scoped>
.card{
  background:white;
  border-radius:12px;
  padding:16px;
  box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.imagem{
  width:100%;
  height:280px;
  object-fit:cover;
}

.descricao{
  margin:10px 0;
}

.preco{
  font-weight:bold;
  color:green;
}

.btn{
  width:100%;
  padding:10px;
  background:#4A65A8;
  color:white;
  border:none;
  border-radius:8px;
  cursor:pointer;
}
</style>