// codigos do personagem 
let yPersonagem = 363;
let xPersonagem = 130;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem(){
  image(imagemPersonagem , xPersonagem, yPersonagem , 40 , 40 )
}

function movimentaPersonagem(){
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 3;
  }if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yPersonagem += 3;
    }
  }
}

function podeSeMover(){
 return yPersonagem < 363;
}

function verificaColisao(){
  
  for (let i = 0; i < imagemsCarros.length; i++){
    colisao = collideRectCircle( xCarros[i], yCarros[i], widthCarros[i], heightCarros[i], xPersonagem, yPersonagem, 15 )
    if(colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play()
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
  
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function voltaAtorPosicaoInicial(){
  yPersonagem = 364;
  }

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 25)
}

function marcaPonto(){
  if(yPersonagem < 15){
    meusPontos += 1;
    somDoPonto.play()
    voltaAtorPosicaoInicial();
  }
}
