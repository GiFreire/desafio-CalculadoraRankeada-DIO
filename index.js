const vitorias = 100;
const derrotas = 18;

function calcularVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirRank(resultado) {
    let nivel;
    if (resultado < 10) {
        nivel = "Ferro";
    } else if (resultado >= 10 && resultado <= 20) {
        nivel = "Bronze";
    } else if (resultado >= 21 && resultado <= 50) {
        nivel = "Prata";
    } else if (resultado >= 51 && resultado <= 80) {
        nivel = "Ouro";
    } else if (resultado >= 81 && resultado <= 90) {
        nivel = "Diamante";
    } else if (resultado >= 91 && resultado <= 100) {
        nivel = "Lendário";
    } else if (resultado >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Resultado desconhecido";
    }
    return nivel;
}

const resultado = calcularVitorias(vitorias, derrotas);
const nivel = definirRank(resultado);

console.log ("O Herói tem um saldo de " + resultado + " e está no nível " + nivel);
