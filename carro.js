// codigo do carro

// listas com os valores dos carros
let yCarros = [34, 86, 141, 213, 256, 308]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let xCarros = [600, 600, 600, 600, 600, 600];
let widthCarros = [60, 55, 60, 90, 110, 65]
let heightCarros = [50, 45, 50, 50, 55, 45]
    
function mostraCarro(){
  for (let i = 0; i < imagemsCarros.length; i++){
  image(imagemsCarros[i], xCarros[i], yCarros[i], widthCarros[i], heightCarros[i])
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemsCarros.length; i ++){
       xCarros[i] -=velocidadeCarros[i];
  }
}

function loopMovimentoCarro(){
  if(xCarros[0] < -50){
    xCarros[0] = 600
  }
  if(xCarros[1] < -50){
    xCarros[1] = 600
  }
  if(xCarros[2] < -50){
    xCarros[2] = 600
  }
   if(xCarros[3] < -60){
    xCarros[3] = 600
  }
  if(xCarros[4] < -70){
    xCarros[4] = 600
  }
  if(xCarros[5] < -60){
    xCarros[5] = 600
  }
}

