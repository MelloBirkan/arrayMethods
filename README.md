# Métodos de Array em JavaScript
## Projeto (POC) Uma História a Ser Refinada
Imagine que, um belo dia, decido compartilhar uma história épica de uma jornada repleta de desafios e descobertas. A história está pronta, mas há um problema: algumas palavras parecem desnecessárias, outras estão grafadas incorretamente e, ainda por cima, há uma palavra que não deveria estar lá de jeito nenhum! Para deixar minha história mais envolvente e polida, decido usar o poder dos métodos de array do JavaScript para realizar essa tarefa.
### Primeiro Passo: Dividir a História em Partes
Antes de começar qualquer correção, preciso transformar o texto em algo que eu possa manipular facilmente. Então, uso o método split() para separar cada palavra em um array.

```javascript
let storyWords = story.split(' ');
```

- **Por que fiz isso?** Ao transformar a história em um array de palavras, eu consigo manipular cada uma delas de forma individual. Agora, posso remover ou alterar palavras específicas sem interferir no restante do texto.

### Contando as Palavras da Jornada
Agora que cada palavra está separada, quero saber exatamente quantas palavras minha história tem. Então, decido contar cada uma delas com o `forEach()`.

```javascript
let count = 0;
storyWords.forEach(word => {
  count++;
});
```

- **Por que fiz isso?** Contar as palavras me ajuda a ter uma noção da extensão da minha história. Saber o número total de palavras é importante para entender o tamanho do meu texto e visualizar o trabalho que será necessário.

### Eliminando o Supérfluo

No meio da história, percebo que exagerei no uso da palavra “literalmente”. Ela aparece várias vezes e, sinceramente, acaba deixando o texto um pouco repetitivo. Para resolver isso, uso o `filter()` e a removo do texto.

```javascript
let unnecessaryWord = 'literalmente';
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
});
```

- **Por que fiz isso?** A palavra “literalmente” não agrega nada à história e só serve para torná-la redundante. Usar o `filter()` permite que eu a remova completamente, deixando o texto mais fluido.

### Corrigindo Erros de Grafia

Em algum ponto, noto que cometi um erro de digitação. Escrevi “Esmaralda” em vez de “Esmeralda”. Isso precisa ser corrigido! Com o método `map()`, faço a substituição.

```javascript
let misspelledWord = 'Esmaralda';
storyWords = storyWords.map(word => {
  return word === misspelledWord ? "Esmeralda" : word;
});
```

- **Por que fiz isso?** Ao corrigir a grafia de uma palavra errada com o `map()`, consigo garantir que a leitura da história seja clara e correta. Afinal, uma aventura épica merece uma ortografia impecável!

### Encontrando a Palavra Inadequada

No calor da emoção, acabei usando uma palavra inadequada para descrever as criaturas terríveis que encontrei durante a jornada. Agora preciso encontrar e substituir essa palavra. O método `findIndex()` me ajuda a localizar onde ela está no texto.

```javascript
let badWord = 'porra';
const badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});
storyWords[badWordIndex] = "realmente";
```

- **Por que fiz isso?** O uso de palavras fortes pode distrair o leitor da narrativa principal. Com `findIndex()`, localizo exatamente onde essa palavra inadequada está e a substituo por algo mais apropriado.

### Garantindo o Tamanho Correto das Palavras

Agora, me preocupo com o fato de que algumas palavras possam estar muito longas, o que pode prejudicar a fluidez da leitura. Uso o `every()` para verificar se todas as palavras têm menos de 20 caracteres.

```javascript
const lengthCheck = storyWords.every(word => {
  return word.length < 20;
});
console.log(lengthCheck);
// false
```

- **Por que fiz isso?** Verificar o comprimento das palavras é uma forma de garantir que meu texto está bem formatado e que nenhuma palavra exageradamente longa vai quebrar a estética ou a compreensão da história.

### Localizando e Substituindo Palavras Muito Longas

Descubro que uma palavra em particular é muito longa e precisa ser substituída por algo mais adequado. Com `findIndex()`, localizo essa palavra e faço a correção.

```javascript
const bigWordIndex = storyWords.findIndex(word => {
  return word.length >= 20;
});
storyWords[bigWordIndex] = "estranhamente";
```

- **Por que fiz isso?** Palavras muito longas podem ser cansativas de ler, especialmente em uma narrativa de aventura. Substituí-las por sinônimos mais curtos ajuda a manter o ritmo da leitura.

### Finalizando a História

Agora que todas as correções foram feitas, é hora de recompor a história! Uso o método `join()` para transformar o array de volta em uma string completa e apreciar o resultado final.

```javascript
console.log(storyWords.join(" "));
```

- **Por que fiz isso?** O método `join()` une todas as palavras separadas novamente em uma única string, formando o texto final da minha história, agora polido e melhorado.


## Projeto (POC) Explorando Dados com JavaScript
### Sort
O método sort é usado para ordenar elementos em um array. Ele pode ser aplicado em diferentes contextos:

- **Ordenar Números:**
   <br> O método sort pode organizar uma sequência de números em ordem crescente. No entanto, por padrão, ele converte os números para strings e os ordena como texto, o que pode levar a resultados inesperados com números. Para garantir a ordenação correta, é melhor usar uma função de comparação.

```javascript
//cria um array de números
let num = [5, 4, 3, 8, 1];
console.log(`Sem ordenar: ${num}`);

//ordena em ordem crescente
num.sort((a, b) => a - b);
console.log(`Ordenado: ${num}`);

/*Saída:
Sem ordenar: 5,4,3,8,1
Ordenado: 1,3,4,5,8
*/
```

- **Ordenar Frutas:**
   <br> Quando o array contém strings, o método sort organiza os elementos em ordem alfabética.

```javascript
//cria um array de frutas
let frutas = ['banana', 'acerola', 'damasco', 'caju'];
console.log(`Sem ordenar: ${frutas}`);

//ordena em ordem alfabética
frutas.sort();
console.log(`Ordenado: ${frutas}`);

/*Saída:
Sem ordenar: banana,acerola,damasco,caju
Ordenado: acerola,banana,caju,damasco
*/

```

### Reduce
O método reduce é utilizado para reduzir um array a um único valor, realizando uma operação acumulativa.

- **Calcular o Custo Total:**
  <br> Suponha que você esta no supermercado e deseja calcular o custo total das frutas que pegou. Você pode usar reduce para somar o valor total, multiplicando o preço de cada fruta pela quantidade comprada.

```javascript
//informações das frutas
let custo = [
    { fruta: "banana", valor: 10, qtd: 6 },
    { fruta: "amora", valor: 1, qtd: 10 },
    { fruta: "acerola", valor: 4, qtd: 10 },
    { fruta: "pessego", valor: 5, qtd: 3 },
    { fruta: "uva", valor: 5, qtd: 11 }
];

const calcularCusto = (item) => item.valor * item.qtd;

//calcula o custo total
let custo_total = custo.reduce((contador, elem_atual) => contador + calcularCusto(elem_atual), 0);
console.log(custo_total);

/*Saída:
180
*/
```
Nesse exemplo, reduce acumula o total ao somar o custo de cada fruta.

- **Encontrar a Fruta Mais Barata e a Mais Cara:**
  <br> Para identificar o custo individual mais barato e mais caro, você pode usar reduce com uma função de comparação.

```javascript
//encontrar a fruta mais barata
let mais_barata = custo.reduce((contador, elem_atual) => contador < mult(elem_atual) ? contador : mult(elem_atual), 1000);
console.log(mais_barata);

/*Saída:
10
*/
```

Para encontrar a fruta mais barata, começamos com o contador em um número bem alto, como 1000. Em seguida, para cada fruta, calculamos o custo total (o preço da fruta multiplicado pela quantidade). Comparamos esse custo com o número que temos. Se o custo da fruta for menor que o número atual, atualizamos o número para esse custo. Ao final, o número será o custo mais baixo encontrado.

```javascript
//encontrar a fruta mais cara
let mais_cara = custo.reduce((contador, elem_atual) => contador > mult(elem_atual) ? contador : mult(elem_atual), 0);
console.log(mais_cara);

/*Saída:
60
*/
```

Para descobrir a fruta mais cara, começamos com o contador valendo 0. Calculamos o custo total de cada fruta da mesma forma. Comparamos esse custo com o número atual, que começa em 0. Se o custo da fruta for maior que o número atual, atualizamos o número para esse custo. No final, o número mostrará o custo mais alto encontrado.

### Spread
O operador spread (...) permite combinar e copiar propriedades de objetos e arrays, evitando duplicação.

- **Combinar Roupas:** 
  <br> Suponha que você queira combinar os itens de dois armários em uma única lista para arrumar uma mala, garantindo que não haja peças repetidas. O operador spread pode ser usado para isso.

```javascript
let armario1 = {
    blusa: "Azul",
    calca: "jeans",
    jaqueta: "branca",
    moletom: "rosa",
    sapato: "branco"
};

let armario2 = {
    blazer: "Azul",
    calca: "social",
    meia: "preta",
    bermuda: "xadrez",
    sapato: "preto"
};

//combina os itens dos dois armários
let mala = { ...armario1, ...armario2 };
console.log(mala);

/*Saída:
{
  blusa: 'Azul',
  calca: 'social',
  jaqueta: 'branca',
  moletom: 'rosa',
  sapato: 'preto',
  blazer: 'Azul',
  meia: 'preta',
  bermuda: 'xadrez'
}
*/

```
Neste exemplo, começamos criando dois objetos, armario1 e armario2, onde listamos as peças de roupa e suas especificações em cada um. Após isso, usamos o operador spread para combinar todos esses itens em um único objeto chamado mala. Se houver peças repetidas entre os dois armários, a peça que aparece por último será a que aparece na lista final. Isso acontece porque o spread adiciona os itens do segundo objeto (armario2) sobre os itens do primeiro (armario1), sobrescrevendo as repetições.
