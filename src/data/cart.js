import { ref } from 'vue'

export const carrinho = ref([])

export function adicionarAoCarrinho(produto) {
  const item = carrinho.value.find(
    p => p.id === produto.id
  )

  if (item) {
    item.quantidade++
  } else {
    carrinho.value.push({
      ...produto,
      quantidade: 1
    })
  }
}

export function removerDoCarrinho(id) {
  carrinho.value = carrinho.value.filter(
    p => p.id !== id
  )
}

export function limparCarrinho() {
  carrinho.value = []
}