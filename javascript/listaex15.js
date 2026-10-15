function guardarSegredo(){
    const segredo = "123";
    return segredo;
}
try{
    console.log(segredo);
}catch (erro){
    console.error("erro comprovado", erro.message);
}