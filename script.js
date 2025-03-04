function calcularIngredientes() {
    let volumenInput = document.getElementById("volumen").value.replace(",", "."); // Reemplaza coma por punto
    let volumenDeseado = parseFloat(volumenInput);

    if (isNaN(volumenDeseado) || volumenDeseado <= 0) {
        document.getElementById("resultado").innerHTML = "<p class='error'>⚠️ Ingresa un volumen válido.</p>";
        return;
    }

    let factor = volumenDeseado / 6.6;

    let ingredientes = {
        "Melaza": (396 * factor).toFixed(2) + " Gr",
        "Harina de Arroz": (264 * factor).toFixed(2) + " Gr",
        "Bacillus subtilis replicado": (105.6 * factor).toFixed(2) + " ml",
        "Levadura": (6.6 * factor).toFixed(2) + " Gr",
        "Bacterias ácido-lácticas": (3.96 * factor).toFixed(2) + " ml",
        "Oxynova": (0.000264 * factor).toFixed(6) + " Gr",
        "Tierras de diatomeas": (26.4 * factor).toFixed(2) + " Gr",
        "Bactercol": (2.64 * factor).toFixed(2) + " ml"
    };

    let resultadoHTML = "<h3>🧪 Ingredientes necesarios:</h3><table>";
    for (let ingrediente in ingredientes) {
        resultadoHTML += `
            <tr>
                <td><b>${ingrediente}:</b></td>
                <td>${ingredientes[ingrediente]}</td>
            </tr>`;
    }
    resultadoHTML += "</table>";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
