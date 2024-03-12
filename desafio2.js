function sequenciaFibonacci (valor) {
    if(typeof valor == 'undefined' || 
        valor < 0 || 
        typeof valor == 'string' || 
        typeof valor == 'boolean')
    {
        return "Digite um valor apartir de 0"
    }

    let valor1 = 0;
    let valor2 = 1;
    let resultado;

    while (valor > valor2){
        resultado = valor1 + valor2;
        valor1 = valor2;
        valor2 = resultado;
    }

    if(valor === resultado || valor === 0 || valor === 1){
        return `O valor ${valor} faz parte da sequência de Fibonacci`
    } else {
        return `O valor ${valor} não faz parte da sequência de Fibonacci`
    }
}

console.log(sequenciaFibonacci(5))