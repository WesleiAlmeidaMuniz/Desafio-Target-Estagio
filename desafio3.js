function inverterString(string){
    if(typeof string == 'undefined' || typeof string == 'number' || typeof string == 'boolean'){
        return `Digite uma frase`
    }

    let stringInvertida = "";
    
    for (let index = string.length - 1; index >= 0; index--) {
        stringInvertida += string[index];
    }

    return stringInvertida
}

console.log(inverterString("Weslei Almeida Muniz"));