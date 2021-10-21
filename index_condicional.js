// var nota = prompt("Ingrese una nota:");
// var nota2 = prompt("Ingresa una segunda nota:");
// var mensaje = "";
function imprimirNotas(nota,nota2) {
    console.log("nota: ",nota);
    console.log("nota2: ",nota2);
}
// //alert(nota+nota2);

// imprimirNotas();
// nota = parseInt(nota);
// nota2 = parseInt(nota2);
// imprimirNotas();
// Y (and) &&
// O (or) ||
// negar (not) !

// OPERADOR Y (and) &&
// valor1    y      valor 2  resultado de  && 
// verdadero y  verdadero -> verdadero 
// verdadero y falso      -> falso
// falso     y verdadero  -> falso
// falso     y falso      -> falso


// OPERADOR O (and) ||
// valor1    o      valor 2  resultado de  ||
// verdadero o verdadero ->  verdadero
// verdadero o falso      -> verdadero
// falso     o verdadero  -> verdadero
// falso     o falso      -> falso

// OPERADOR Negacion (not) !
// valor1  negado   resultado de  !
// verdadero negado  ->  falso
// falso     negado  -> verdadero


// Nuestra nota tien que estar entre [0,1,2,3,4,5,6,7,8,9,10]

// alert((nota<=10));
// alert(nota>=0);

// if ((nota<=10 && nota>=0)) {
//     if (nota >= 6) {
//         mensaje = "Aprobado";
//         alert("Felicitaciones!!");
//         if (nota == 10) { 
//             alert("La Maxima Nota!!");
//         }
//     } else {
//         if (nota != 3) { 
//             mensaje="La nota NO es 3!";
//         }
//         if (nota < 4 ) {
//             mensaje = "Oh NO!";
//         }
//         mensaje = "Desaprobado!!";
//     }
// }

// alert(mensaje);

var suma = function(primera_nota,segunda_nota) { 
    if (isNaN(primera_nota)) { primera_nota = 0;}
    if (isNaN(segunda_nota)) { segunda_nota = 0;}
    return primera_nota + segunda_nota
};

function sumarNotas(){
    let nota = parseInt(document.querySelector('#nota_1').value);    
    let nota2 = parseInt(document.querySelector('#nota_2').value);
    // imprimirNotas(nota,nota2);
    // nota = parseInt(nota);
    // nota2 = parseInt(nota2);
    // imprimirNotas(nota,nota2);
    document.querySelector('.suma').innerHTML = suma(nota,nota2);
}
