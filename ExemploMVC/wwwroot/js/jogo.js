
total_pontos_J1 = 0;
total_pontos_J2 = 0;

function resultado() {
    /*
     JOGADOR 1     X JOGADOR 2     RESULTADO
      <=21             <=21        maior pontuação 
       > 21             <=21         jogador 2
       <=21              >21          jogador 1
       >21              >21            2 perdem
       jogador 2           jogador 1   EMPATE
     */

    if (total_pontos_J1 <=21 && total_pontos_J2 <=21) {

        if (total_pontos_J1 == total_pontos_J2)
            document.getElementById("resultado").textContent = "EMPATE";
        else

            if (total_pontos_J1 > total_pontos_J2)
                document.getElementById("resultado").textContent = "JOGADOR 1 GAHOU!";
            else
                document.getElementById("resultado").textContent = "JOGADOR 2 GANHOU!";
    } else {
        if (total_pontos_J1 > 21 && total_pontos_J2 <= 21)
            document.getElementById("resultado").textContent = "JOGADOR2 GANHOU!";

        else
            if (total_pontos_J1 <= 21 && total_pontos_J2 > 21)
                document.getElementById("resultado").textContent = "JOGADOR 1 GANHOU!";
            else
                document.getElementById("resultado").textContent = "SEM VENCENDOR";
    
    }
}

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var cartas1 = document.getElementById("cartas1");
    var nova_carta = valorAleatorio();
    $(cartas1).attr("src", '/images/' + nova_carta + '.png');
    total_pontos_J1 += nova_carta;

    // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent
    document.getElementById("jogador1").textContent = total_pontos_J1;

    // REGRA 21
    if (total_pontos_J1 > 21) {
        parar1();
    }
}

function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');


}
function jogador2() {

    var cartas2 = document.getElementById("cartas2");
    var nova_carta = valorAleatorio();
    $(cartas2).attr("src", '/images/' + nova_carta + '.png');
    total_pontos_J2 += nova_carta;

    document.getElementById("jogador2").textContent = total_pontos_J2;

    // REGRA 21
    if (total_pontos_J2 > 21) {
        parar2();
    }
}

function parar2() {
    document.getElementById("btn_jogador_2").disabled = true;
    document.getElementById("btn_para_2").disabled = true;

    // CALCULAR O RESULTADO FINAL   
    resultado();
}