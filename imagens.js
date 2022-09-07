
// codigo das imagens

let imagemEstrada;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemEstrada = loadImage("imagens/estrada-6pisos.png")
  imagemPersonagem = loadImage("imagens/pngegg.png")
  imagemCarro1 = loadImage("imagens/carro1-removebg-preview.png")
  imagemCarro2 = loadImage("imagens/carro2.png")
  imagemCarro3 = loadImage("imagens/carro3 .png")
  imagemCarro4 = loadImage("imagens/carro4.png")
  imagemCarro5 = loadImage("imagens/carro5.png")
  imagemCarro6 = loadImage("imagens/carro6.png")
  imagemsCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  
 somDaTrilha = loadSound("sons/trilha.mp3")
 somDaColisao = loadSound("sons/colidiu.mp3")
 somDoPonto = loadSound("sons/pontos.wav") 
}
