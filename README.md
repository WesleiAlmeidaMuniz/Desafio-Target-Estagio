1-) Observe o trecho de código abaixo:
```
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```

Ao final do processamento, qual será o valor da variável SOMA?

[Resposta da Questão 1](desafio1.js) = 91


2-) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

[Resposta da Questão 2](desafio2.js)

3-) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, `9`

b) 2, 4, 8, 16, 32, 64, `128`

c) 0, 1, 4, 9, 16, 25, 36, `49`

d) 4, 16, 36, 64, `100`

e) 1, 1, 2, 3, 5, 8, `13`

f) 2,10, 12, 16, 17, 18, 19, `200`


4-) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

```
Primeira ida à sala:

- Ligue o primeiro interruptor por 7 minutos e depois desligue-o e ligue o segundo interruptor.
- Deixe o terceiro interruptor desligado durante todo o processo.

Retorne à sala com os interruptores e siga estas observações:

Se uma lâmpada estiver acesa, então o interruptor correspondente é o segundo.
Se uma lâmpada estiver apagada e estiver fria ao toque, então o interruptor correspondente é o primeiro.
Se uma lâmpada estiver apagada, mas ainda estiver quente, então o interruptor correspondente é o terceiro.

```

5-) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

[Resposta da Questão 5](desafio3.js)

