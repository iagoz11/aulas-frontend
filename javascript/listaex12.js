const notas = [9.0, 8.0, 7.0, 6.0];
const filtraNotas = (listaNotas) => {
    for(const nota of listaNotas){
        if(nota >= 7){
            console.log(nota);
        }
    }
};
filtraNotas(notas);