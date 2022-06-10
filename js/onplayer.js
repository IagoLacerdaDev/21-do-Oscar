var lescolhido = document.getElementById('comp')
var lvcescolhido = document.getElementById('play1')
var resulta = document.getElementById('resultado')
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

function btn2click(param) {
    btn1.value = +param + 1;
    btn2.value = +param + 2;
    btn3.value = +param + 3;
    lvcescolhido.innerHTML = param;    
    computador();
}

btn1.onclick = () => {
    num = btn1.value;
    if (btn1.value == num && num == 21) alert('Jogador Venceu! Alcançou 21!');
    if (btn1.value > 21 && num > 21) alert('Jogador Perdeu! Ultrapassou 21!');
    btn2click(btn1.value)    
}

btn2.onclick = () => {
    num = btn2.value;
    if (btn2.value == num && num == 21) alert('Jogador Venceu! Alcançou 21!');
    if (btn2.value > 21 && num > 21) alert('Jogador Perdeu! Ultrapassou 21!!');
    btn2click(btn2.value)
}

btn3.onclick = () => {
    num = btn3.value;
    if (btn3.value == num && num == 21) alert('Jogador Venceu! Alcançou 21!');
    if (btn3.value > 21 && num > 21) alert('Jogador Perdeu! Ultrapassou 21!');
    btn2click(btn3.value)
}

function computador() {
    var minimo = btn1.value;
    var maximo = btn3.value;

    min = Math.ceil(minimo);
    max = Math.floor(maximo);
    
    var escolhido = Math.floor(Math.random() * (max - min)) + min;
    btn4.value = btn1.value;
    btn5.value = btn2.value;
    btn6.value = btn3.value;

    if (btn1.value == 21) escolhido = 21;
    if (btn2.value == 21) escolhido = 21;
    if (btn3.value == 21) escolhido = 21;
    if (escolhido == 21) {
        btn1.hidden = true;
        btn2.hidden = true;
        btn3.hidden = true;
        alert('Você perdeu!O computador escolheu 21 e venceu!!');
    }

    //aqui o computador escolhe e atualiza valores a serem escolhidos    
    setTimeout(() => {
        
   ; lescolhido.innerHTML = escolhido;
    btn1.value = escolhido + 1;
    btn2.value = escolhido + 2;
    btn3.value = escolhido + 3;
    par++;    
    flush()

} , 1500)
}

