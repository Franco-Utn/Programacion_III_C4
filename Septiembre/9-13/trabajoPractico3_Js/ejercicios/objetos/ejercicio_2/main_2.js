const Libro = {
    titulo: prompt("Escribe el titulo de la obra: "),
    autor: prompt("Escribe el autor de la obra: "),
    anio: prompt("Escribe el año de la obra: "),
    validarVejez: function(){
        const currentYear = new Date().getFullYear(); // Año actual
        return (currentYear - this.anio) > 10;
    }
}

console.log(Libro.titulo,Libro.autor, Libro.anio, "El libro es antiguo?",Libro.validarVejez())