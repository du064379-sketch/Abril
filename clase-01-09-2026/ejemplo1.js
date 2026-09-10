alert ("se conecto correctamente") 
function sumar() {
    alert("funciona correctamente");
    let num1 =parent(document.getElementById("num1").value);
    let num2 = parent(document.getElementById("num2").value);
    let resultado = num1 + num2;
    let mostrar = parent.document.getElementById("resultado");
    mostrar.innerHTML = "suma " + resultado;
    let motrar = parent.document.getElementById("resultado2");
    let matriz ="";
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            matriz += "*";

        }
        matriz += "<br>";
    }
    motrar.innerHTML = matriz;
}