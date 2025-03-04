function calcularIngredientes() {
    let volumenDeseado = parseFloat(document.getElementById("volumen").value);

    if (isNaN(volumenDeseado) || volumenDeseado <= 0) {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa un volumen válido.";
        return;
    }

    let factor = volumenDeseado / 6.6;

    let ingredientes = {
        "Melaza": (396 * factor).toFixed(2) + " g",
        "Harina de Arroz": (264 * factor).toFixed(2) + " g",
        "Bacillus subtilis replicado": (105.6 * factor).toFixed(2) + " ml",
        "Levadura": (6.6 * factor).toFixed(2) + " g",
        "Bacterias ácido-lácticas": (3.96 * factor).toFixed(2) + " ml",
        "Oxynova": (0.000264 * factor).toFixed(6) + " g",
        "Tierras de diatomeas": (26.4 * factor).toFixed(2) + " g",
        "Bactercol": (2.64 * factor).toFixed(2) + " ml"
    };

    let resultadoHTML = "<h3>Ingredientes necesarios:</h3><ul>";
    for (let ingrediente in ingredientes) {
        resultadoHTML += `<li><b>${ingrediente}:</b> ${ingredientes[ingrediente]}</li>`;
    }
    resultadoHTML += "</ul>";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
