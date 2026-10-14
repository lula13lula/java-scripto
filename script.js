let nome= "Arthur"
let idade= 67
let cidade= "Londrina"
let aura = 670000
let dias = 236
console.log(aura)
let hobbie= " eu gosto de fazer coisas que eu gosto"
console.log ( " Oi meu nome é " + nome + ", eu tenho " + idade + " anos e " + dias + ",\n moro em " + cidade + hobbie + ", e minha aura é igual a \n" + aura)
console.log ( aura )
aura= aura*dias
console.log ( aura )
const valorMinimo = 50;
let subtotal = 10000
let temDesconto = subtotal > valorMinimo
 console.log (temDesconto)
  //aula 2
  if (aura >= 10000) {
     console.log ("Você foda")
  } else {
      console.log ("Você é um betinha")
  }
  console.log ("minha aura é " + aura )
  //testezinho
  let pontos = 1000
  let AnosNaEmpresa = 2
  if ( pontos <= 99 && pontos >= 0) {
    console.log ("Cliente Bronze")
} else if ( pontos <= 499 && pontos >= 100){
    console.log (" Cliente Prata")
} 
  else if ( pontos <=999 && pontos >= 500){
      console.log ("Cliente Ouro")
  }
  else if ( pontos >= 1000 && AnosNaEmpresa >= 1){
      console.log ("Cliente Diamante")
  }
   console.log ("Eu tenho " + pontos + " e tenho " + AnosNaEmpresa + " anos na empresa")
    // for (let i = 1; i <=50000; i++){}

  //
  let tentativas = 3
    while (tentativas > 0){
         console.log ('Restam ${tentativas}')
        tentativas--;
    }for (let i = 50; i >=1; i--){
        console.log (i)
    }