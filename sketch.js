function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraPersonagem()
  mostraCarro()
  movimentaCarro()
  movimentaPersonagem()
  loopMovimentoCarro()
  verificaColisao()
  incluiPontos()
  marcaPonto()
  
}




