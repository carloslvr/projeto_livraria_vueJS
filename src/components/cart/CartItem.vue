<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

const props = defineProps({
  produto: Object
})

const emit = defineEmits([
  'alterarQuantidade',
  'remover'
])

function aumentar() {
  emit('alterarQuantidade', {
    id: props.produto.id,
    quantidade: props.produto.quantidade + 1
  })
}

function diminuir() {
  if (props.produto.quantidade > 1) {
    emit('alterarQuantidade', {
      id: props.produto.id,
      quantidade: props.produto.quantidade - 1
    })
  }
}
</script>


<template>
  <div class="item">
    <div>
      <h3>{{ produto.nome }}</h3>
      <p>Preço: R$ {{ produto.preco.toFixed(2) }}</p>
    </div>

    <div class="acoes">
      <button @click="diminuir">-</button>

      <span>{{ produto.quantidade }}</span>

      <button @click="aumentar">+</button>

      <button @click="$emit('remover', produto.id)">
        Remover
      </button>
    </div>
  </div>
</template>


<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.acoes {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
