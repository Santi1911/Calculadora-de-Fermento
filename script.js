function calcularIngredientes() {
    let volumenDeseado = parseFloat(document.getElementById("volumen").value);

    if (isNaN(volumenDeseado) || volumenDeseado <= 0) {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa un volumen válido.";
        return;
    }

    let factor = volumenDeseado / 6.6;

    let ingredientes = {
        "Melaza": 396 * factor,
        "Harina de Arroz": 264 * factor,
        "Bacillus subtilis replicado (ml)": 105.6 * factor,
        "Levadura": 6.6 * factor,
        "Bacterias ácido-lácticas (ml)": 3.96 * factor,
        "Oxynova (mg)": 0.000264 * factor,
        "Tierras de diatomeas": 26.4 * factor,
        "Bactercol (ml)": 2.64 * factor
    };

    let resultadoHTML = "<h3>Ingredientes necesarios:</h3><ul>";
    for (let ingrediente in ingredientes) {
        resultadoHTML += `<li><b>${ingrediente}:</b> ${ingredientes[ingrediente].toFixed(3)}</li>`;
    }
    resultadoHTML += "</ul>";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
