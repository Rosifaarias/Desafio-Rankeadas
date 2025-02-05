
let jogadores = [
    { heroi: "NOKU", vitorias: 80, derrotas: 10 },
    { heroi: "AZU", vitorias: 45, derrotas: 15 },
    { heroi: "KIRA", vitorias: 12, derrotas: 8 }
];

function calcularSaldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}


for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let resultado = calcularSaldo(jogador.vitorias, jogador.derrotas);
    console.log(`O herói ${jogador.heroi} tem de saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);
}