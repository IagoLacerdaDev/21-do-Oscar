var lescolhido = document.getElementById('play2')
var lvcescolhido = document.getElementById('play1')
var btn1 = document.getElementById('soma1'),
    btn2 = document.getElementById('soma2'),
    btn3 = document.getElementById('soma3');
    btn4 = document.getElementById('soma01');
    btn5 = document.getElementById('soma02');
    btn6 = document.getElementById('soma03');

var par = 1;
var num = 0;

btn1.value = 1;
btn2.value = 2;
btn3.value = 3;
btn4.value = 1;
btn5.value = 2;
btn6.value = 3;

function btn2click(param) {
    btn1.value = +param + 1;
    btn2.value = +param + 2;
    btn3.value = +param + 3;
    btn4.value = +param + 1;
    btn5.value = +param + 2;
    btn6.value = +param + 3;
    lvcescolhido.innerHTML = param;  
    lescolhido.innerHTML = param;  
    
}

btn1.onclick = () => {
    num = btn1.value;
    if (btn1.value == num && num == 21) alert('Jogador 1 venceu! Alcançou 21!');
    if (btn1.value > 21 && num > 21) alert('Jogador 1 perdeu! Ultrapassou 21 e o Jogador 2 venceu!');
    btn2click(btn1.value)    
}

btn2.onclick = () => {
    num = btn2.value;
    if (btn2.value == num && num == 21) alert('Jogador 1 venceu! Alcançou 21!');
    if (btn2.value > 21 && num > 21) alert('Jogador 1 perdeu! Ultrapassou 21 e o Jogador 2 venceu!');
    btn2click(btn2.value)
}

btn3.onclick = () => {
    num = btn3.value;
    if (btn3.value == num && num == 21) alert('Jogador 1 venceu! Alcançou 21!');
    if (btn3.value > 21 && num > 21) alert('Jogador 1 perdeu! Ultrapassou 21 e o Jogador 2 venceu!');
    btn2click(btn3.value)
}
btn4.onclick = () => {
    num = btn1.value;
    if (btn1.value == num && num == 21) alert('Jogador 2 venceu! Alcançou 21!');
    if (btn1.value > 21 && num > 21) alert('Jogador 2 perdeu! Ultrapassou 21 e o Jogador 1 venceu!');
    btn2click(btn4.value)    
}
btn5.onclick = () => {
    num = btn2.value;
    if (btn2.value == num && num == 21) alert('Jogador 2 venceu! Alcançou 21!');
    if (btn2.value > 21 && num > 21) alert('Jogador 2 perdeu! Ultrapassou 21 e o Jogador 1 venceu!');
    btn2click(btn5.value)
}
btn6.onclick = () => {
    num = btn3.value;
    if (btn3.value == num && num == 21) alert('Jogador 2 venceu! Alcançou 21!');
    if (btn3.value > 21 && num > 21) alert('Jogador 2 perdeu! Ultrapassou 21 e o Jogador 1 venceu!');
    btn2click(btn6.value)
}













// function computador() {
//     var minimo = btn1.value;
//     var maximo = btn3.value;

//     min = Math.ceil(minimo);
//     max = Math.floor(maximo);
    
//     var escolhido = Math.floor(Math.random() * (max - min)) + min;
//     btn4.value = btn1.value;
//     btn5.value = btn2.value;
//     btn6.value = btn3.value;

//     if (btn1.value == 21) escolhido = 21;
//     if (btn2.value == 21) escolhido = 21;
//     if (btn3.value == 21) escolhido = 21;
//     if (escolhido == 21) {
//         btn1.hidden = true;
//         btn2.hidden = true;
//         btn3.hidden = true;
//         alert('Você perdeu, a computador escolheu 21 e venceu!');
//     }

//     //aqui o computador escolhe e atualiza valores a serem escolhidos    
//     lescolhido.innerHTML = escolhido;
//     btn1.value = escolhido + 1;
//     btn2.value = escolhido + 2;
//     btn3.value = escolhido + 3;
//     par++;    
//     flush()
// }

