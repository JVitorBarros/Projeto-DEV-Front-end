 Exercício 1 – Números Primos em Faixa
js
Copiar
Editar
function primosEntre(inicio, fim) {
  // Sua lógica aqui
}
🔸 Exemplo: primosEntre(10, 30)
🔸 Saída esperada: [11, 13, 17, 19, 23, 29]

📌 Exercício 2 – Palíndromo
js
Copiar
Editar
function ehPalindromo(texto) {
  // Sua lógica aqui
}
🔸 Exemplo: ehPalindromo("Ame a ema")
🔸 Saída esperada: true

📌 Exercício 3 – Soma de Dígitos Recursiva
js
Copiar
Editar
function somaDigitos(num) {
  // Sua lógica aqui
}
🔸 Exemplo: somaDigitos(942)
🔸 Saída esperada: 6

📌 Exercício 4 – Frequência de Palavras
js
Copiar
Editar
function contarPalavras(frase) {
  // Sua lógica aqui
}
🔸 Exemplo: contarPalavras("olá mundo olá chat")
🔸 Saída esperada: { olá: 2, mundo: 1, chat: 1 }

📌 Exercício 5 – Fatorial com Memoização
js
Copiar
Editar
function fatorial(n, memo = {}) {
  // Sua lógica aqui
}
🔸 Exemplo: fatorial(6)
🔸 Saída esperada: 720

📌 Exercício 6 – Agrupar Anagramas
js
Copiar
Editar
function agruparAnagramas(palavras) {
  // Sua lógica aqui
}
🔸 Exemplo: agruparAnagramas(["amor", "roma", "carro", "arco", "corra"])
🔸 Saída esperada: [["amor", "roma"], ["carro", "corra"], ["arco"]]

📌 Exercício 7 – Gerador de Fibonacci com Closure
js
Copiar
Editar
function fibonacciGenerator() {
  // Sua lógica aqui
}
🔸 Uso:

js
Copiar
Editar
const fib = fibonacciGenerator();
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
📌 Exercício 8 – Validador de CPF (Simplificado)
js
Copiar
Editar
function validarCPF(cpf) {
  // Sua lógica aqui
}
🔸 Exemplo: validarCPF("529.982.247-25")
🔸 Saída esperada: true

📌 Exercício 9 – Sudoku Válido
js
Copiar
Editar
function sudokuValido(tabuleiro) {
  // Sua lógica aqui
}
🔸 Entrada: matriz 9x9 representando o Sudoku
🔸 Saída: true ou false

📌 Exercício 10 – Avaliador de Expressão Matemática (sem eval)
js
Copiar
Editar
function avaliarExpressao(expr) {
  // Sua lógica aqui
}
🔸 Exemplo: avaliarExpressao("3 + 5 * (2 - 1)")
🔸 Saída esperada: 8

Se quiser, posso te passar a resolução passo a passo de algum deles depois que você tentar. Me avisa qual você quer resolver primeiro que eu corrijo e comento se quiser.



Você disse:
faça 30 exercicios nivel facil/ medio e dificil

O ChatGPT disse:
Claro! Abaixo estão 30 exercícios de funções em JavaScript, divididos em três níveis: fácil (10), médio (10) e difícil (10). Esses exercícios vão te ajudar a fortalecer lógica de programação, uso de funções, e manipulação de dados.

🟢 Nível Fácil (10 exercícios)
Retornar o dobro de um número

js
Copiar
Editar
function dobro(n) { }
Verificar se um número é par

js
Copiar
Editar
function ehPar(n) { }
Calcular a média de 3 números

js
Copiar
Editar
function media(a, b, c) { }
Converter Celsius para Fahrenheit

js
Copiar
Editar
function celsiusParaFahrenheit(celsius) { }
Contar o número de vogais em uma string

js
Copiar
Editar
function contarVogais(str) { }
Reverter uma string

js
Copiar
Editar
function inverterString(str) { }
Verificar se um número é positivo, negativo ou zero

js
Copiar
Editar
function verificarNumero(n) { }
Calcular o quadrado de um número

js
Copiar
Editar
function quadrado(n) { }
Converter minutos em horas e minutos

js
Copiar
Editar
function converterTempo(minutos) { }
Concatenar nome e sobrenome

js
Copiar
Editar
function nomeCompleto(nome, sobrenome) { }
🟡 Nível Médio (10 exercícios)
Verificar se uma palavra é palíndromo

js
Copiar
Editar
function ehPalindromo(palavra) { }
Retornar os números pares de um array

js
Copiar
Editar
function filtrarPares(array) { }
Fatorial de um número (recursivo)

js
Copiar
Editar
function fatorial(n) { }
Calcular o número de ocorrências de uma letra

js
Copiar
Editar
function contarLetra(str, letra) { }
Substituir espaços por hífens

js
Copiar
Editar
function substituirEspacos(str) { }
Somar todos os números de um array

js
Copiar
Editar
function somarArray(arr) { }
Verificar se todos os números de um array são positivos

js
Copiar
Editar
function todosPositivos(arr) { }
Gerar uma string com n repetições de um caractere

js
Copiar
Editar
function repetirChar(char, vezes) { }
Converter uma frase em formato título (primeira letra maiúscula)

js
Copiar
Editar
function titulo(frase) { }
Contar palavras em uma string

js
Copiar
Editar
function contarPalavras(frase) { }
🔴 Nível Difícil (10 exercícios)
Gerar os n primeiros números da sequência de Fibonacci

js
Copiar
Editar
function fibonacci(n) { }
Verificar se dois arrays são iguais

js
Copiar
Editar
function arraysIguais(a1, a2) { }
Agrupar palavras por anagramas

js
Copiar
Editar
function agruparAnagramas(palavras) { }
Verificar se uma string contém todos os caracteres únicos

js
Copiar
Editar
function caracteresUnicos(str) { }
Calcular o MDC (máximo divisor comum)

js
Copiar
Editar
function mdc(a, b) { }
Validar formato de e-mail

js
Copiar
Editar
function validarEmail(email) { }
Flatten: transformar um array aninhado em um só nível

js
Copiar
Editar
function flatten(arr) { }
Criar um gerador de ID incremental (closure)

js
Copiar
Editar
function criarGeradorID() { }
Verificar se uma matriz é simétrica (matriz espelho)

js
Copiar
Editar
function matrizSimetrica(matriz) { }
Avaliador simples de expressões matemáticas (sem eval)

js
Copiar
Editar
function avaliarExpressao(expr) { }