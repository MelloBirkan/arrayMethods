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


