<script setup>
// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

import { ref, computed } from 'vue'
import ItemCarrinho from './CartItem.vue'
import ResumoCarrinho from './CartSummary.vue'

const tipoOrdenacao = ref('nome')

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
  },
  {
    id: 3,
    nome: 'Boné',
    preco: 39.90,
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

const produtosOrdenados = computed(() => {
  const lista = [...produtos.value]

  switch (tipoOrdenacao.value) {
    case 'nome':
      return lista.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      )

    case 'precoMenor':
      return lista.sort((a, b) =>
        a.preco - b.preco
      )

    case 'precoMaior':
      return lista.sort((a, b) =>
        b.preco - a.preco
      )

    default:
      return lista
  }
})

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

    <div class="filtro">
      <label>Ordenar por:</label>

      <select v-model="tipoOrdenacao">
        <option value="nome">Nome (A-Z)</option>
        <option value="precoMenor">Menor preço</option>
        <option value="precoMaior">Maior preço</option>
      </select>
    </div>

    <div v-if="produtosOrdenados.length > 0">
      <ItemCarrinho
        v-for="produto in produtosOrdenados"
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

.filtro {
  margin-bottom: 20px;
}

select {
  margin-left: 10px;
  padding: 5px;
}
</style>
