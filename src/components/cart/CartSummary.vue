<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.

defineProps({
  total: Number
})

function finalizarCompra() {
  alert('Compra finalizada!')
}
</script>


<template>
  <div class="resumo">
    <h2>Total: R$ {{ total.toFixed(2) }}</h2>

    <button @click="finalizarCompra">
      Finalizar Compra
    </button>
  </div>
</template>


<style scoped>
.resumo {
  margin-top: 20px;
  text-align: right;
}

button {
  padding: 10px;
}
</style>
