let canvas = document.getElementById("snake"); /* obtendo elemento do Id snake e canvas recebendo esse elemento */
let context =canvas.getContext("2d");/* obtendo o contexto do canvas em 2d */
let box =32;      /* caixa com 32 pixel */
let snake =[];     /* criando um array vazio  */
snake[0] = {
    x:8*box, y: 8*box 
}   /* desenhando uma cobra em x e y, fazendo que a posicao 0 receba x e y em plano cartesiano */
let direction ="right"; /* variavel direcao */

function criarBG() {
    context.fillStyle="blue";
    context.fillRect(0, 0, 16*box,16*box );

} /* criando a funcao da caixa (plano de fundo) e preenchedo a cor em azul */
function criarCobrinha(){
for( i=0; i<snake.length; i++){
     context.fillStyle="green";
     context.fillRect(snake[i].x ,snake[i].y , box ,box)
   }/* criando a cobrinha */

}

document.addEventListener('keydown',update);

function update(event) { 
    if(event.keyCode == 37 && direction != "right" ) direction="left";
    if(event.keyCode == 38 && direction != "down" ) direction="up";
    if(event.keyCode == 39 && direction != "left" ) direction="right";
    if(event.keyCode == 40 && direction != "up" ) direction="down";
     
}

function iniciarJogo(){
    if(snake[0].x >15 *box && direction == "right") snake[0].x=0;
    if(snake[0].x <0  && direction == "left") snake[0].x=16 *box;
    if(snake[0].y >15 *box && direction == "down") snake[0].y=0;
    if(snake[0].y <0   && direction == "up") snake[0].y=16 *box;
    criarBG(); 
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if(direction == "right") snakeX+=box;
    if(direction == "left") snakeX-=box;
    if(direction == "up") snakeY-=box;
    if(direction == "down") snakeY+=box;

    snake.pop();

    let newHead = { 
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);







