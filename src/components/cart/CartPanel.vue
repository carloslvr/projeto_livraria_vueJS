// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
<script setup>
import { computed } from 'vue'
import {
  carrinho,
  removerDoCarrinho,
  limparCarrinho
} from '@/data/cart'

const total = computed(() =>
  carrinho.value.reduce(
    (soma, item) =>
      soma + item.preco * item.quantidade,
    0
  )
)
</script>

<template>
  <div class="cart">
    <h2>Carrinho</h2>

    <p v-if="carrinho.length === 0">
      Seu carrinho está vazio.
    </p>

    <div
      v-for="item in carrinho"
      :key="item.id"
      class="item"
    >
      <h4>{{ item.titulo }}</h4>

      <p>Quantidade: {{ item.quantidade }}</p>

      <p>R$ {{ item.preco.toFixed(2) }}</p>

      <button @click="removerDoCarrinho(item.id)">
        Remover
      </button>
    </div>

    <div v-if="carrinho.length">
      <h3>
        Total: R$ {{ total.toFixed(2) }}
      </h3>

      <button @click="limparCarrinho">
        Limpar Carrinho
      </button>
    </div>
  </div>
</template>

<style scoped>
.item{
  border-bottom:1px solid #ddd;
  padding:10px 0;
}
</style>