//Projeto POC 2

/*-----------------------------------
----------------SORT-----------------
-------------------------------------*/

//criei um array
let num = [5, 4, 3, 8, 1]
console.log(`Sem ordenar: ${num}`)

//coloca em ordem crescente
num.sort()
console.log(`Ordenado: ${num}`)


//criei um novo array
let frutas = ['banana', 'acerola', 'damasco', 'caju',]
console.log (`Sem ordenar: ${frutas}`)

//coloca em ordem alfabética
frutas.sort()
console.log (`Ordenado: ${frutas}`)


/*-----------------------------------
---------------REDUCE----------------
-------------------------------------*/

let custo= [
    {fruta: "banana", valor: 10, qtd: 6},
    {fruta: "amora", valor: 1, qtd: 10 },
    {fruta: "acerola", valor: 4, qtd: 10 },
    {fruta: "pessego", valor: 5, qtd: 3 },
    {fruta: "uva", valor: 5, qtd: 11 }
]
 
const mult = (a) => {
    return a.valor * a.qtd;
}

let custo_total = custo.reduce((contador, elem_atual) => contador + mult(elem_atual), 0);
console.log(custo_total);

let mais_barata = custo.reduce((contador, elem_atual) => contador < mult(elem_atual) ? contador : mult(elem_atual), 1000);
console.log(mais_barata);

let mais_cara = custo.reduce((contador, elem_atual) => contador > mult(elem_atual) ? contador : mult(elem_atual), 0);
console.log(mais_cara);



/*-----------------------------------
---------------SPREAD----------------
-------------------------------------*/

let armario1 = {
    blusa: "Azul", 
    calca: "jeans",
    jaqueta: "branca", 
    moletom: "rosa", 
    sapato: "branco", 
}

let armario2 = {
    blazer: "Azul",
    calca: "social",
    meia: "preta",
    bermuda: "xadrez",
    sapato: "preto"
}

let mala = {...armario1, ...armario2}
console.log(mala)