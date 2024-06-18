function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const totalCarne = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const totalFrango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const totalLinguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2)
    const totalRefrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const totalCerveja = (homens * 0.8) + (mulheres * 0.5);

    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `
        <h2>Resultados</h2>
        <p><strong>Total de Carne:</strong> ${totalCarne.toFixed(2).replace('.', ',')} kg</p>
        <p><strong>Total de Frango:</strong> ${totalFrango.toFixed(2).replace('.', ',')} kg</p>
        <p><strong>Total de Linguiça:</strong> ${totalLinguica.toFixed(2).replace('.', ',')} kg</p>
        <p><strong>Total de Cerveja:</strong> ${totalCerveja.toFixed(2).replace('.', ',')} litros</p>
        <p><strong>Total de Refrigerante:</strong> ${totalRefrigerante.toFixed(2).replace('.', ',')} litros</p>
    `;
}
