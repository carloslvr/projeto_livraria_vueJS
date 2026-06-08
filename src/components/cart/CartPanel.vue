<script setup>
// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

import { ref, computed } from 'vue'
import ItemCarrinho from './CartItem.vue'
import ResumoCarrinho from './CartSummary.vue'

const produtos = ref([
  {
    id: 1,
    nome: 'Camiseta',
    preco: 59.90,
    quantidade: 2
  },
  {
    id: 2,
    nome: 'Tênis',
    preco: 199.90,
    quantidade: 1
  }
])

function alterarQuantidade(dados) {
  const produto = produtos.value.find(
    p => p.id === dados.id
  )

  if (produto) {
    produto.quantidade = dados.quantidade
  }
}

function removerProduto(id) {
  produtos.value = produtos.value.filter(
    produto => produto.id !== id
  )
}

const valorTotal = computed(() => {
  return produtos.value.reduce(
    (total, produto) =>
      total + produto.preco * produto.quantidade,
    0
  )
})
</script>


<template>
  <div class="carrinho">
    <h1>Meu Carrinho</h1>

    <div v-if="produtos.length > 0">

      <ItemCarrinho
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
        @alterarQuantidade="alterarQuantidade"
        @remover="removerProduto"
      />

      <ResumoCarrinho :total="valorTotal" />

    </div>

    <div v-else>
      Carrinho vazio.
    </div>
  </div>
</template>


<style scoped>
.carrinho {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
