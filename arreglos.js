var dias_semana = ["Lunes","Martes","Miercoles","Jueves","viernes","sabado","domingo"];
dias_semana[7]="Dia Osvaldo";
console.log(dias_semana);
for( let i=0; i < dias_semana.length; i++) {
    //agregarItem('.lista_semana_for',dias_semana[i]+" indice "+i);
    console.log(dias_semana[i].split('e'))
    const texto = dias_semana[i].charAt(i).toLowerCase()+" indice "+i;
    document.querySelector('.lista_semana_for').append(crearItem(texto))
}

dias_semana.forEach((dia, i)=> {
   // agregarItem('.lista_semana_for_each',dia+" indice "+i);
    document.querySelector('.lista_semana_for_each').append(crearItem(dia.toUpperCase()+" indice "+i))
})

// function agregarItem(nombre_contenedor,texto) {
//     let lista_item = document.createElement('li');
//     lista_item.append(document.createTextNode(texto));
//     document.querySelector(nombre_contenedor).append(lista_item)
// }

/**
 * Crea un item the lista utilizando 
 * @param {*} texto 
 * @returns {HTMLElement}
 */
function crearItem(texto) {
    let item = document.createElement('li');
    item.append(document.createTextNode(texto));
    return item;
}


