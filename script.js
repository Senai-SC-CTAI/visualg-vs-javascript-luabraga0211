function verificarMes() {
    const mesDigitado = parseInt(document.getElementById("mes").value);
    let resultado = "";

    switch (mesDigitado) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            resultado = "O mês possui 31 dias!";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            resultado = "O mês possui 30 dias!";
            break;
        case 2:
            resultado = "O mês possui 28 dias!";
            break;
        default:
            resultado = "Número inválido!";
    }
document.getElementById("resultado").innerHTML = resultado;
}
