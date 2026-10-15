function calcularBonus(salarios) {
    let gastoTotal = 0;

    for (const salario of salarios) {
        gastoTotal += salario < 2000 ? salario * 1.1 : salario;
    }

    return gastoTotal;
}

console.log(calcularBonus([1500, 2000, 2500, 1800]));