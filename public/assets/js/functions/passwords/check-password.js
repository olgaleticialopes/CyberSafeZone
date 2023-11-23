function verificarForca() {
    const senha = getInputValue("senha");
    const resultado = getElement("resultado");
    const forca = calcularForca(senha);
    const estimativa = estimarTempoQuebra(senha, forca);

    const forcaTexto = getForcaTexto(forca);
    const color = getColorForForca(forca);
    const resultadoHtml = `<span style="color: ${color}">${forcaTexto}</span><br>Tempo estimado para quebrar: ${estimativa}`;

    setResult(resultado, resultadoHtml);
}


function calcularForca(senha) {
    const comprimentoMinimo = 6;
    const possuiMaiusculas = /[A-Z]/.test(senha);
    const possuiMinusculas = /[a-z]/.test(senha);
    const possuiCaracteresEspeciais = /[!@#$%^&*]/.test(senha);

    let forca = 0;

    if (senha.length >= comprimentoMinimo) forca++;
    if (possuiMaiusculas) forca++;
    if (possuiMinusculas) forca++;
    if (possuiCaracteresEspeciais) forca++;

    return forca;
}


function getForcaTexto(forca) {
    return forca === 4 ? "Forte" : forca === 3 ? "Média" : "Fraca";
}


function estimarTempoQuebra(senha, forca) {
    //a senha esta tendo muitas tentativas por segundo entao a quantidade de horas para quebrar as senhas diminuem
    const tentativasPorSegundo = 9e9;
    const conjuntoCaracteres = 94;
    const complexidadeFator = 0.01;
    const entropia = calcularEntropia(senha);
    const entropiaFator = 0.1;

    const tempoEstimadoSegundos = Math.pow(conjuntoCaracteres, senha.length) / (2 * tentativasPorSegundo) * 
        (1 + complexidadeFator * forca + entropiaFator * entropia);

    return formatarTempoEstimado(tempoEstimadoSegundos);
}

function calcularEntropia(senha) {
    const caracteresUnicos = [...new Set(senha)].length;
    return caracteresUnicos;
}


function formatarTempoEstimado(tempoEstimadoSegundos) {
    const minutos = Math.floor(tempoEstimadoSegundos / 60);
    const horas = minutos / 60; // Converter minutos para horas
    const dias = horas / 24; // Converter horas para dias
    const meses = dias / 30.44; // Média de dias em um mês
    const anos = meses / 12; // Média de meses em um ano

    let tempoFormatado;

    if (anos >= 1) {
        tempoFormatado = anos.toFixed(1) + (anos === 1 ? " ano" : " anos");
    } else if (meses >= 1) {
        tempoFormatado = meses.toFixed(1) + (meses === 1 ? " mês" : " meses");
    } else if (dias >= 1) {
        tempoFormatado = dias.toFixed(1) + (dias === 1 ? " dia" : " dias");
    } else {
        const horasArredondadas = Math.round(horas * 100) / 100;
        tempoFormatado = horasArredondadas.toFixed(2) + " horas";
    }

    return tempoFormatado;

}


function getElement(id) {
    return document.getElementById(id);
}


function getInputValue(id) {
    return getElement(id).value;
}


function setResult(element, resultadoHtml) {
    element.innerHTML = resultadoHtml;
}


function getColorForForca(forca) {
    switch (forca) {
        case 4:
            return "green";
        case 3:
            return "orange";
        default:
            return "red";
    }
}
