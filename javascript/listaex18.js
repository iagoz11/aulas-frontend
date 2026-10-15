function transformarStatus(status) {
    const resultado = [];

    for (const concluido of status) {
        resultado.push(concluido ? "Concluído" : "Pendente");
    }

    return resultado;
}

console.log(transformarStatus([true, false, true]));