// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, raridade, descricao, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por raridade, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.
export const produtos = [
  {
    id: 1,
    titulo: 'Planeta de Compras (Shopping Planet)',
    raridade: 'SS-2',
    descricao:
      'Dá acesso a um shopping center exclusivo onde você pode comprar qualquer item que já foi vendido no mundo real, mesmo coisas raras, descontinuadas ou esgotadas.',
    preco: 129.9,
    capa: '/images/planeta_de_compras.png',
  },
  {
    id: 2,
    titulo: 'Pílulas da Respiração (Breath Pills)',
    raridade: 'A-17',
    descricao:
      'Uma obra clássica sobre postura profissional, organização e boas práticas no desenvolvimento de softwareUm frasco com 100 pílulas. Tomar uma cura instantaneamente qualquer doença ou ferimento físico.',
    preco: 149.9,
    capa: '/images/pilulas_respiracao.png',
  },
  {
    id: 3,
    titulo: 'Skinship (Conexão de Pele)',
    raridade: 'A-20',
    descricao:
      'Uma loção que, quando aplicada, faz com que qualquer pessoa que toque em você sinta um carinho profundo e imediato, como se fossem melhores amigos ou família.',
    preco: 89.9,
    capa: '/images/skinship.png',
  },
  {
    id: 4,
    titulo: "Almofada de Emagrecimento (Slimming Cushion)",
    raridade: 'B-30',
    descricao: 'Sentar nesta almofada por apenas uma hora por dia faz você perder peso de forma saudável e moldar o corpo ideal.',
    preco: 79.9,
    capa: '/images/almofada_emagrecimento.png',
  },
  {
    id: 5,
    titulo: 'Memória Fotográfica (Photographic Memory)',
    raridade: 'B-56',
    descricao:
      'Uma câmera que não tira fotos de imagens, mas sim da sua memória atual, permitindo que você a visualize perfeitamente ou recupere lembranças esquecidas.',
    preco: 20.90,
    capa: '/images/memoria_fotografica.png',
  },
  {
    id: 6,
    titulo: 'Mansão de Aluguel de Luxo (Luxury Rental Mansion)',
    raridade: 'S-6',
    descricao: 'Uma maquete que se transforma em uma mansão de luxo de 20 quartos, com direito a mordomo, chef de cozinha e spa inclusos, contanto que você pague o "aluguel" (que no jogo é simbólico).',
    preco: 199.9,
    capa: '/images/mansao_aluguel.png',
  },
  {
    id: 7,
    titulo: 'Concha do Despertar (Awakening Shell)',
    raridade: 'A-15',
    descricao:
      'Dormir dentro desta concha gigante garante que você acorde se sentindo 100% revigorado, não importa o quão cansado estava ou quão poucas horas tenha dormido.',
    preco: 55.99,
    capa: '/images/concha_despertar.png',
  },
  {
    id: 8,
    titulo: 'Bilhete de Viagem de Ida e Volta (Round-Trip Travel Ticket)',
    raridade: 'B-66',
    descricao: 'Um bilhete que permite que você vá para qualquer lugar do mundo instantaneamente e retorne ao ponto de partida assim que o tempo estipulado acabar.',
    preco: 27.98,
    capa: '/images/bilhete_viagem.png',
  },
]
