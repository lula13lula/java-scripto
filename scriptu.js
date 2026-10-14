// calculadora
 let numero1 = Number(prompt(" Digite o primeiro número: "))
 let numero2 = Number(prompt(" Digite o segundo número: "))
 let operacao = prompt(" Informe a operação: \n[+] \n[-] \n[x] \n[/]")

 if (operacao== "+" ){
     console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
     alert(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
 }
 if (operacao== "-" ){
    console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
    alert(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
}
if (operacao== "x"){
    console.log (numero1 + " x "+ numero2 + " = " + (numero1 * numero2))
    alert(numero1 + " x "+ numero2 + " = " + (numero1 * numero2))
}
if (operacao== "/"){
    console.log (numero1 + " / " + numero2 + " = " + (numero1/numero2))
    alert(numero1 + " / " + numero2 + " = " + (numero1/numero2))
}
