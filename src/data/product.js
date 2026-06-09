// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, raridade, descricao, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por raridade, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.
export const produtos = [
  {
    id: 1,
    titulo: 'Um alqueire de floresta ',
    raridade: 'SS-3',
    descricao:
      'A entrada para a floresta gigante chamada de "Jardim do Deus da Montanha", onde vivem muitas espécies endêmicas únicas. Eles são todos mansos e amigáveis.',
    preco: 129.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/d/da/AF.png/revision/latest/scale-to-width-down/300?cb=20181118013849&path-prefix=pt',
  },
  {
    id: 2,
    titulo: 'Dicionário dourado',
    raridade: 'S-10',
    descricao:
      'Dicionário que ensina ao dono palavras especiais. Abra o dicionário para encontrar uma palavra em dourado. Deve-se memorizar seu significado, pois no dia seguinte ela será útil.',
    preco: 149.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/1/16/Dictionario_Dourado.png/revision/latest/scale-to-width-down/300?cb=20140731134721&path-prefix=pt',
  },
  {
    id: 3,
    titulo: 'Skinship (Conexão de Pele)',
    raridade: 'A-20',
    descricao:
      'Uma loção que, quando aplicada, faz com que qualquer pessoa que toque em você sinta um carinho profundo e imediato, como se fossem melhores amigos ou família.',
    preco: 89.9,
    capa: 'https://imgs.search.brave.com/8x1cP94ykLfVDZXLAfU-ln4eHFTcAlEJw5qHVdwkdl0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnNl/cnZpbWcuY29tL3Uv/ZjM5LzE0LzAyLzc0/LzIxL2NhcnRhXzIw/LnBuZw',
  },
  {
    id: 4,
    titulo: "Almofada de Emagrecimento (Slimming Cushion)",
    raridade: 'B-30',
    descricao: 'Sentar nesta almofada por apenas uma hora por dia faz você perder peso de forma saudável e moldar o corpo ideal.',
    preco: 79.9,
    capa: 'https://imgs.search.brave.com/P2bCkpcSIGq-z0iPxZSZPGmBrTPD4A4t1c1lpGyWWIs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnNl/cnZpbWcuY29tL3Uv/ZjM5LzE0LzAyLzc0/LzIxL2NhcnRhXzQy/LnBuZw',
  },
  {
    id: 5,
    titulo: 'Tesoura para cortar relações',
    raridade: 'B-56',
    descricao:
      'Cortando com esta tesoura a foto de quem não se deseja mais ver, ela nunca mais será vista. Vale para todos presentes na foto (exceto o próprio usuário), portanto, cuidado.',
    preco: 159.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/8/84/G.I_card_14.png/revision/latest/scale-to-width-down/300?cb=20210520122047&path-prefix=pt ',
  },
  {
    id: 6,
    titulo: 'Conselho do rei das fadas',
    raridade: 'S-6',
    descricao: 'Dá um conselho que gentilmente, mas precisamente, explica o que falta em você ou o que tem que melhorar. Aparece ocasionalmente mesmo se não chamá-lo, apesar de ser um pouco nervoso.',
    preco: 199.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/7/77/G.I_card_16.png/revision/latest/scale-to-width-down/300?cb=20210520121809&path-prefix=pt',
  },
  {
    id: 7,
    titulo: 'O sopro do arcanjo',
    raridade: 'SS-3',
    descricao:
      'Um arcanjo que ira curar um ferimento mortal, uma doença incurável, ou qualquer outra coisa com um sopro. No entanto, esse arcanjo só aparecerá uma vez.',
    preco: 139.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/e/e7/G.I_card_17.png/revision/latest/scale-to-width-down/300?cb=20210520121439&path-prefix=pt',
  },
  {
    id: 8,
    titulo: 'Caderneta de poupança da boa sorte',
    raridade: 'A-20',
    descricao: 'Economizando boa sorte diariamente, ela será convertida em dinheiro, que poderá ser sacado por esta caderneta.',
    preco: 99.9,
    capa: 'https://static.wikia.nocookie.net/hxh/images/c/c4/G.I_card_13.png/revision/latest/scale-to-width-down/300?cb=20210520122244&path-prefix=pt',
  },
]
