let story = "No último fim de semana, fiz literalmente a jornada mais épica da minha vida, digna de uma verdadeira aventura. Tudo começou quando decidi literalmente atravessar as vastas planícies do continente, seguindo o lendário Caminho das Sete Estrelas, conhecido por conectar as terras do Leste aos campos verdes da Velha Midgar. O percurso começa nas Colinas de Kalm, com um céu dourado ao amanhecer, e já logo no início, percebi que não seria uma jornada comum. O caminho serpenteava por montanhas e florestas densas, repletas de criaturas que porra pareciam saídas de um pesadelo. Mas, ao longe, a visão das Estepes Eternas me deu forças para continuar. O cheiro da grama e o som das águas correndo pelas pequenas quedas d’água fizeram com que o cansaço desaparecesse, ainda que momentaneamente. Fiz minha primeira parada na famosa Caverna de Cristal, onde aproveitei para capturar a beleza surreal do brilho dos cristais que emergem das paredes rochosas. Depois de um breve descanso, segui em frente, literalmente consciente de que o caminho ainda era longo. A próxima etapa foi cruzar a icônica Ponte do Amanhecer. O sol já estava alto, e a ponte parecia se estender infinitamente, suspensa sobre um vasto abismo. A vista era de tirar o fôlego, e foi ali que senti o verdadeiro peso da missão, incompreensivelmente sabendo que a cidade de Junon ainda me esperava muito à frente. Após horas de caminhada, já com o sol se pondo, finalmente cheguei às margens do Grande Lago Esmaralda . O reflexo das estrelas começava a aparecer na água tranquila, e por um instante, tudo parecia em paz. Mas sabia que o destino final, a Grande Torre de Nyssa, ainda estava literalmente a alguns quilômetros de distância. Ao cair da noite, completei a jornada, atravessando literalmente as muralhas da Torre. Uma sensação de conquista me preencheu. A aventura tinha sido árdua, mas cada passo valeu literalmente a pena."

let storyWords = story.split(' ');
let unnecessaryWord = 'literalmente';
let misspelledWord = 'Esmaralda';
let badWord = 'porra';
let count = 0;
storyWords.forEach(word => {
  count++;
})
console.log(count);
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
})
storyWords = storyWords.map(word => {
  return word === misspelledWord ? "Esmeralda" : word;
})
const badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
})
console.log(badWordIndex);
storyWords[badWordIndex] = "really";
const lengthCheck = storyWords.every(word => {
  return word.length < 20;
})
console.log(lengthCheck);
const bigWordIndex = storyWords.findIndex(word => {
  return word.length >= 20;
})
console.log(storyWords[bigWordIndex]);
storyWords[bigWordIndex] = "estranhamente"
console.log(storyWords[bigWordIndex]);
console.log(storyWords.join(" "))
