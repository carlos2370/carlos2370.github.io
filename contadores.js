function incrementar(contador) {
    let valor = document.getElementById("valor" + contador).textContent;
    valor++;
    document.getElementById("valor" + contador).textContent = valor;
}

function decrementar(contador) {
    let valor = document.getElementById("valor" + contador).textContent;
    if (valor > 0) {
        valor--;
        document.getElementById("valor" + contador).textContent = valor;
    }
}

function resetear() {
    document.getElementById("valor1").textContent = 0;
    document.getElementById("valor2").textContent = 0;
    document.getElementById("valor3").textContent = 0;
}