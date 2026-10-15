const duplicados = ["Ana", "Zé", "Ana", "Zé", "Bia"];
const semDuplicados = [...new Set(duplicados)];

console.log(semDuplicados); // [1, 2, 3]